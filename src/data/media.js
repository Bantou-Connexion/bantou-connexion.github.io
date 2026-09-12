/*
 * Manifeste des visuels.
 *
 * Toutes les photos du site passent par ce fichier : un seul endroit à modifier
 * pour remplacer les placeholders par les visuels définitifs.
 *
 * Chaque entrée expose :
 *  - src   : URL Unsplash de placeholder (vérifiée accessible, à remplacer en production) ;
 *  - alt   : texte alternatif français (accessibilité) — vide si l'image est purement décorative ;
 *  - brief : description précise de la photo attendue, conforme à la direction artistique du PDF,
 *            utilisable telle quelle comme prompt de génération ou comme brief photographe.
 *
 * ⚠️ Les URL Unsplash sont des placeholders. Chaque visuel a été contrôlé sur
 *    planche-contact avant affectation (le champ `alt` décrit la photo réelle),
 *    mais le champ `brief` reste la référence pour le visuel définitif.
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
    brief: '',
  },
  heroSkyline: {
    src: photo('photo-1611348524140-53c9a25263d6', { w: 1800, h: 700 }),
    alt: '',
    brief:
      'Panorama urbain africain au coucher du soleil : tours modernes, pont à haubans, végétation dense au premier plan, ' +
      'ciel orangé, silhouettes très sombres — utilisé en bas de hero avec un fort assombrissement bleu marine.',
  },

  /* ------------------------------------------------------ 01 QUI SOMMES-NOUS */
  aboutPortrait: {
    // Visuel définitif (issu de visuel_basket_dunk_artistique_HD.pdf), recadré 900×1000, WebP q72.
    src: '/images/about-portrait.webp',
    alt: 'Illustration artistique d’un basketteur en plein dunk devant une foule, avec le message « Legend inspires generations »',
    brief:
      'Illustration low-poly colorée d’un basketteur en maillot rouge n°23 suspendu en plein dunk, panier en haut à droite, ' +
      'foule noir et blanc en contrebas, mention « 23 — Legend inspires generations ».',
  },
  aboutBridge: {
    src: photo('photo-1519501025264-65ba15a82390', { w: 1600, h: 520 }),
    alt: '',
    brief:
      'Pont à haubans illuminé au crépuscule au-dessus d’un fleuve, ville en arrière-plan, teintes bleu marine et or — ' +
      'sert de fond au bandeau de citation « bâtir des passerelles ».',
  },

  /* ------------------------------------------------------------ 02 FONDATEUR */
  founderPortrait: {
    // Visuel définitif (issu de portrait_bureau_fond_floute_HD_vertical.pdf), recadré 900×1100, WebP q72.
    src: '/images/founder-portrait.webp',
    alt: 'Portrait du fondateur en costume noir et chemise blanche, assis à son bureau devant une skyline floutée',
    brief:
      'Portrait assis d’un homme noir en costume noir et chemise blanche ouverte, bras croisés sur le bureau, ' +
      'regard direct et sourire assuré, lumière chaude, skyline floutée derrière une baie vitrée.',
  },
  founderCity: {
    src: photo('photo-1580060839134-75a5edca2e99', { w: 1800, h: 600 }),
    alt: '',
    brief:
      'Skyline africaine au soleil couchant vue depuis les collines, soleil rasant à droite, végétation sombre au premier plan.',
  },

  /* -------------------------------------------------------------- 03 BESOIN */
  needsMeeting: {
    src: photo('photo-1531482615713-2afd69097998', { w: 1200, h: 800 }),
    alt: 'Femme afro-descendante au travail sur son ordinateur portable, entourée de son équipe',
    brief:
      'Un homme noir et une femme en tenue professionnelle, penchés sur un ordinateur portable dans un bureau lumineux, ' +
      "expression concentrée, mug noir siglé au premier plan, baie vitrée avec ville à l'arrière-plan.",
  },

  /* -------------------------------------------------------------- 04 OFFRES */
  offersDesk: {
    src: photo('photo-1587614382346-4ec70e388b28', { w: 1200, h: 800 }),
    alt: 'Bureau de travail : carnet, stylo, ordinateur portable et tasse',
    brief:
      'Nature morte de bureau en lumière chaude : carnet ouvert avec notes manuscrites, stylo plume, ordinateur portable, ' +
      'mug noir siglé « BANTOU CONNEXION », plante verte, vue urbaine floue derrière la vitre.',
  },

  /* ------------------------------------------------------------- 05 POURQUOI */
  whyHandshake: {
    src: photo('photo-1521791136064-7986c2920216', { w: 1200, h: 760 }),
    alt: 'Poignée de main entre deux partenaires au-dessus d’un contrat',
    brief:
      'Gros plan sur une poignée de main entre un homme noir et un partenaire, manches de costume, ' +
      'contrat et stylo posés sur la table, lumière chaude de fin de journée, plante verte en arrière-plan.',
  },
  whyTestimonial: {
    src: photo('photo-1573497491765-dccce02b29df', { w: 700, h: 800 }),
    alt: 'Portrait souriant d’une femme afro-descendante en tenue à motifs',
    brief:
      "Portrait noir et blanc d'une femme souriante en veste sombre, regard direct, éclairage doux — traitement monochrome " +
      'contrasté pour intégration sur fond bleu marine.',
  },

  /* -------------------------------------------------------------- 06 IMPACT */
  impactPortrait: {
    src: photo('photo-1531123414780-f74242c2b052', { w: 1000, h: 800 }),
    alt: 'Femme afro-descendante souriante en tenue aux motifs africains',
    brief:
      "Homme noir de dos-trois-quarts, casquette noire et sweat à capuche, contemplant une skyline moderne au soleil couchant, " +
      'lumière dorée rasante, logo discret brodé dans le dos.',
  },
  impactCards: [
    {
      src: photo('photo-1573164574472-797cdf4a583a', { w: 700, h: 500 }),
      alt: 'Mains sur un clavier d’ordinateur portable lors d’une session de travail',
      brief: 'Homme noir en costume animant un atelier devant un paperboard, gestuelle expressive, salle claire.',
    },
    {
      src: photo('photo-1600880292089-90a7e086ee0c', { w: 700, h: 500 }),
      alt: 'Mains jointes scellant un partenariat',
      brief: 'Poignée de main serrée entre deux personnes en costume, lumière chaude, arrière-plan de bureau flouté.',
    },
    {
      src: photo('photo-1480714378408-67cf0d13bc1b', { w: 700, h: 500 }),
      alt: 'Ville moderne entourée de verdure au coucher du soleil',
      brief: 'Vue aérienne d’une ville verte au coucher du soleil : tours modernes, parc arboré, avenue rectiligne.',
    },
    {
      src: photo('photo-1543269865-cbf427effbad', { w: 700, h: 500 }),
      alt: 'Équipe souriante réunie autour d’une table de travail',
      brief: 'Deux collègues souriants, un homme noir et une femme, en pleine discussion dans un espace de coworking clair.',
    },
  ],

  /* ---------------------------------------------------------- 07 PARTENAIRES */
  partnersCompass: {
    src: photo('photo-1486406146926-c627a92ad1ab', { w: 1200, h: 760 }),
    alt: '',
    brief:
      'Boussole en laiton posée sur une surface bois, skyline moderne au coucher du soleil en arrière-plan, ' +
      'lettrage gravé « CONFIANCE · COLLABORATION · RÉSULTATS · IMPACT ».',
  },
  partnersTestimonial: {
    src: photo('photo-1463453091185-61582044d556', { w: 700, h: 800 }),
    alt: 'Portrait d’un homme afro-descendant devant une fresque urbaine colorée',
    brief:
      "Portrait noir et blanc d'un homme noir à lunettes, chemise blanche et veste sombre, main sous le menton, sourire discret.",
  },

  /* ----------------------------------------------------------- 08 PROCESSUS */
  processSteps: [
    {
      src: photo('photo-1517245386807-bb43f82c33c4', { w: 600, h: 460 }),
      alt: 'Échange de travail autour d’un ordinateur portable lors d’un premier rendez-vous',
      brief: 'Homme noir à lunettes en costume, en pleine explication lors d’un entretien, bureau lumineux.',
    },
    {
      src: photo('photo-1517048676732-d65bc937f952', { w: 600, h: 460 }),
      alt: 'Prise de notes et analyse de documents lors d’une session stratégique',
      brief: 'Mains tenant un stylo au-dessus de tableaux de bord imprimés, réunion de travail vue du dessus.',
    },
    {
      src: photo('photo-1573164713988-8665fc963095', { w: 600, h: 460 }),
      alt: 'Deux professionnelles afro-descendantes travaillant ensemble sur leurs ordinateurs portables',
      brief: 'Un homme noir et une femme travaillant côte à côte sur un ordinateur portable, sourire, lumière naturelle.',
    },
    {
      src: photo('photo-1521737711867-e3b97375f902', { w: 600, h: 460 }),
      alt: 'Jeunes pousses en terre, image d’un impact qui s’inscrit dans la durée',
      brief: 'Skyline entourée de parcs au soleil couchant, vue en plongée légère.',
    },
    {
      src: photo('photo-1466692476868-aef1dfb1e735', { w: 600, h: 460 }),
      alt: 'Équipe en espace de coworking suivant l’avancement des projets',
      brief: 'Poignée de main en gros plan devant une baie vitrée, tonalité froide et lumière rasante.',
    },
  ],

  /* ------------------------------------------------------------- 09 CONTACT */
  contactPortrait: {
    src: photo('photo-1546525848-3ce03ca516f6', { w: 1000, h: 820 }),
    alt: 'Jeune homme afro-descendant au regard direct, dans un parc urbain',
    brief:
      "Homme noir élégant, casquette et lunettes de soleil, stylo à la main et montre visible, posture réflexive, " +
      'skyline au coucher du soleil derrière lui, découpe diagonale sur fond crème.',
  },

  /* --------------------------------------------- BANDEAUX D'APPEL À L'ACTION */
  ctaBand: {
    src: photo('photo-1480714378408-67cf0d13bc1b', { w: 1800, h: 620 }),
    alt: '',
    brief:
      'Panorama urbain au golden hour : gratte-ciels sombres, soleil couchant à droite, fleuve et végétation au premier plan — ' +
      'assombri par un dégradé bleu marine pour accueillir un panneau de texte et un bouton orange.',
  },
};

export default media;
