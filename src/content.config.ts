import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projets/ (imported from the old site).
// The file name is the old WordPress slug, so /v2/portfolio/<slug>/ -> /projets/<slug>/.
// This is also the shape a CMS (Decap, Sanity, etc.) would edit later.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().default(''),
    categories: z.array(z.string()).default([]),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    videos: z.array(z.string()).default([]), // YouTube video IDs
    order: z.number().default(100),
    date: z.coerce.date().optional(),
    draft: z.boolean().default(false), // drafts are not published
  }),
});

export const collections = { projets };
