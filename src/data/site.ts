// Everything about the studio in one place. Edit here, it updates every page.
//
// The editorial text (home, services, réalisation, gamification, contact) lives in
// src/content/site/*.json instead of directly in this file, so it can also be edited
// from the CMS at /admin/ (collection "Pages"). This file assembles that text with the
// code-only bits (images, ids, media, nav links, page order) into the same shape every
// page already imports — no page template needs to change when the JSON changes.

import accueil from '../content/site/accueil.json';
import servicesData from '../content/site/services.json';
import realisationData from '../content/site/realisation.json';
import gamificationData from '../content/site/gamification.json';
import contact from '../content/site/contact.json';
import carouselData from '../content/site/carousel.json';

export type Media =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; poster?: string } // mp4/webm file, plays muted in a loop
  | { type: 'youtube'; id: string; poster?: string }
  | { type: 'vimeo'; id: string; poster?: string };
export type TextPosition = 'center' | 'bottom-left' | 'bottom-center' | 'top-left';

export type SocialLink = { label: string; icon: string; href: string };

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
  intro: accueil.intro,
  description: accueil.description,
  // Big text on the green band (home page)
  statement: accueil.statement,
  about: accueil.about,
  // Services page: intro block ("Vous êtes sur le point de lancer un projet?")
  servicesIntro: servicesData.intro,
  // Services page: band replacing the old "science" block — broader than research alone.
  approche: servicesData.approche,
  // Services page: short, discreet note on AI tools (not a headline promise).
  aiNote: servicesData.aiNote,
  email: contact.email,
  emailDirect: contact.emailDirect,
  phone: contact.phone,
  phoneHref: contact.phoneHref,
  address: contact.address,
  social: contact.social as SocialLink[],
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
// Editable from the CMS at /admin/ (collection "Pages" > "Carrousel (accueil)"), which writes
// to src/content/site/carousel.json. Each slide there is just an image path + text/link — this
// maps it to the richer Slide/Media shape the templates expect.
export const carousel: Slide[] = (carouselData.slides as Array<{
  image: string; title: string; text?: string; showText?: boolean; href?: string; cta?: string;
}>).map((s) => ({
  media: { type: 'image', src: s.image } as Media,
  title: s.title,
  text: s.text,
  showText: s.showText ?? true,
  href: s.href,
  cta: s.cta,
}));

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

export type ServiceItem = {
  title: string;
  lead: string;
  text: string[];
  sections?: ServiceSection[];
  designThinking?: string[];
  designThinkingNote?: string;
};

// Order and id live here in code (anchors like /services/#drone are referenced elsewhere);
// each item's image/title/lead/text/sections come from services.json, editable via the CMS.
const SERVICE_ORDER: string[] = [
  'identite',
  'design-strategique',
  'realisation',
  'gamification',
  'drone',
  'web',
  'illustration',
  'imprime',
];

const serviceItems = servicesData.items as unknown as Record<string, ServiceItem & { image: string }>;

export const services = SERVICE_ORDER.map((id) => ({
  id,
  ...serviceItems[id],
}));

export const realisation = {
  title: 'Réalisation',
  // Big 16:9 media before the films grid. Swap for { type: 'youtube', id: '...' } or a video file.
  featured: { type: 'image', src: '/images/site/carrousel-3.jpg', alt: 'La Mue' } as Media,
  featuredCaption: 'Bande-démo à venir',
  intro: realisationData.intro,
  // The Unearthly Notes appears here as its 3 individual films rather than as one entry.
  projects: ['abkt', 'the-parrot', 'the-plant', 'the-writer', 'art-robots', 'la-mue'],
};

export const gamification = {
  title: 'Gamification et Indie Game',
  // Big 16:9 media before the projects grid, same principle as Réalisation.
  featured: { type: 'image', src: '/images/site/carrousel-1.jpg', alt: 'Doomed Raiders' } as Media,
  featuredCaption: 'Doomed Raiders — Anorak Studio Games',
  intro: gamificationData.intro,
  // Anorak Studio Games' own social accounts (pixel art / indie games) — distinct from
  // the studio's main site.social, which stays on the studio's own professional accounts.
  social: gamificationData.gamesSocial as SocialLink[],
  projects: ['defi-datagotchi', 'prof-datagotchi', 'fungus-forest', 'doomed-raiders'],
};

export const boutique = {
  title: 'Boutique Wooders',
  text: "Des vêtements illustrés, tout droit sortis des bois. Les gilets Wooders arrivent bientôt sur le site.",
  href: 'https://www.wooders.ca/',
};

// Homepage "À découvrir": whichever projects have the internal "À découvrir" tag checked in
// the CMS (data.aDecouvrir — see getADecouvrir() in src/lib/projets.ts), not a fixed list of
// ids to maintain here in code.
export const recents = {
  title: 'À découvrir',
};
