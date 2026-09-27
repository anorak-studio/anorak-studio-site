// Everything about the studio in one place. Edit here, it updates every page.

export type Media =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; poster?: string } // mp4/webm file, plays muted in a loop
  | { type: 'youtube'; id: string; poster?: string }
  | { type: 'vimeo'; id: string; poster?: string };
export type TextPosition = 'center' | 'bottom-left' | 'bottom-center' | 'top-left';

export const site = {
  name: 'Anorak Studio',
  since: 2010,
  sinceDate: '2010-02-01', // date de création officielle de l'entreprise
  tagline: 'Simple. Créatif. Efficace.',
  // Home hero: an image OR a video (mp4 in public/videos/, or a Vimeo/YouTube background later).
  hero: {
    media: { type: 'image', src: '/images/site/hero-riviere.jpg' } as Media,
    // media: { type: 'video', src: '/videos/hero.mp4', poster: '/images/site/hero-riviere.jpg' },
    text: 'Inspiré par les grands espaces',
    showText: true,
    position: 'center' as TextPosition, // 'center' | 'bottom-left' | 'bottom-center' | 'top-left'
  },
  heroImage: '/images/site/hero-riviere.jpg', // used for social sharing previews
  droneReel: '', // link to the drone demo reel (YouTube/Vimeo) when ready
  texture: '/images/site/fougeres.jpg',
  intro: [
    "Anorak Studio est un espace de création établi à Québec depuis 2010. Fondé par l'artiste multidisciplinaire Mathieu Fortin, il réunit design, cinéma, jeu vidéo et création numérique pour imaginer de nouvelles façons de communiquer, de raconter et de transmettre.",
    "Le studio réalise des identités visuelles, des films, des capsules vidéo, des sites web, des applications et des expériences ludiques. Il développe aussi ses propres courts métrages et jeux indépendants. Chaque mandat rassemble les collaborateurs dont les compétences répondent au projet.",
    "Anorak Studio travaille avec des entreprises, des organismes et des équipes de recherche qui souhaitent donner forme à une idée, partager des connaissances ou inviter un public à participer.",
  ],
  description:
    "Studio de création basé à Québec depuis 2010 : identité visuelle, film, jeu vidéo, web et design stratégique — avec l'art comme vecteur de transfert de connaissances.",
  // Big text on the green band (home page)
  statement: {
    title: "Donner une nouvelle vie aux idées.",
    text: "Une recherche peut devenir un film. Une question complexe peut devenir une expérience à explorer. Une identité peut se déployer dans tout un ensemble d'outils. Anorak Studio utilise l'art et le design pour créer des liens entre les connaissances, les projets et les personnes auxquelles ils s'adressent.",
  },
  about: [
    "Anorak Studio est l'espace de création de Mathieu Fortin, artiste multidisciplinaire, directeur artistique, designer graphique et réalisateur. Pour chaque mandat, il réunit des collaborateurs selon les compétences nécessaires : programmation, animation, photographie, rédaction, recherche ou production.",
    "L'approche du studio associe création et réflexion. Une entreprise peut avoir besoin d'une identité complète; une équipe de recherche, de nouvelles façons de partager ses résultats; une organisation, d'un film, d'un site ou d'une expérience qui mobilise son public.",
  ],
  // Services page: intro block ("Vous êtes sur le point de lancer un projet?")
  servicesIntro: {
    q: 'Vous êtes sur le point de lancer un projet?',
    text: [
      "Anorak Studio accompagne les projets dès leurs premières questions jusqu'à leur réalisation. Une identité à construire, une idée à mettre à l'épreuve, une recherche à partager ou une expérience à inventer : le travail commence par une discussion sur ce que le projet doit accomplir et sur les personnes qu'il souhaite rejoindre.",
      "Le studio peut prendre en charge une réalisation précise ou développer une gamme complète d'outils de communication. Cette souplesse permet de réunir les bons talents et les bons formats autour de chaque mandat.",
    ],
  },
  // Services page: band replacing the old "science" block — broader than research alone.
  approche: {
    eyebrow: 'Notre approche',
    title: "L'art au service du transfert de connaissances",
    text: [
      "Les connaissances ne circulent pas toutes seules. Pour qu'une recherche, une donnée ou une idée puisse être comprise et discutée, sa forme compte autant que son contenu.",
      "Anorak Studio explore ce que l'art peut apporter à cette rencontre : une image qui rend un phénomène visible, un film qui donne la parole aux personnes concernées, une expérience interactive qui permet d'essayer et de questionner. Ces approches peuvent faciliter le dialogue, nourrir une réflexion collective et contribuer à mobiliser les publics autour d'un enjeu.",
      "Cette pratique traverse plusieurs projets du studio, sans limiter son travail au milieu de la recherche. Elle est également au cœur d'ABKT, un documentaire en production consacré au transfert de connaissances par l'art.",
    ],
  },
  // Services page: short, discreet note on AI tools (not a headline promise).
  aiNote:
    "Les outils évoluent, y compris ceux fondés sur l'intelligence artificielle. Anorak Studio les utilise lorsqu'ils apportent quelque chose au projet, avec le regard acquis par des années de pratique en design, en image et en réalisation. Leur emploi doit soutenir la qualité du résultat et le travail des personnes qui y contribuent. Le savoir-faire, les expériences et les points de vue humains restent ce qui donne au projet son caractère singulier.
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
// Home carousel: full width. Each slide: media, optional text over it, link.
// showText: false hides the text for that slide.
export type Slide = {
  media: Media; title: string; text?: string; showText: boolean; position?: TextPosition; href?: string; cta?: string;
};
export const carousel: Slide[] = [
  { media: { type: 'image', src: '/images/site/carrousel-4.jpg' }, title: 'Urgences Rurales 360', text: 'Docu-cirque et transfert de connaissances', showText: true, href: '/projets/urgences-rurales-360/', cta: 'Voir le projet' },
  { media: { type: 'image', src: '/images/site/carrousel-2.jpg' }, title: 'Art Robots', text: 'Prix du meilleur court métrage canadien, FIFA 42', showText: true, href: '/projets/art-robots/', cta: 'Voir le projet' },
  { media: { type: 'image', src: '/images/site/carrousel-3.jpg' }, title: 'La Mue', text: 'Compétition nationale, FIFA 43', showText: true, href: '/projets/la-mue/', cta: 'Voir le projet' },
  { media: { type: 'image', src: '/images/site/carrousel-1.jpg' }, title: 'Doomed Raiders', text: 'Anorak Studio Games, annoncé pour 2027', showText: true, href: '/projets/doomed-raiders/', cta: 'Voir le projet' },
  { media: { type: 'image', src: '/images/site/carrousel-5.jpg' }, title: 'Prises de vues par drone', text: 'Un de nos services', showText: true, href: '/services/#drone', cta: 'Voir le service' },
];

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
  'IA',
];

export type ServiceSection = { heading?: string; paragraphs: string[] };

export const services: {
  id: string;
  title: string;
  image: string;
  lead: string;
  text: string[];
  sections?: ServiceSection[];
  designThinking?: string[];
  designThinkingNote?: string;
}[] = [
  {
    id: 'identite',
    title: 'Image de marque',
    image: '/images/old-site/2024/02/1-identification.jpg',
    lead: "Une identité reconnaissable, pensée pour vivre sur plusieurs supports.",
    text: [
      "Une marque ne s'arrête pas au logo. Elle prend forme dans les couleurs, la typographie, les images, les publications et chacun des points de contact avec son public.",
      "Anorak Studio conçoit des identités visuelles et des gammes d'outils de communication pour les entreprises, les organismes et les projets de recherche. Le travail vise à donner au projet une expression cohérente, assez souple pour accompagner son évolution.",
    ],
  },
  {
    id: 'design-strategique',
    title: 'Design stratégique',
    image: '',
    lead: "Comprendre les besoins, définir le problème et imaginer des réponses adaptées.",
    text: [],
    sections: [
      {
        heading: 'Une réflexion qui commence avant la production',
        paragraphs: [
          "Lorsqu'un projet démarre, sa forme n'est pas toujours la première chose à décider. À qui s'adresse-t-il? Quel besoin cherche-t-il à combler? Qu'est-ce qui empêche aujourd'hui son public de comprendre, d'utiliser ou d'adopter la solution proposée?",
          "Le design stratégique permet de travailler sur ces questions avant de choisir un nom, une identité, un service, un site ou une campagne. Anorak Studio accompagne les équipes dans la définition de leur concept, de leur positionnement et de leur approche de communication.",
        ],
      },
      {
        heading: 'Le design thinking en pratique',
        paragraphs: [
          "Le design thinking emprunte au processus de création des designers pour aborder un problème de façon ouverte et centrée sur les personnes concernées. La démarche commence par l'écoute et l'observation. Elle se poursuit par la formulation du problème, la recherche de pistes, la création de prototypes et leur mise à l'essai.",
          "Ces étapes ne forment pas un parcours rigide. Un test peut remettre en question une hypothèse; une conversation peut révéler un besoin qui n'avait pas été envisagé. Ce va-et-vient aide à orienter le projet à partir de ce qui est appris, plutôt que de s'attacher trop tôt à une seule idée.",
        ],
      },
      {
        heading: 'De la réflexion à une direction concrète',
        paragraphs: [
          "La démarche peut mener à un nouveau concept, à une identité de marque, à un parcours utilisateur, à un outil de communication ou à une autre façon de présenter un service. Son apport est à la fois créatif et pratique : elle aide à comparer des pistes, à prendre des décisions et à investir les efforts là où ils seront les plus utiles.",
        ],
      },
    ],
    // The 5 classic design-thinking stages. A visual explaining them will replace/accompany
    // this list later — the structure is ready for it (see the Design Thinking block below).
    designThinking: ['Empathie', 'Définition', 'Idéation', 'Prototypage', 'Test'],
    designThinkingNote: 'Visuel des 5 étapes du design thinking à venir',
  },
  {
    id: 'realisation',
    title: 'Réalisation',
    image: '/images/site/carrousel-3.jpg',
    lead: "Courts métrages, documentaires, capsules vidéo et films de vulgarisation.",
    text: [
      "Le cinéma occupe une place importante dans la pratique du studio, entre courts métrages de fiction et documentaires — dont Art Robots, lauréat du prix du meilleur court métrage canadien au FIFA 42.",
      "Anorak Studio réalise aussi des capsules vidéo et des films pour les organisations et les équipes de recherche. Selon le projet, la vidéo peut présenter une démarche, expliquer un sujet, documenter une expérience ou donner une place aux personnes qui la vivent. De l'écriture au montage, le choix du récit et des images se fait en fonction de ce que le film doit transmettre.",
    ],
  },
  {
    id: 'gamification',
    title: 'Gamification et Indie Game',
    image: '/images/site/carrousel-1.jpg',
    lead: "Faire une place à l'exploration, aux choix et à la participation.",
    text: [],
    sections: [
      {
        heading: "Qu'est-ce que la gamification?",
        paragraphs: [
          "La gamification consiste à utiliser des principes du jeu dans une expérience qui n'est pas nécessairement un jeu vidéo. Proposer un défi, permettre des choix, montrer une progression ou réagir aux actions du public peut donner une autre forme à la découverte d'un sujet.",
          "Le but n'est pas d'ajouter des points partout. Les mécaniques choisies doivent servir l'expérience et le contenu. Selon le mandat, elles peuvent aider à aborder une question complexe, soutenir l'apprentissage ou encourager la participation à une démarche.",
        ],
      },
      {
        heading: "Un service de conception et d'accompagnement",
        paragraphs: [
          "Anorak Studio accompagne les équipes dès la recherche du concept : quel est le public, que souhaite-t-il découvrir, quelles actions pourra-t-il poser et qu'apprendra-t-il en retour? Le studio peut ensuite contribuer à la conception du parcours, à l'univers visuel, au prototype et à la réalisation avec les collaborateurs nécessaires.",
          "Le résultat peut être un jeu, un défi participatif, une application, une expérience web ou une composante interactive intégrée à un projet plus vaste. La gamification peut aussi faire l'objet d'un mandat de conseil, lorsque l'équipe possède déjà ses propres outils de production.",
        ],
      },
      {
        heading: 'Une pratique nourrie par le jeu indépendant',
        paragraphs: [
          "Sous le nom Anorak Studio Games, le studio développe aussi ses propres jeux, dont Doomed Raiders. Cette création indépendante entretient une connaissance concrète du jeu : comment présenter une règle, éveiller la curiosité, offrir une liberté d'action et donner envie de poursuivre.",
          "Les projets réalisés avec des partenaires, comme le Défi Datagotchi, puisent dans cette pratique pour mettre l'interaction au service d'un sujet et de son public.",
        ],
      },
    ],
  },
  {
    id: 'drone',
    title: 'Prises de vues par drone',
    image: '/images/site/carrousel-5.jpg',
    lead: "Des images aériennes pour révéler un lieu et enrichir un récit.",
    text: [
      "Le drone permet de situer une action, de montrer l'étendue d'un territoire ou d'observer un site sous un autre angle. Anorak Studio réalise des prises de vues aériennes pour ses propres films ainsi que pour les projets vidéo, de communication et de recherche de ses clients.",
    ],
  },
  {
    id: 'web',
    title: 'Web et applications',
    image: '/images/old-site/2024/02/2-web.jpg',
    lead: "Des outils numériques adaptés à leurs contenus et à leurs utilisateurs.",
    text: [
      "Anorak Studio conçoit des sites web, des applications et des boutiques en ligne. Certains projets demandent avant tout une présentation claire; d'autres invitent le public à explorer des données, à suivre un parcours ou à interagir avec un contenu.",
      "Le design de l'interface, l'organisation de l'information et l'identité visuelle sont pensés ensemble, pour que l'outil soit agréable à parcourir et utile aux personnes auxquelles il s'adresse.",
    ],
  },
  {
    id: 'illustration',
    title: 'Illustration et pixel art',
    image: '/images/old-site/2024/02/4-illustration.jpg',
    lead: "Des images pour expliquer, évoquer et donner vie à un univers.",
    text: [
      "L'illustration peut rendre une idée plus accessible, représenter ce qu'une caméra ne peut pas montrer ou donner à un projet son caractère propre. Anorak Studio crée des images pour la communication, l'éducation et la narration, ainsi que des univers en pixel art pour ses jeux indépendants.",
    ],
  },
  {
    id: 'imprime',
    title: 'Imprimé et édition',
    image: '/images/old-site/2024/02/3-edition-2.jpg',
    lead: "Des outils tangibles qui prolongent le projet.",
    text: [
      "Livres, revues, rapports, affiches, dépliants, emballages et expositions font partie des formats que peut prendre une idée. Anorak Studio conçoit ces supports dans la continuité de l'identité visuelle et accompagne leur préparation jusqu'à la production.",
    ],
  },
];

export const realisation = {
  title: 'La réalisation',
  // Big 16:9 media before the films grid. Swap for { type: 'youtube', id: '...' } or a video file.
  featured: { type: 'image', src: '/images/site/carrousel-3.jpg', alt: 'La Mue' } as Media,
  featuredCaption: 'Bande-démo à venir',
  intro: [
    "Le cinéma occupe une place centrale dans la pratique du studio : Mathieu Fortin réalise des courts métrages depuis l'âge de dix ans, et signe aujourd'hui des fictions et des documentaires souvent à la frontière de l'art et de la science.",
    "Anorak Studio produit aussi des capsules vidéo et des films de vulgarisation pour des organisations et des équipes de recherche. Du documentaire ABKT, en production, à la série The Unearthly Notes sur Bell TV1, l'art y sert de vecteur de transfert de connaissances.",
  ],
  // The Unearthly Notes appears here as its 3 individual films rather than as one entry.
  projects: ['abkt', 'the-parrot', 'the-plant', 'the-writer', 'art-robots', 'la-mue'],
};

export const gamification = {
  title: 'Gamification et Indie Game',
  // Big 16:9 media before the projects grid, same principle as Réalisation.
  featured: { type: 'image', src: '/images/site/carrousel-1.jpg', alt: 'Doomed Raiders' } as Media,
  featuredCaption: 'Doomed Raiders — Anorak Studio Games',
  intro: [
    "Le jeu est un formidable outil pour apprendre, comprendre et participer. Anorak Studio conçoit des expériences ludiques et offre des services-conseils en gamification, souvent pour des projets scientifiques et citoyens — comme le Défi Datagotchi et Prof. Datagotchi.",
    "Sous le nom Anorak Studio Games, le studio développe aussi ses propres jeux indépendants : Fungus Forest, déjà livré et jouable en ligne, et Doomed Raiders, son projet coup de cœur, annoncé pour 2027.",
  ],
  projects: ['defi-datagotchi', 'prof-datagotchi', 'fungus-forest', 'doomed-raiders'],
};

export const boutique = {
  title: 'Boutique Wooders',
  text: "Des vêtements illustrés, tout droit sortis des bois. Les gilets Wooders arrivent bientôt sur le site.",
  href: 'https://www.wooders.ca/',
};

// Homepage "Projets récents": a curated set of 6, not the full list.
// ABKT and La Mue stay off this list on purpose (they're in Réalisation instead).
export const recents = {
  title: 'Projets récents',
  projects: [
    'urgences-rurales-360',
    'the-unearthly-notes',
    'art-robots',
    'doomed-raiders',
    'datagotchi',
    'hub-innovation-medecine-rurale',
  ],
};
