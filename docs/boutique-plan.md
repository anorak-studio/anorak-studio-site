# Boutique : plan Wooders / Printify / Shopify

Phase 2, après le portfolio. À valider avec Mathieu.

## Situation actuelle
- Wooders (wooders.ca) : site Squarespace branché sur Printify. T-shirts, hoodies, casquettes, accessoires, prix en USD.
- Objectif : vendre les gilets Wooders (et le livre Unikaangit) directement sur anorakstudio.ca, avec
  des produits affichés sur la page d'accueil, en **plusieurs devises** et **bilingue FR/EN**.

## Recommandation : Shopify comme moteur de boutique, affiché dans le site Astro

1. **Créer une boutique Shopify** et y connecter le compte Printify (intégration officielle :
   les commandes partent automatiquement en production, rien à gérer en stock).
2. **Multidevise** : Shopify Markets + Shopify Payments convertissent et affichent les prix
   dans la devise du client (CAD, USD, EUR…), avec les droits et taxes calculés à la caisse.
3. **Bilingue** : Shopify gère plusieurs langues (application Translate & Adapt) ; le site Astro
   aura sa version anglaise en parallèle.
4. **Affichage sur anorakstudio.ca** : le site lit les produits par la Storefront API de Shopify
   au moment du build (grille de gilets sur l'accueil et sur /boutique/). Le panier et le paiement
   se font dans le checkout Shopify (sécurisé, rien à coder pour les paiements).
   Alternative plus simple pour commencer : le « Buy Button » de Shopify.
5. **wooders.ca** : peut rester sur Squarespace au début, puis pointer vers la même boutique
   Shopify pour ne gérer qu'un seul inventaire.

## Pourquoi pas Printify seul?
Printify n'a pas de caisse (checkout) intégrable dans un site. Il faudrait coder le panier,
le paiement (Stripe), les taxes, les devises et l'envoi des commandes par l'API Printify.
Faisable, mais beaucoup plus de travail et d'entretien que Shopify.

## Ce qu'il faudra
- Un forfait Shopify (voir les prix actuels sur shopify.com)
- Accès au compte Printify pour le connecter
- Un jeton « Storefront API » (Shopify) pour le site
- Photos des gilets et textes produits FR/EN

Sources : printify.com/blog/how-to-sell-internationally-on-shopify/,
printify.com/knowledge-hub/unlock-global-print-on-demand-profits-master-shopify-markets-and-multi-currency/
