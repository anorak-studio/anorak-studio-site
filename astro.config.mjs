// @ts-check
import { defineConfig } from 'astro/config';

// Static site: Cloudflare Pages serves the /dist folder directly, no adapter needed.
// If we later need server code (shop API, contact form), add @astrojs/cloudflare.
export default defineConfig({
  site: 'https://anorakstudio.ca',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
