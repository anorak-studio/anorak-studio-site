// Everything about the studio in one place. Edit here, it updates every page.
// Texts come from the old WordPress site (anorakstudio.ca/v2).

export const site = {
  name: 'Anorak Studio',
  tagline: 'Simple. Créatif. Efficace.',
  heroTitle: 'Inspiré par les grands espaces',
  heroImage: '/images/site/hero-riviere.jpg',
  texture: '/images/site/fougeres.jpg',
  intro:
    "Anorak Studio est un lieu de création de Québec spécialisé en communication visuelle. Identité, Web, Vidéo, Édition, Imprimé, Illustration, Design responsable, culturel et organisationnel.",
  description:
    "Lieu de création de Québec spécialisé en communication visuelle : identité, web, vidéo, édition, imprimé, illustration et design responsable.",
  mission:
    "Notre métier, c'est aussi découvrir des projets, rencontrer des gens, partager des concepts, suggérer des idées, trouver des solutions, inspirer la confiance, créer des messages et avoir du plaisir.",
  about: [
    "Anorak Studio, c'est l'espace de création dirigé par Mathieu Fortin, D.A. et designer graphique. Il travaille également avec d'autres collègues et amis, programmeurs, photographes et rédacteurs tout aussi perfectionnistes.",
    "Anorak Studio, c'est aussi une entreprise à échelle humaine disponible et accessible pour tous nos clients.",
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
};

// Same menu as the old site, plus the upcoming shop.
export const nav = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projets/' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Boutique', href: '/boutique/' },
];

// Home carousel (the 5 "Carrousel" images prepared on the old site in March 2025).
// Add `href` to make a slide clickable (e.g. a trailer on YouTube).
export const carousel = [
  { src: '/images/site/carrousel-1.jpg', alt: 'Anorak Studio Games' },
  { src: '/images/site/carrousel-2.jpg', alt: 'Art Robots' },
  { src: '/images/site/carrousel-3.jpg', alt: 'La Mue, un film de Mathieu Fortin' },
  { src: '/images/site/carrousel-4.jpg', alt: 'Urgences Rurales 360' },
  { src: '/images/site/carrousel-5.jpg', alt: 'Projet de drone' },
];

export const servicesIntro = {
  question: 'Vous êtes sur le point de lancer un projet?',
  answer: [
    "Appelez-nous pour en parler! Nous participons régulièrement à plusieurs étapes de démarrage d'entreprises et au lancement de différents projets.",
    "En introduisant le design graphique dès le début de votre projet, vous vous assurez d'avoir un plan cohérent pour rejoindre votre public.",
  ],
};

export const services = [
  {
    id: 'identite',
    title: 'Identité visuelle',
    image: '/images/old-site/2024/02/1-identification.jpg',
    text: [
      "L'identification visuelle est la signature qu'on appose sur la majorité des communications émises par une entreprise. Généralement développé lors de la création de l'organisation, votre logo est un outil important qui permet une reconnaissance rapide de votre société par le public.",
      'Cumulant plus de douze ans de pratique intensive en design, Anorak Studio est fier de vous offrir une expertise poussée dans ce domaine.',
    ],
  },
  {
    id: 'imprime',
    title: 'Imprimé et Édition',
    image: '/images/old-site/2024/02/3-edition-2.jpg',
    text: [
      "L'imprimé est le support physique associé à vos projets. Qu'il s'agisse de bannières, d'affiches, d'encarts, de dépliants, de cartes d'affaires, d'emballage de produits, de rapport annuel ou de livres, nous pouvons vous accompagner pour la réalisation de tous vos travaux d'édition.",
    ],
  },
  {
    id: 'web',
    title: 'Web et Multimédias',
    image: '/images/old-site/2024/02/2-web.jpg',
    text: [
      "Que vos visiteurs utilisent un ordinateur, une tablette ou un téléphone intelligent, nos sites web peuvent s'adapter en fonction des différents supports de diffusion. Nos projets connus, Quoi Faire à Québec.com, Le presse Agenda et Vigilance, surveillance de la crue des eaux se démarquent par leur envergure considérable.",
      'Tous nos sites sont également modifiables par leurs administrateurs.',
      "Nous avons aussi de l'expérience en commerce électronique.",
    ],
  },
  {
    id: 'illustration',
    title: 'Illustration',
    image: '/images/old-site/2024/02/4-illustration.jpg',
    text: [
      "Versé dans plusieurs styles différents, Anorak Studio vous offre également des services d'illustration.",
      'Dans un style classique, corporatif, éducatif, conceptuel ou ludique, quelques coups de crayons peuvent faire une belle différence dans un projet de communication réussi.',
    ],
  },
  {
    id: 'publicite',
    title: 'Publicité',
    image: '/images/old-site/2024/02/5-publicite1.jpg',
    text: [
      "Le monde vous écoute, exprimez-vous! Nous croyons qu'il est possible de communiquer un message positif et artistique au public, peu importe le média utilisé. Sans encombrement visuel anodin, insipide ou ennuyeux, Anorak Studio vous encourage à communiquer au monde un message positif, sensé et original.",
    ],
  },
];
