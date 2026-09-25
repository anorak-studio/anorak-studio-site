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

## 2. Content

- **33 projects** in `src/content/projets/`: 15 new ones first (order 1-99), then the 18 old
  projects kept from anorakstudio.ca/v2 (order 100+, same slugs as the old URLs).
- Home hero (image or video, text on/off and position) and carousel slides (media, text,
  link, text on/off): `hero` and `carousel` in `src/data/site.ts`.
- Réalisation featured 16:9 media (image, video file, YouTube or Vimeo): `realisation.featured`.
- Réalisation and Gamification sections: lists of projects in `src/data/site.ts`.
- Old site images still used: `public/images/old-site/`. Brand images: `public/images/site/`.
- **What's missing, project by project: `docs/A-COMPLETER.md`.**
- Shop plan (Wooders, Printify, Shopify, multi-currency, FR/EN): `docs/boutique-plan.md`.
- Dump of the old site's texts: `docs/old-site-content.md`.

## 3. Where things live

| What | File |
|---|---|
| Texts, services, contact, nav, filters, Réalisation/Gamification lists | `src/data/site.ts` |
| Projects (one file each) | `src/content/projets/*.md` |
| Colors and fonts (design tokens) | `src/styles/global.css` (`:root`) |
| Header / full-screen menu, footer | `src/components/Header.astro`, `Footer.astro` |
| Pages | `src/pages/` |
| Old URL redirects (`/v2/...`) | `public/_redirects` |

A project file supports: `title`, `summary`, `status`, `categories`, `cover`, `carousel`,
`gallery`, `videos` (YouTube IDs), `links`, `ai` (IA tag), `shop`, `todo`, `order`, `draft`.

## 4. Before launch

- [ ] Fill in `docs/A-COMPLETER.md`, then set `showTodo: false` in `src/data/site.ts`
- [ ] Contact form: set `formEndpoint` (e.g. Formspree) or add a Cloudflare Pages Function
- [ ] English version (Astro i18n)
- [ ] Boutique (phase 2) and CMS (Decap CMS or Sanity)

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
