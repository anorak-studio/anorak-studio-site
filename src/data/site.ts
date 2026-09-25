// Everything about the studio in one place. Edit here, it updates every page.

export const site = {
  name: 'Anorak Studio',
  tagline: 'Simple. Créatif. Efficace.',
  heroTitle: 'Inspiré par les grands espaces',
  description:
    "Firme de design et de communication spécialisée en communication visuelle : identité, web, vidéo, édition, imprimé, illustration et design responsable.",
  director: 'Mathieu Fortin, D.A. et designer graphique',
  about:
    "L'espace de création dirigé par Mathieu Fortin, D.A. et designer graphique, entouré de collaborateurs : programmeurs, photographes et rédacteurs.",
  mission:
    "Notre métier, c'est aussi découvrir des projets, rencontrer des gens, partager des concepts…",
  email: 'allo@anorakstudio.ca',
  emailDirect: 'm.fortin@anorakstudio.ca',
  phone: '418 524-2578',
  phoneHref: 'tel:+14185242578',
  address: {
    street: '480 rue Victoria',
    city: 'Québec (Québec)',
    country: 'Canada',
    postal: 'G1K 5C7',
  },
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/AnorakStudio' },
    { label: 'YouTube', href: 'https://www.youtube.com/user/WazakNitrof' },
    { label: 'Linktree', href: 'https://linktr.ee/anorakstudio' },
  ],
  // Contact form: paste a Formspree (or similar) endpoint here to activate the form.
  // Left empty, the form falls back to opening the visitor's email app.
  formEndpoint: '',
};

export const nav = [
  { label: 'Projets', href: '/projets/' },
  { label: 'Services', href: '/services/' },
  { label: 'Boutique', href: '/boutique/' },
  { label: 'Contact', href: '/contact/' },
];

// Old site category names, reused as project filters.
export const categories = [
  'Design responsable',
  'Identité',
  'Illustration',
  'Imprimé',
  'Publicité',
  'Web',
] as const;

// Image paths point to /images/old-site/<year>/<month>/<file>, the same layout as
// WordPress uploads, so the extractor script drops them in the right place.
export const services = [
  {
    id: 'identite',
    title: 'Identité visuelle',
    image: '/images/old-site/2024/02/1-identification.jpg',
    text: "L'identification visuelle est la signature qu'on appose sur la majorité des communications émises par une entreprise. Plus de douze ans d'expertise en design pour créer une image forte, cohérente et durable.",
  },
  {
    id: 'imprime',
    title: 'Imprimé et édition',
    image: '/images/old-site/2024/02/3-edition-2.jpg',
    text: "Bannières, affiches, brochures, cartes professionnelles, emballages de produits, rapports annuels et livres.",
  },
  {
    id: 'web',
    title: 'Web et multimédias',
    image: '/images/old-site/2024/02/2-web.jpg',
    text: "Des sites web adaptatifs qui fonctionnent sur tous les appareils, comme Quoi Faire à Québec.com et Vigilance. Expérience en commerce électronique.",
  },
  {
    id: 'illustration',
    title: 'Illustration',
    image: '/images/old-site/2024/02/4-illustration.jpg',
    text: "Plusieurs styles possibles : classique, corporatif, éducatif, conceptuel ou ludique.",
  },
  {
    id: 'publicite',
    title: 'Publicité',
    image: '/images/old-site/2024/02/5-publicite1.jpg',
    text: "Des messages positifs et artistiques, sans surcharge visuelle.",
  },
];
