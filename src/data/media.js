/*
 * Manifeste des visuels.
 *
 * Toutes les photos du site passent par ce fichier : un seul endroit à modifier
 * pour remplacer les placeholders Unsplash restants par les visuels définitifs.
 *
 * Chaque entrée expose :
 *  - src : chemin local (`/images/*.webp`, visuel définitif) ou URL Unsplash de
 *          placeholder à remplacer ;
 *  - alt : toujours vide — tous les visuels sont décoratifs, le sens est porté par
 *          le texte adjacent (les lecteurs d'écran ignorent l'image).
 */

const UNSPLASH = 'https://images.unsplash.com';

/** Construit une URL Unsplash cadrée et compressée. */
const photo = (id, { w = 1200, h, fit = 'crop' } = {}) =>
  `${UNSPLASH}/${id}?auto=format&fit=${fit}&q=72&w=${w}${h ? `&h=${h}` : ''}`;

export const media = {
  /* ---------------------------------------------------------------- HERO */
  heroPortrait: {
    // Visuel définitif (issu de visuel_territoires_inspirent_A4_vertical_HD.pdf), recadré 900×1100, WebP q72.
    src: '/images/hero-portrait.webp',
    alt: '',
  },
  heroSkyline: {
    src: photo('photo-1611348524140-53c9a25263d6', { w: 1800, h: 700 }),
    alt: '',
  },

  /* ------------------------------------------------------- 02 EXPERTISES */
  expertisesPortrait: {
    // Visuel de la maquette V2 (planche 2), recadré 620×640, WebP q85.
    src: '/images/expertises-portrait.webp',
    alt: '',
  },

  /* ------------------------------------------------------------ 03 À PROPOS */
  founderPortrait: {
    // Portrait de la maquette V2 (planche 3), recadré 330×404, WebP q90.
    src: '/images/founder-portrait.webp',
    alt: 'Karym Mbakam « Djomo », fondateur de Bantou Connexion',
  },

  /* ------------------------------------------------------------ 04 ACADÉMIE */
  academiePacks: {
    // Visuel de la maquette V2 (planche 4), recadré 900×488, WebP q90.
    src: '/images/academie-packs.webp',
    alt: "Les packs de l'Académie des Bâtisseurs : Fondations, Entrepreneuriat, Culture urbaine, Réseau & Impact, communauté privée, guides pratiques, études de cas, templates et plan d'action 90 jours",
  },

  /* ---------------------------------------------------------- PARTENAIRES */
  partnersHandshake: {
    // Visuel de la maquette V2 (planche 5), recadré 716×410, WebP q88.
    src: '/images/partenaires-handshake.webp',
    alt: 'Poignée de main devant une skyline au coucher du soleil',
  },

  /* ----------------------------------------------------------------- CONTACT */
  contactSkyline: {
    // Visuel de la maquette V2 (planche 6), recadré 704×472, WebP q85.
    src: '/images/contact-skyline.webp',
    alt: '',
  },
};

export default media;
