// Reads the live Wooders/Printify product catalog from Shopify's Storefront API at build
// time (this call runs once when the site is built, not in the visitor's browser — Astro
// bakes the result into the static page). Cart and payment are NOT handled here: each
// product links straight to its Shopify-hosted product page, where Shopify's own checkout
// takes over. That's the simplest working setup (docs/boutique-plan.md's "Buy Button"-style
// alternative) — a full in-site cart can replace this later without changing this file's
// shape much.
//
// The token below is a Storefront API *public* access token: Shopify designs it to be
// embedded in client-side code, so committing it here is safe (unlike an Admin API token
// or the Storefront "private" token, which must never be exposed).
const SHOPIFY_DOMAIN = 'anorakstudio.myshopify.com';
const STOREFRONT_TOKEN = '889093c59e33d82536c05dcb5c3c5f20';
const API_VERSION = '2025-10';

export type ShopProduct = {
  handle: string;
  title: string;
  description: string;
  image: { url: string; alt: string } | null;
  priceMin: string;
  priceMax: string;
  currency: string;
  available: boolean;
  url: string;
};

const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int!) {
    products(first: $first, sortKey: TITLE) {
      nodes {
        handle
        title
        description
        availableForSale
        featuredImage { url altText }
        priceRange {
          minVariantPrice { amount currencyCode }
          maxVariantPrice { amount currencyCode }
        }
      }
    }
  }
`;

/** All products currently published to the "Headless" (anorakstudio.ca) sales channel.
 * Returns an empty array (never throws) if Shopify is unreachable at build time, so a
 * hiccup there doesn't fail the whole site build — the boutique page just falls back to
 * its "coming soon" copy for that run. */
export async function getShopProducts(): Promise<ShopProduct[]> {
  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: PRODUCTS_QUERY, variables: { first: 48 } }),
    });
    if (!res.ok) {
      console.warn(`[shopify] Storefront API responded ${res.status}`);
      return [];
    }
    const json = await res.json();
    if (json.errors) {
      console.warn('[shopify] Storefront API errors:', json.errors);
      return [];
    }
    type Node = {
      handle: string;
      title: string;
      description: string;
      availableForSale: boolean;
      featuredImage: { url: string; altText: string | null } | null;
      priceRange: {
        minVariantPrice: { amount: string; currencyCode: string };
        maxVariantPrice: { amount: string; currencyCode: string };
      };
    };
    const nodes: Node[] = json.data?.products?.nodes ?? [];
    return nodes.map((p) => ({
      handle: p.handle,
      title: p.title,
      description: p.description,
      image: p.featuredImage ? { url: p.featuredImage.url, alt: p.featuredImage.altText || p.title } : null,
      priceMin: p.priceRange.minVariantPrice.amount,
      priceMax: p.priceRange.maxVariantPrice.amount,
      currency: p.priceRange.minVariantPrice.currencyCode,
      available: p.availableForSale,
      url: `https://${SHOPIFY_DOMAIN}/products/${p.handle}`,
    }));
  } catch (err) {
    console.warn('[shopify] fetch failed at build time:', err);
    return [];
  }
}

/** Formats a Shopify price amount + currency the way visitors expect ("24,00 $"), and
 * shows a "à partir de" range when a product's variants span more than one price. */
export function formatPrice(p: ShopProduct): string {
  const fmt = (n: string) => new Intl.NumberFormat('fr-CA', { style: 'currency', currency: p.currency }).format(Number(n));
  return p.priceMin === p.priceMax ? fmt(p.priceMin) : `À partir de ${fmt(p.priceMin)}`;
}
