# Anorak Studio: nouveau site (Astro + Cloudflare Pages)

The base of the new anorakstudio.ca, rebuilt from the old WordPress site (v2).
French content, fresh design, the same projects, services and contact info.

## 1. First run (on your computer)

You need Node.js 20 or newer (https://nodejs.org) and Python 3.

```bash
cd anorak-studio-site
npm install
npm run dev          # opens http://localhost:4321
```

Or open the folder with Claude Code and say "install and run the site".

## 2. Pull the images and old text out of the backup

```bash
python3 tools/extract-wpress.py ~/Downloads/anorakstudio-ca-v2-20260302-185901-qwnnz1h59w4x.wpress
```

- Every media-library image goes to `public/images/old-site/<year>/<month>/`,
  the same folders as WordPress. WordPress's auto-resized copies are skipped;
  add `--all-sizes` to keep them.
- All the old pages and projects (text, featured image, image list) are exported to
  `tools/out/old-site-content.md` (to read) and `tools/out/old-site-content.json`
  (for Claude to fill in the project pages).
- `--full` also unpacks themes and plugins to `tools/out/wpress/`.

Images that are already referenced (services, Tutto Gelato) show up right away.
Until an image is there, the site shows a striped "Image à venir" placeholder
instead of a broken image.

## 3. Where things live

| What | File |
|---|---|
| Contact info, socials, tagline, services | `src/data/site.ts` |
| Projects (one file each) | `src/content/projets/*.md` |
| Colors and fonts (design tokens) | `src/styles/global.css` (`:root`) |
| Pages | `src/pages/` |
| Old URL redirects (`/v2/...`) | `public/_redirects` |

To add a project, copy a `.md` file in `src/content/projets/`, change the text,
and point `cover` and `gallery` to images in `public/images/`.

## 4. Still to do

- [ ] Run the extractor, then fill in the text and images for 5 projects
      (Sine Qua Non, Métiers d'Art Charlevoix, Relais Coop, Caouane, Aide aux sinistrés).
      Their categories are placeholders too.
- [ ] Real logo (`public/`) to replace the temporary triangle mark in `Header.astro`
- [ ] Contact form: set `formEndpoint` in `src/data/site.ts` (e.g. Formspree), or
      add a Cloudflare Pages Function
- [ ] Boutique: Printify → Shopify, then show products on `/boutique/`
- [ ] English version (Astro i18n) if needed
- [ ] CMS (Decap CMS or Sanity) to edit projects without code

## 5. Deploy on Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → connect the repo.
   Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
3. Every push to `main` goes live; every other branch gets its own preview URL.
4. Custom domain: add anorakstudio.ca under the Pages project → Custom domains.

**Email warning:** if you move the domain's DNS to Cloudflare, copy the MX, SPF,
DKIM and autodiscover records from Web Hosting Canada first, so that
allo@anorakstudio.ca keeps working.

## Anorak Studio Games variant

Same codebase pattern: duplicate the repo, change the `:root` tokens in
`global.css`, `src/data/site.ts` and the content. Deploy it as a second
Cloudflare Pages project (e.g. games.anorakstudio.ca or your .com).
