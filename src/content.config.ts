import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One Markdown file per project in src/content/projets/.
// This is also the shape a CMS (Decap, Sanity, etc.) would edit later.
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    summary: z.string(),
    categories: z.array(z.string()).default([]),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(100),
    featured: z.boolean().default(true),
    // Old WordPress URL slug, used for redirects from /v2/portfolio/<slug>/
    legacySlug: z.string().optional(),
  }),
});

export const collections = { projets };
