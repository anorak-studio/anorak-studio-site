import { getCollection } from 'astro:content';

/** Published projects, in the same order as the old site (menu order). */
export async function getProjets() {
  return (await getCollection('projets', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
