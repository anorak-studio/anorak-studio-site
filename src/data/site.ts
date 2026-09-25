// Everything about the studio in one place. Edit here, it updates every page.

export const site = {
  name: 'Anorak Studio',
  since: 2007,
  tagline: 'Simple. Créatif. Efficace.',
  heroTitle: 'Inspiré par les grands espaces',
  heroImage: '/images/site/hero-riviere.jpg',
  texture: '/images/site/fougeres.jpg',
  intro: [
    "Anorak Studio est un studio de création de Québec, actif depuis 2007. Image de marque, réalisation de films, gamification, web et pixel art : on met le design au service de projets qui ont quelque chose à dire.",
    "La science est au cœur de notre pratique. On accompagne chercheurs, universités et organismes pour faire rayonner leurs projets : film, logo, site web, jeu.",
  ],
  description:
    "Studio de création de Québec depuis 2007 : image de marque, réalisation, gamification, web, illustration et pixel art. La science au cœur de notre pratique.",
  // Big text on the green band (home page)
  statement: {
    title: "À l'ère de l'IA, le design a plus que jamais sa place.",
    text: "Les outils changent, le regard reste. Une idée claire, une image juste et une histoire bien racontée : c'est encore ce qui rend un projet percutant. Depuis 2007, on mélange l'expérience du design, de la réalisation et du jeu pour créer des projets qui marquent.",
  },
  about: [
    "Anorak Studio, c'est le studio de Mathieu Fortin : directeur artistique, designer graphique, réalisateur et pixel artiste. Depuis 2007, il s'entoure de collaborateurs de confiance (programmeurs, animateurs, photographes, rédacteurs, chercheurs) selon les besoins de chaque projet.",
    "Un projet scientifique à faire rayonner, un film, un jeu, une marque à bâtir? Une petite équipe, disponible et accessible, pour des projets qui ont du sens.",
  ],
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
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/AnorakStudio' },
    { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/user/WazakNitrof' },
    { label: 'Linktree', icon: 'linktree', href: 'https://linktr.ee/anorakstudio' },
  ],
  // Contact form: paste a Formspree (or similar) endpoint here to activate the form.
  // Left empty, the form opens the visitor's email app instead.
  formEndpoint: '',
  // Shows the "À compléter" reminders on projects. Set to false before launch.
  showTodo: true,
};

export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projets/' },
  { label: 'Services', href: '/services/' },
  { label: 'Réalisation', href: '/realisation/' },
  { label: 'Gamification', href: '/gamification/' },
  { label: 'Boutique', href: '/boutique/' },
  { label: 'Contact', href: '/contact/' },
];

// Filters on the Projets page, in this order. Each project lists its own in its file.
export const categories = [
  'Réalisation',
  'Gamification',
  'Jeu vidéo',
  'Science',
  'Identité',
  'Web',
  'Imprimé',
  'Illustration',
  'Vidéo',
];

export const services = [
  {
    id: 'identite',
    title: 'Image de marque',
    image: '/images/old-site/2024/02/1-identification.jpg',
    lead: "Logo, identité visuelle et image de marque, y compris pour les projets scientifiques.",
    text: [
      "Votre identité visuelle est la signature de toutes vos communications. On crée des marques simples et durables, qui se reconnaissent au premier coup d'œil.",
      "On a une expertise particulière dans le branding de projets scientifiques : chaires de recherche, laboratoires, projets universitaires et de transfert de connaissances.",
    ],
  },
  {
    id: 'realisation',
    title: 'Réalisation',
    image: '/images/site/carrousel-3.jpg',
    lead: "Courts métrages, documentaires, vidéos de vulgarisation et capsules.",
    text: [
      "De l'idée au montage final : scénarisation, réalisation, motion design et animation. Nos films circulent en festivals (Prix du meilleur court métrage canadien au FIFA 42).",
      "On réalise aussi des vidéos qui font comprendre la science : l'art comme vecteur de transfert de connaissances.",
    ],
  },
  {
    id: 'gamification',
    title: 'Gamification et jeux',
    image: '/images/site/carrousel-1.jpg',
    lead: "Conception de jeux, expériences ludiques et services-conseils.",
    text: [
      "Transformer une démarche complexe en expérience qu'on a envie de vivre. On participe régulièrement à la conception et au développement de projets gamifiés, comme Datagotchi, et on offre des services-conseils en gamification.",
      "Anorak Studio Games développe aussi ses propres jeux en pixel art.",
    ],
  },
  {
    id: 'web',
    title: 'Web et applications',
    image: '/images/old-site/2024/02/2-web.jpg',
    lead: "Sites web, applications et boutiques en ligne.",
    text: [
      "Des sites qui s'adaptent à tous les écrans, simples à mettre à jour, et des applications web pensées pour leurs utilisateurs. On a aussi de l'expérience en commerce électronique.",
    ],
  },
  {
    id: 'illustration',
    title: 'Illustration et pixel art',
    image: '/images/old-site/2024/02/4-illustration.jpg',
    lead: "Illustration classique, conceptuelle, éducative ou ludique, et pixel art.",
    text: [
      "Quelques coups de crayon (ou de pixels) peuvent tout changer dans un projet de communication. Du style classique au pixel art de jeu vidéo.",
    ],
  },
  {
    id: 'imprime',
    title: 'Imprimé et édition',
    image: '/images/old-site/2024/02/3-edition-2.jpg',
    lead: "Livres, revues, affiches, dépliants, emballages et expositions.",
    text: [
      "Bannières, affiches, dépliants, emballages de produits, rapports, livres et revues scientifiques : on vous accompagne jusqu'à l'impression.",
    ],
  },
];

export const realisation = {
  title: 'La réalisation',
  intro: [
    "Mathieu Fortin est réalisateur. Il signe désormais des courts métrages de fiction et des documentaires, souvent à la frontière de l'art et de la science.",
    "Du docu-cirque Urgences Rurales 360 au documentaire ABKT en production, on explore l'art comme vecteur de transfert de connaissances.",
  ],
  projects: ['urgences-rurales-360', 'abkt', 'the-unearthly-notes', 'art-robots', 'la-mue'],
};

export const gamification = {
  title: 'La gamification',
  intro: [
    "Le jeu est un formidable outil pour apprendre, comprendre et participer. On conçoit des expériences ludiques et on offre des services-conseils en gamification, surtout pour des projets scientifiques et citoyens.",
    "Datagotchi et Prof. Datagotchi en sont de parfaits exemples. Fungus Forest est un jeu déjà livré et jouable en ligne, et Doomed Raiders est notre projet coup de cœur, développé à l'interne.",
  ],
  projects: ['datagotchi', 'prof-datagotchi', 'fungus-forest', 'doomed-raiders'],
};

export const boutique = {
  title: 'Boutique Wooders',
  text: "Des vêtements illustrés, tout droit sortis des bois. Les gilets Wooders arrivent bientôt sur le site.",
  href: 'https://www.wooders.ca/',
};
