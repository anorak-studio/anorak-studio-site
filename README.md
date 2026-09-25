# Anorak Studio: nouveau site (Astro + Cloudflare Pages)

The new anorakstudio.ca, rebuilt from the old WordPress site (v2): same layout, images,
projects and texts, with a new green palette and new typography (Archivo + Inter).

## 1. First run (on your computer)

You need Node.js 20 or newer (https://nodejs.org) and Python 3.

```bash
cd anorak-studio-site
npm install
npm run dev          # opens http://localhost:4321
```

Or open the folder with Claude Code and say "install and run the site".

## 2. What came from the old site

Imported from the UpdraftPlus backup of anorakstudio.ca/v2 (September 2026):

- **All 175 original images** of the media library, in `public/images/old-site/<year>/<month>/`
  (WordPress's resized copies left out, very large files scaled to 2400 px max).
- **29 projects** (27 published + 2 drafts: Zecs Québec, Septante construction) with their text,
  categories, cover image, image gallery, YouTube videos and original order:
  `src/content/projets/`. Each file name is the old URL slug.
- **Logos** (ANORAK, ANORAK STUDIO, menu icon) as recolorable SVGs in `src/assets/logos/`.
- Page texts (home, services, contact, footer) in `src/data/site.ts`.
- A readable dump of every old page and project: `docs/old-site-content.md`.

`tools/extract-wpress.py` can still unpack an All-in-One WP Migration `.wpress` file
(useful for another WordPress site).

## 3. Where things live

| What | File |
|---|---|
| Contact info, socials, tagline, services, carousel | `src/data/site.ts` |
| Projects (one file each) | `src/content/projets/*.md` |
| Colors and fonts (design tokens) | `src/styles/global.css` (`:root`) |
| Header / full-screen menu, footer | `src/components/Header.astro`, `Footer.astro` |
| Pages | `src/pages/` |
| Old URL redirects (`/v2/...`) | `public/_redirects` |

To add a project, copy a `.md` file in `src/content/projets/`, change the text,
and point `cover` and `gallery` to images in `public/images/`. Set `draft: true` to hide it.
`order` sets its position in the grid.

## 4. Still to do

- [ ] Categories: on the old site almost every project was tagged with all six
      categories (and three with "Tout"). Clean them up if we want a working filter.
- [ ] Hero photo (`public/images/site/hero-riviere.jpg`) is only 1024 px wide: a larger
      original would look sharper full-width.
- [ ] Carousel: the 5 images prepared in March 2025 (hidden on the old site). Add links
      (trailers) in `src/data/site.ts` if wanted.
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
