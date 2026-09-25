#!/usr/bin/env python3
"""
Unpack an All-in-One WP Migration backup (.wpress) for the new Anorak Studio site.

What it does (Python 3.8+, no extra packages needed):
  1. Copies every image from the WordPress media library (wp-content/uploads)
     into  public/images/old-site/<year>/<month>/<file>   (same folders as WordPress)
     WordPress's auto-resized copies (photo-300x200.jpg, etc.) are skipped by default.
  2. Saves the database dump to  tools/out/database.sql
  3. Reads the database and writes every page, post and portfolio project
     (title, slug, text, images, featured image) to
        tools/out/old-site-content.json   (for Claude / scripts)
        tools/out/old-site-content.md     (easy to read)

Usage, from the project folder:
    python3 tools/extract-wpress.py path/to/anorakstudio-ca-v2-....wpress

Options:
    --all-sizes   also copy WordPress's resized image variants
    --full        also unpack the whole archive (themes, plugins...) to tools/out/wpress/
"""
import argparse
import html
import json
import os
import re
import sys

HEADER_SIZE = 4377  # name 255 + size 14 + mtime 12 + path 4096
IMAGE_EXT = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp', '.tif', '.tiff', '.ico'}
RESIZED = re.compile(r'-\d{2,5}x\d{2,5}(?=\.[a-z0-9]+$)', re.I)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_OUT = os.path.join(ROOT, 'public', 'images', 'old-site')
OUT = os.path.join(ROOT, 'tools', 'out')


def cstr(b):
    return b.split(b'\x00', 1)[0].decode('utf-8', 'replace')


def iter_archive(f):
    """Yield (relative_path, size, file_obj positioned at content)."""
    while True:
        header = f.read(HEADER_SIZE)
        if len(header) < HEADER_SIZE or header == b'\x00' * HEADER_SIZE:
            return
        name = cstr(header[0:255])
        size = int(cstr(header[255:269]) or 0)
        prefix = cstr(header[281:4377])
        rel = name if prefix in ('', '.') else prefix.rstrip('/\\') + '/' + name
        rel = rel.replace('\\', '/').lstrip('./')
        if rel.startswith('wp-content/'):
            rel = rel[len('wp-content/'):]
        start = f.tell()
        yield rel, size, f
        f.seek(start + size)


def copy_bytes(f, size, dest):
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    left = size
    with open(dest, 'wb') as o:
        while left > 0:
            chunk = f.read(min(1 << 20, left))
            if not chunk:
                break
            o.write(chunk)
            left -= len(chunk)


def safe_join(base, rel):
    dest = os.path.normpath(os.path.join(base, rel))
    if not dest.startswith(os.path.normpath(base) + os.sep):
        raise ValueError('unsafe path in archive: ' + rel)
    return dest


# ---------------------------------------------------------------- SQL parsing
def parse_values(s, i):
    """Parse '(v, v, ...),(...)' starting at s[i]. Returns list of rows."""
    rows, n = [], len(s)
    while i < n:
        while i < n and s[i] in ' \t\r\n,':
            i += 1
        if i >= n or s[i] != '(':
            break
        i += 1
        row = []
        while True:
            while s[i] in ' \t\r\n':
                i += 1
            c = s[i]
            if c == "'":
                i += 1
                buf = []
                while True:
                    c = s[i]
                    if c == '\\':
                        nxt = s[i + 1]
                        buf.append({'n': '\n', 'r': '\r', 't': '\t', '0': '\x00', 'Z': '\x1a'}.get(nxt, nxt))
                        i += 2
                    elif c == "'":
                        if i + 1 < n and s[i + 1] == "'":
                            buf.append("'")
                            i += 2
                        else:
                            i += 1
                            break
                    else:
                        j = i
                        while s[j] not in "\\'":
                            j += 1
                        buf.append(s[i:j])
                        i = j
                row.append(''.join(buf))
            else:
                j = i
                while s[j] not in ',)':
                    j += 1
                tok = s[i:j].strip()
                row.append(None if tok.upper() == 'NULL' else tok)
                i = j
            while s[i] in ' \t\r\n':
                i += 1
            if s[i] == ',':
                i += 1
                continue
            if s[i] == ')':
                i += 1
                break
        rows.append(row)
    return rows


def load_tables(sql, wanted):
    cols, data = {}, {t: [] for t in wanted}
    for m in re.finditer(r'CREATE TABLE `([^`]+)` \((.*?)\n\)', sql, re.S):
        table = m.group(1)
        short = re.sub(r'^.*?_(?=(posts|postmeta|options|terms|term_taxonomy|term_relationships)$)', '', table)
        if short in wanted:
            cols[short] = re.findall(r'^\s*`([^`]+)`', m.group(2), re.M)
    for m in re.finditer(r'INSERT INTO `([^`]+)`(?: \([^)]*\))? VALUES ', sql):
        table = m.group(1)
        short = re.sub(r'^.*?_(?=(posts|postmeta|options|terms|term_taxonomy|term_relationships)$)', '', table)
        if short not in wanted:
            continue
        try:
            rows = parse_values(sql, m.end())
        except IndexError:
            continue
        data[short].extend(dict(zip(cols.get(short, []), r)) for r in rows)
    return data


def strip_html(s):
    s = re.sub(r'<!--.*?-->', '', s or '', flags=re.S)
    s = re.sub(r'\[/?[a-zA-Z_][^\]]*\]', '', s)  # shortcodes
    s = re.sub(r'<(br|/p|/h\d|/li|/div)\s*/?>', '\n', s, flags=re.I)
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    return re.sub(r'\n\s*\n+', '\n\n', s).strip()


def upload_path(url):
    m = re.search(r'wp-content/uploads/(.+?)(?:[?#"\s]|$)', url or '')
    return m.group(1) if m else None


def elementor_text(raw):
    texts, images = [], []
    try:
        data = json.loads(raw)
    except Exception:
        return texts, images

    def walk(node):
        if isinstance(node, dict):
            for k, v in node.items():
                if isinstance(v, str) and k in ('editor', 'title', 'text', 'description_text', 'title_text',
                                                'testimonial_content', 'html', 'caption', 'inner_text'):
                    t = strip_html(v)
                    if t:
                        texts.append(t)
                elif k == 'url' and isinstance(v, str) and upload_path(v):
                    images.append(upload_path(v))
                else:
                    walk(v)
        elif isinstance(node, list):
            for x in node:
                walk(x)

    walk(data)
    return texts, images


def export_content(sql_path):
    with open(sql_path, encoding='utf-8', errors='replace') as fh:
        sql = fh.read()
    t = load_tables(sql, {'posts', 'postmeta', 'terms', 'term_taxonomy', 'term_relationships'})
    meta = {}
    for r in t['postmeta']:
        meta.setdefault(r.get('post_id'), {})[r.get('meta_key')] = r.get('meta_value')
    attach = {r['ID']: (meta.get(r['ID'], {}).get('_wp_attached_file') or upload_path(r.get('guid')))
              for r in t['posts'] if r.get('post_type') == 'attachment'}
    terms = {r['term_id']: r['name'] for r in t['terms']}
    tax = {r['term_taxonomy_id']: (r['taxonomy'], terms.get(r['term_id'])) for r in t['term_taxonomy']}
    post_terms = {}
    for r in t['term_relationships']:
        tx = tax.get(r['term_taxonomy_id'])
        if tx:
            post_terms.setdefault(r['object_id'], {}).setdefault(tx[0], []).append(tx[1])

    skip = {'attachment', 'revision', 'nav_menu_item', 'customize_changeset', 'oembed_cache', 'wp_global_styles',
            'elementor_library', 'wp_navigation', 'custom_css', 'user_request', 'wpcf7_contact_form', 'e-landing-page'}
    items = []
    for r in t['posts']:
        if r.get('post_type') in skip or r.get('post_status') not in ('publish', 'draft', 'private', 'future'):
            continue
        m = meta.get(r['ID'], {})
        texts, imgs = elementor_text(m.get('_elementor_data') or '')
        imgs += [p for p in (upload_path(u) for u in re.findall(r'(?:src|href)="([^"]+)"', r.get('post_content') or '')) if p]
        imgs += [attach[i] for i in re.findall(r'"id":\s*(\d+)', m.get('_elementor_data') or '') if i in attach]
        body = strip_html(r.get('post_content'))
        items.append({
            'id': r['ID'],
            'type': r.get('post_type'),
            'status': r.get('post_status'),
            'title': html.unescape(r.get('post_title') or ''),
            'slug': r.get('post_name'),
            'date': r.get('post_date'),
            'excerpt': strip_html(r.get('post_excerpt')),
            'text': body,
            'builder_text': texts,
            'featured_image': attach.get(m.get('_thumbnail_id')),
            'images': list(dict.fromkeys(imgs)),
            'terms': post_terms.get(r['ID'], {}),
        })
    items.sort(key=lambda x: (x['type'], x['date'] or ''))
    with open(os.path.join(OUT, 'old-site-content.json'), 'w', encoding='utf-8') as o:
        json.dump(items, o, ensure_ascii=False, indent=2)
    with open(os.path.join(OUT, 'old-site-content.md'), 'w', encoding='utf-8') as o:
        o.write('# Contenu de l\'ancien site\n\n')
        for it in items:
            o.write(f"## {it['title'] or '(sans titre)'}\n\n")
            o.write(f"- Type : {it['type']} ({it['status']})  \n- Slug : {it['slug']}\n")
            if it['terms']:
                o.write('- ' + '; '.join(f"{k} : {', '.join(filter(None, v))}" for k, v in it['terms'].items()) + '\n')
            if it['featured_image']:
                o.write(f"- Image principale : /images/old-site/{it['featured_image']}\n")
            o.write('\n')
            for block in ([it['text']] if it['text'] else []) + it['builder_text']:
                o.write(block + '\n\n')
            if it['images']:
                o.write('Images :\n' + ''.join(f"- /images/old-site/{p}\n" for p in it['images']) + '\n')
    return items


# ---------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('wpress')
    ap.add_argument('--all-sizes', action='store_true')
    ap.add_argument('--full', action='store_true')
    a = ap.parse_args()

    os.makedirs(OUT, exist_ok=True)
    n_img = n_skip = total_bytes = 0
    sql_path = None
    with open(a.wpress, 'rb') as f:
        for rel, size, fh in iter_archive(f):
            low = rel.lower()
            if a.full:
                copy_bytes(fh, size, safe_join(os.path.join(OUT, 'wpress'), rel))
                fh.seek(fh.tell() - size)
            if rel == 'database.sql':
                sql_path = os.path.join(OUT, 'database.sql')
                copy_bytes(fh, size, sql_path)
            elif low.startswith('uploads/') and os.path.splitext(low)[1] in IMAGE_EXT:
                sub = rel[len('uploads/'):]
                if not a.all_sizes and RESIZED.search(os.path.basename(sub)) and not sub.startswith('elementor/'):
                    n_skip += 1
                    continue
                copy_bytes(fh, size, safe_join(IMG_OUT, sub))
                n_img += 1
                total_bytes += size

    print(f'Images copiées : {n_img} ({total_bytes / 1e6:.1f} Mo) -> public/images/old-site/')
    if n_skip:
        print(f'Variantes redimensionnées ignorées : {n_skip} (ajoutez --all-sizes pour les garder)')
    if sql_path:
        items = export_content(sql_path)
        kinds = {}
        for it in items:
            kinds[it['type']] = kinds.get(it['type'], 0) + 1
        print('Contenu exporté :', ', '.join(f'{v} {k}' for k, v in kinds.items()))
        print('  -> tools/out/old-site-content.md  et  tools/out/old-site-content.json')
    else:
        print('Aucun database.sql trouvé dans l\'archive.')


if __name__ == '__main__':
    sys.exit(main())
