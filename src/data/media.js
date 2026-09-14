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
    // Visuel définitif (issu de brainstorming_entrepreneurs_visuel_2_HD.pdf), recadré 1200×800, WebP q72.
    src: '/images/needs-meeting.webp',
    alt: 'Trois entrepreneurs en pleine discussion autour d’une table, carnets et ordinateurs portables, skyline en arrière-plan',
    brief:
      'Séance de brainstorming entre trois entrepreneurs — une femme en blazer crème au centre expliquant, deux hommes ' +
      'attentifs de part et d’autre — carnets, ordinateurs et cafés sur une table en marbre, baie vitrée sur la ville au coucher du soleil.',
  },

  /* -------------------------------------------------------------- 04 OFFRES */
  offersDesk: {
    // Visuel définitif (issu de Bantou_Connexion_Visuel_HD-4.pdf), redimensionné 1200×900, WebP q72.
    src: '/images/offers-desk.webp',
    alt: 'Ordinateur portable sur un bureau en marbre affichant la campagne Bantou Connexion « Révèle ton idée. Construis ta réalité. », entouré d’un carnet, d’un café et de lunettes',
    brief:
      'Nature morte de bureau en lumière chaude : ordinateur portable ouvert sur le visuel « Révèle ton idée. Construis ta réalité. » ' +
      '(logo BC, duo d’entrepreneurs devant une skyline, piliers Forme-toi / Connecte-toi / Construis), table ronde en marbre, ' +
      'tasse de café, bougie, carnet et crayon, lunettes posées sur un livre.',
  },

  /* ------------------------------------------------------------- 05 POURQUOI */
  whyHandshake: {
    // Visuel définitif (issu de poignee_de_main_Bantou_Connexion_HD_horizontal-5-1.pdf), recadré 1200×900, WebP q72.
    src: '/images/why-handshake.webp',
    alt: 'Poignée de main entre deux partenaires en costume devant une skyline, moitié orange au soleil couchant, moitié bleu marine',
    brief:
      'Gros plan sur une poignée de main entre un homme noir en costume sombre à chemise crème et un partenaire en blazer bleu marine, ' +
      'skyline urbaine en arrière-plan scindée en deux tonalités — coucher de soleil orangé à gauche, bleu nuit à droite — ' +
      'encadrée de bandes diagonales orange et bleu marine aux couleurs de la marque.',
  },
  whyTestimonial: {
    // Visuel définitif (issu de 5-2-portrait_femme_vertical_HD.pdf), redimensionné 700×1050, WebP q72.
    src: '/images/why-testimonial.webp',
    alt: 'Portrait noir et blanc d’une femme souriante en blazer sombre, regard tourné vers le haut',
    brief:
      'Portrait noir et blanc d’une femme aux cheveux longs et ondulés, blazer sombre, boucles d’oreilles pendantes, ' +
      'large sourire et regard levé vers la droite, arrière-plan architectural flouté — traitement monochrome ' +
      'contrasté pour intégration sur fond bleu marine.',
  },

  /* -------------------------------------------------------------- 06 IMPACT */
  impactPortrait: {
    // Visuel définitif (issu de 6-visuel_urban_bobo_studio.pdf), recadré 1200×600 (2:1), WebP q72.
    src: '/images/impact-portrait.webp',
    alt: 'Quatre jeunes adultes posant assis dans un studio à l’ambiance chaleureuse : fauteuil en cuir, piano, projecteurs et lampe',
    brief:
      'Portrait de groupe éditorial en lumière chaude et tamisée : quatre personnes assises, regard caméra — homme en bonnet ' +
      'et chemise noire dans un fauteuil Chesterfield, femme aux cheveux bouclés en tailleur crème, femme en combinaison bordeaux ' +
      'assise au sol, homme en casquette et veste noires sur un tabouret — décor de studio avec piano, projecteurs, rideaux et lampe.',
  },
  impactCards: [
    {
      src: photo('photo-1573164574472-797cdf4a583a', { w: 700, h: 500 }),
      alt: 'Mains sur un clavier d’ordinateur portable lors d’une session de travail',
      brief: 'Homme noir en costume animant un atelier devant un paperboard, gestuelle expressive, salle claire.',
    },
    {
      // Visuel définitif (issu de 6-2-Bantou_Connexion_mains_bague_mariage_HD.pdf), redimensionné 800×450, WebP q72.
      src: '/images/impact-hands.webp',
      alt: 'Trois mains superposées scellant un partenariat au-dessus d’un bureau, logo Bantou Connexion en bas à droite',
      brief:
        'Gros plan en plongée sur trois mains empilées en signe d’engagement — manches de costume marine, gris et blazer crème — ' +
        'au-dessus d’un bureau flouté avec ordinateur portable, stylo et graphiques, lumière chaude, logo BC Bantou Connexion en bas à droite.',
    },
    {
      src: photo('photo-1480714378408-67cf0d13bc1b', { w: 700, h: 500 }),
      alt: 'Ville moderne entourée de verdure au coucher du soleil',
      brief: 'Vue aérienne d’une ville verte au coucher du soleil : tours modernes, parc arboré, avenue rectiligne.',
    },
    {
      // Visuel définitif (issu de 6-3-transformer-equipe_diverse_Bantou_Connexion_HD_horizontal.pdf), redimensionné 800×370, WebP q72.
      src: '/images/impact-team.webp',
      alt: 'Équipe diverse et souriante réunie autour d’une table, ordinateur portable et smartphone en main',
      brief:
        'Quatre jeunes collègues souriants autour d’une table dans un café-coworking lumineux — homme noir en pull gris consultant ' +
        'un smartphone, femme brune en chemise en jean, femme asiatique à lunettes, femme de dos — ordinateur portable, tasse et gobelets, ' +
        'mur de briques blanches et porte en bois.',
    },
  ],

  /* ---------------------------------------------------------- 07 PARTENAIRES */
  partnersCompass: {
    // Visuel définitif (issu de 7-1-rencontre_entrepreneurs_diaspora_afrique_BC_HD.pdf), recadré 1200×900, WebP q72.
    src: '/images/partners-meeting.webp',
    alt: 'Rencontre d’entrepreneurs de la diaspora et d’Afrique autour d’une table en terrasse, ordinateurs et carte de l’Afrique, skyline en bord de mer',
    brief:
      'Réunion animée de six entrepreneurs de la diaspora et du continent en terrasse ensoleillée — tenues mêlant costumes, ' +
      'boubou brodé, turban et chapeau traditionnel — ordinateurs portables, carnets, cafés et carte de l’Afrique sur la table, ' +
      'palmiers et skyline moderne en bord de mer en arrière-plan.',
  },
  partnersTestimonial: {
    // Visuel définitif (issu de 7-2-portrait_entrepreneur_vertical.pdf), redimensionné 700×933, WebP q72.
    src: '/images/partners-testimonial.webp',
    alt: 'Portrait d’un entrepreneur noir en costume sombre et chemise blanche, main sous le menton, assis à son bureau devant un ordinateur portable',
    brief:
      'Portrait d’un homme noir en costume noir et chemise blanche, montre au poignet, main pensive sous le menton, regard caméra, ' +
      'assis dans un fauteuil de bureau en cuir — ordinateur portable, carnet, stylo et mug au premier plan, globe, plantes et lampe ' +
      'en arrière-plan, lumière chaude de fin de journée ; passé en noir et blanc par le composant.',
  },

  /* ----------------------------------------------------------- 08 PROCESSUS */
  processSteps: [
    {
      src: photo('photo-1517245386807-bb43f82c33c4', { w: 600, h: 460 }),
      alt: 'Échange de travail autour d’un ordinateur portable lors d’un premier rendez-vous',
      brief: 'Homme noir à lunettes en costume, en pleine explication lors d’un entretien, bureau lumineux.',
    },
    {
      // Visuel définitif (issu de 8-conception strategique BC_reunion_entrepreneurs_HD.pdf), recadré 800×450, WebP q72.
      src: '/images/process-strategy.webp',
      alt: 'Session de conception stratégique : trois entrepreneurs concentrés sur leurs ordinateurs portables autour d’une table',
      brief:
        'Réunion de travail dans un espace de coworking chaleureux en lumière dorée : homme à lunettes en pull beige réfléchissant ' +
        'main au menton, femme blonde en chemise bleue stylo en main, homme noir de dos avec casque autour du cou — ' +
        'ordinateurs portables affichant graphiques et documents, plante et bouteille d’eau sur la table en bois.',
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
    // Visuel définitif (issu de 9 - portrait_bureau_fond_floute_HD_vertical.pdf — même source que founderPortrait),
    // recadré en bande 5:4 sur le buste, 1000×800, WebP q72.
    src: '/images/contact-portrait.webp',
    alt: 'Portrait du fondateur en costume noir et chemise blanche, regard direct, devant une skyline floutée',
    brief:
      'Cadrage buste d’un homme noir en costume noir et chemise blanche ouverte, regard direct et sourire assuré, ' +
      'lumière chaude, globe doré et plante sur une étagère, skyline floutée derrière une baie vitrée.',
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
