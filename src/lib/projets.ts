import { getCollection, type CollectionEntry } from 'astro:content';
import { isLandscape } from './image-dims';

/** Published projects: new ones first (order 1-99), then the old ones (100+). */
export async function getProjets() {
  return (await getCollection('projets', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}

/** Projects picked by id, in the given order (for the Réalisation / Gamification sections). */
export async function pickProjets(ids: string[]) {
  const all = await getProjets();
  return ids.map((id) => all.find((p) => p.id === id)).filter((p) => p !== undefined);
}

/** Projects tagged "À découvrir" in the CMS (the `aDecouvrir` field — internal bookkeeping,
 * never shown to visitors), in the same order as getProjets(). Drives the homepage "À
 * découvrir" section, so that curation happens entirely from the CMS instead of a fixed list
 * of ids hardcoded in site.ts. */
export async function getADecouvrir() {
  return (await getProjets()).filter((p) => p.data.aDecouvrir);
}

/** The image for a project's big detail-page hero band: `cover` if it's landscape (or its
 * dimensions are unknown), otherwise the first landscape image in `gallery` when there is one
 * — a portrait poster stretched full-width and cropped to a wide band loses far more of the
 * image than a landscape photo does, so when a landscape alternative exists, prefer it here.
 * (This only picks the hero image; `cover` itself is untouched — it still drives the grid
 * thumbnail, OG image, etc.) */
export function heroImageFor(data: CollectionEntry<'projets'>['data']): string | undefined {
  if (!data.cover) return data.cover;
  if (isLandscape(data.cover)) return data.cover;
  const landscapeGalleryImg = data.gallery.find((src) => isLandscape(src));
  return landscapeGalleryImg ?? data.cover;
}

/** The image for a masonry grid vignette (À découvrir, grille Projets) — the opposite
 * preference from `heroImageFor`: these tiles are tall/portrait cards, so a vertical photo
 * reads better as a vignette than a landscape one does. An explicit `thumb` set in the CMS
 * always wins (that's the field's whole purpose — picking the grid vignette by hand), else
 * `cover` if it's already portrait, else the first portrait image in `gallery`, else `cover`. */
export function gridThumbFor(data: CollectionEntry<'projets'>['data']): string | undefined {
  if (data.thumb) return data.thumb;
  if (data.cover && !isLandscape(data.cover)) return data.cover;
  const portraitGalleryImg = data.gallery.find((src) => !isLandscape(src));
  return portraitGalleryImg ?? data.cover;
}
