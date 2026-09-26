import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projets/.
// Old projects keep their WordPress slug as file name (/v2/portfolio/<slug>/ -> /projets/<slug>/).
// This is also the shape a CMS (Decap, Sanity, etc.) would edit later.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    status: z.string().optional(), // e.g. "Documentaire en production"
    categories: z.array(z.string()).default([]), // shown on the project page and used by the filters
    cover: z.string().optional(),
    // Horizontal image for grid tiles (Réalisation, Projets récents, etc.) when `cover` is a
    // vertical poster that wouldn't crop well as a small tile. Falls back to `cover` if unset.
    thumb: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    // YouTube video IDs. Accepts a plain string (old shape, defaults to "landscape" — every
    // project that already has videos is a normal 16:9 trailer) or an object with an explicit
    // `ratio`, used to size and group the video on the project page (see [id].astro): a portrait
    // (e.g. a Short) shows next to other portrait videos in their own full-width carousel,
    // separate from landscape/square ones, and each video's box matches its own ratio.
    videos: z
      .array(
        z
          .union([
            z.string(),
            z.object({ id: z.string(), ratio: z.enum(['landscape', 'portrait', 'square']).default('landscape') }),
          ])
          .transform((v) => (typeof v === 'string' ? { id: v, ratio: 'landscape' as const } : v)),
      )
      .default([]),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    ai: z.boolean().default(false), // shows an "IA" tag (project made with AI tools)
    shop: z.string().optional(), // note shown with a "Boutique" button
    todo: z.array(z.string()).default([]), // what's missing: shown as a reminder until empty
    order: z.number().default(100), // position in the grid (new projects 1-99, old ones 100+)
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false), // drafts are not published
  }),
});

export const collections = { projets };
