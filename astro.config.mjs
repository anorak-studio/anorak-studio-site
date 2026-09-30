// @ts-check
import { defineConfig } from 'astro/config';
import rehypeLinkTargets from './src/lib/rehype-link-targets.mjs';

// Static site: Cloudflare Pages serves the /dist folder directly, no adapter needed.
// If we later need server code (shop API, contact form), add @astrojs/cloudflare.
export default defineConfig({
  site: 'https://anorakstudio.ca',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Site-wide link rule: external links (markdown links in a project's body text)
  // always open in a new tab, internal links always stay in the same tab. The
  // `links:` frontmatter buttons handle this themselves in [id].astro.
  markdown: { rehypePlugins: [rehypeLinkTargets] },
});
