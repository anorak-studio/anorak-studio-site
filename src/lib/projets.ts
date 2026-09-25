import { getCollection } from 'astro:content';

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
