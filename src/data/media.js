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

  /* ------------------------------------------------------ 01 QUI SOMMES-NOUS */
  aboutPortrait: {
    // Visuel définitif (issu de visuel_basket_dunk_artistique_HD.pdf), recadré 900×1000, WebP q72.
    src: '/images/about-portrait.webp',
    alt: '',
  },
  aboutBridge: {
    src: photo('photo-1519501025264-65ba15a82390', { w: 1600, h: 520 }),
    alt: '',
  },

  /* ------------------------------------------------------------ 02 FONDATEUR */
  founderPortrait: {
    // Visuel définitif (issu de portrait_bureau_fond_floute_HD_vertical.pdf), recadré 900×1100, WebP q72.
    src: '/images/founder-portrait.webp',
    alt: '',
  },
  founderCity: {
    src: photo('photo-1580060839134-75a5edca2e99', { w: 1800, h: 600 }),
    alt: '',
  },

  /* -------------------------------------------------------------- 03 BESOIN */
  needsMeeting: {
    // Visuel définitif (issu de brainstorming_entrepreneurs_visuel_2_HD.pdf), recadré 1200×800, WebP q72.
    src: '/images/needs-meeting.webp',
    alt: '',
  },

  /* -------------------------------------------------------------- 04 OFFRES */
  offersDesk: {
    // Visuel définitif (issu de Bantou_Connexion_Visuel_HD-4.pdf), redimensionné 1200×900, WebP q72.
    src: '/images/offers-desk.webp',
    alt: '',
  },

  /* ------------------------------------------------------------- 05 POURQUOI */
  whyHandshake: {
    // Visuel définitif (issu de poignee_de_main_Bantou_Connexion_HD_horizontal-5-1.pdf), recadré 1200×900, WebP q72.
    src: '/images/why-handshake.webp',
    alt: '',
  },
  whyTestimonial: {
    // Visuel définitif (issu de 5-2-portrait_femme_vertical_HD.pdf), redimensionné 700×1050, WebP q72.
    src: '/images/why-testimonial.webp',
    alt: '',
  },

  /* -------------------------------------------------------------- 06 IMPACT */
  impactPortrait: {
    // Visuel définitif (issu de 6-visuel_urban_bobo_studio.pdf), recadré 1200×600 (2:1), WebP q72.
    src: '/images/impact-portrait.webp',
    alt: '',
  },
  impactCards: [
    {
      src: photo('photo-1573164574472-797cdf4a583a', { w: 700, h: 500 }),
      alt: '',
    },
    {
      // Visuel définitif (issu de 6-2-Bantou_Connexion_mains_bague_mariage_HD.pdf), redimensionné 800×450, WebP q72.
      src: '/images/impact-hands.webp',
      alt: '',
    },
    {
      src: photo('photo-1480714378408-67cf0d13bc1b', { w: 700, h: 500 }),
      alt: '',
    },
    {
      // Visuel définitif (issu de 6-3-transformer-equipe_diverse_Bantou_Connexion_HD_horizontal.pdf), redimensionné 800×370, WebP q72.
      src: '/images/impact-team.webp',
      alt: '',
    },
  ],

  /* ---------------------------------------------------------- 07 PARTENAIRES */
  partnersCompass: {
    // Visuel définitif (issu de 7-1-rencontre_entrepreneurs_diaspora_afrique_BC_HD.pdf), recadré 1200×900, WebP q72.
    src: '/images/partners-meeting.webp',
    alt: '',
  },
  partnersTestimonial: {
    // Visuel définitif (issu de 7-2-portrait_entrepreneur_vertical.pdf), redimensionné 700×933, WebP q72.
    src: '/images/partners-testimonial.webp',
    alt: '',
  },

  /* ----------------------------------------------------------- 08 PROCESSUS */
  processSteps: [
    {
      src: photo('photo-1517245386807-bb43f82c33c4', { w: 600, h: 460 }),
      alt: '',
    },
    {
      // Visuel définitif (issu de 8-conception strategique BC_reunion_entrepreneurs_HD.pdf), recadré 800×450, WebP q72.
      src: '/images/process-strategy.webp',
      alt: '',
    },
    {
      src: photo('photo-1573164713988-8665fc963095', { w: 600, h: 460 }),
      alt: '',
    },
    {
      src: photo('photo-1521737711867-e3b97375f902', { w: 600, h: 460 }),
      alt: '',
    },
    {
      src: photo('photo-1466692476868-aef1dfb1e735', { w: 600, h: 460 }),
      alt: '',
    },
  ],

  /* ------------------------------------------------------------- 09 CONTACT */
  contactPortrait: {
    // Visuel définitif (issu de 9 - portrait_bureau_fond_floute_HD_vertical.pdf — même source que founderPortrait),
    // recadré en bande 5:4 sur le buste, 1000×800, WebP q72.
    src: '/images/contact-portrait.webp',
    alt: '',
  },

  /* --------------------------------------------- BANDEAUX D'APPEL À L'ACTION */
  ctaBand: {
    src: photo('photo-1480714378408-67cf0d13bc1b', { w: 1800, h: 620 }),
    alt: '',
  },
};

export default media;
