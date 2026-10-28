/*
 * Contenu éditorial du site.
 *
 * Source unique de vérité : le contenu, la structure et les fonctionnalités proviennent
 * intégralement du document texte fourni (organigramme Bantou Connexion). Seule la
 * direction artistique est reprise du PDF ; aucun texte n'a été réécrit ici.
 */

/* ------------------------------------------------------------------ MARQUE */

export const brand = {
  name: 'Bantou Connexion',
  tagline: "Des idées d'aujourd'hui pour des villes de demain",
  script: 'Des Territoires qui inspirent',
  footerKeywords: ['CULTURE', 'INNOVATION', 'TERRITOIRES DURABLES'],
  legal: '© 2026 Bantou Connexion — France · Afrique · Diaspora',
  disciplines: 'Conseil · Création · Formation · Ingénierie de projets · Culture urbaine',
};

/* --------------------------------------------------------------- NAVIGATION */

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'expertises', label: 'Expertises' },
  { id: 'fondateur', label: 'À propos' },
  { id: 'academie', label: "L'Académie" },
  { id: 'partenaires', label: 'Institutions & Entreprises' },
  { id: 'contact', label: 'Contacts' },
];

export const navCta = { label: "Rejoignez l'Académie des Bâtisseurs", href: '#academie' };

/* --------------------------------------------------------------------- HERO */

export const hero = {
  eyebrow: 'CONCEVOIR / CONSTRUIRE / CONNECTER',
  titleLead: 'Votre idée mérite de devenir',
  titleHighlight: 'un vrai projet',
  lede: 'Conseil, créations, productions et ingénierie de projets — au service des artistes et entrepreneurs issus de la street culture.',
  primaryCta: { label: "Rejoignez\nl'Académie des Bâtisseurs", href: '#academie', icon: 'graduation' },
  secondaryCta: { label: 'Réserver un diagnostic', href: '#tunnel-vente', icon: 'calendar' },
};

/* ------------------------------------------------------------ 02 EXPERTISES */

export const expertises = {
  num: '02',
  eyebrow: 'Nos expertises',
  titleLead: 'Les expertises qui font avancer ',
  titleHighlight: 'votre projet',
  intro: "Nous réunissons les compétences nécessaires pour transformer une ambition en plan d'action concret.",
  items: [
    { title: 'Conseil stratégique', text: 'Positionnement, modèle économique, offre, feuille de route.' },
    { title: 'Création & direction artistique', text: 'Identité, narration, contenus et supports de communication.' },
    { title: 'Formation & transmission', text: 'Méthodes, outils et montée en compétences.' },
    {
      title: 'Ingénierie de projets',
      text: "Cadrage, partenaires, budget prévisionnel et dossiers de financement, sans promesse d'obtention.",
    },
  ],
  outro: "Nous produisons aussi nos propres formats culturels, sonores et éditoriaux : une façon de mettre nos méthodes à l'épreuve du terrain.",
  quoteLead: 'Notre ambition : bâtir des ',
  quoteHighlight: 'passerelles',
  quoteTail: ' entre ambitions, compétences et culture pour créer un impact durable.',
};

/* ----------------------------------------------------------- 03 À PROPOS */

/** Segments de texte : `highlight` met le passage en orange gras. */
const plain = (text) => ({ text });
const accent = (text) => ({ text, highlight: true });

export const founder = {
  num: '03',
  eyebrow: 'À propos',
  eyebrowTail: 'Le fondateur',
  titleLead: "De l'audace à la ",
  titleHighlight: 'transmission.',
  paragraphs: [
    [plain("Tout commence par une conviction : les grandes transformations naissent de la rencontre entre les idées, les cultures et les hommes.")],
    [
      plain("Inspirée de l'esprit bantou, où la diversité des peuples, des langues et des traditions nourrit la force du collectif, Bantou Connexion fait de la "),
      accent("connexion un moteur de création et d'émancipation."),
    ],
    [
      plain('Son fondateur, Karym Mbakam « Djomo », a forgé sa vision dans l\'univers artistique et entrepreneurial, puis consolidé ses compétences par une '),
      accent("formation en création d'entreprise à Centrale et à l'ESC Lille."),
    ],
    [plain("Son parcours lui a enseigné que l'audace ouvre les chemins, mais que la connaissance, la méthode et la solidarité permettent de les construire.")],
    [plain("Portée par l'esprit de partage, la force du collectif et la richesse de nos héritages, Bantou Connexion cultive une ambition : transformer les talents en bâtisseurs d'avenir.")],
  ],
  closing: "Car la plus belle des réussites n'est pas seulement ce que l'on construit, mais ce que l'on transmet aux générations futures.",
};

/* -------------------------------------------------------- NOS RÉFÉRENCES */

const logo = (file, name) => ({ name, src: `/images/references/${file}.webp` });

export const references = {
  eyebrow: 'À propos',
  eyebrowTail: 'Nos références',
  titleLead: 'Des rencontres qui construisent. ',
  titleHighlight: 'Des collaborations qui inspirent.',
  intro:
    "Depuis plus de vingt ans, Karym Mbakam « Djomo » accompagne artistes, institutions, médias et marques dans la réalisation de projets culturels, créatifs et à impact.",
  groups: [
    {
      title: 'Ils nous ont fait confiance',
      logos: [
        logo('trust-01', 'Orange'),
        logo('trust-02', 'Canal+'),
        logo('trust-03', 'France Télévisions'),
        logo('trust-04', 'Sony Music'),
        logo('trust-05', 'Wagram Music'),
        logo('trust-06', 'Skyrock'),
        logo('trust-07', 'Générations 88.2 FM'),
        logo('trust-08', 'Région Île-de-France'),
        logo('trust-09', 'Sacem'),
        logo('trust-10', 'Bomaye Music'),
      ],
    },
    {
      title: 'Nous avons collaboré avec',
      logos: [
        logo('collab1-01', 'Grand Corps Malade'),
        logo('collab1-02', 'MC Solaar'),
        logo('collab1-03', 'Yassiné Belattar'),
        logo('collab1-04', 'Thomas Ngijol'),
        logo('collab1-05', 'Fabrice Éboué'),
        logo('collab1-06', 'Oxmo Puccino'),
        logo('collab1-07', 'Amélie Chahbi'),
        logo('collab1-08', 'Frédéric Chau'),
        logo('collab1-09', 'Gims'),
        logo('collab1-10', "Diam's"),
        logo('collab2-01', 'Orelsan'),
        logo('collab2-02', "Sexion d'Assaut"),
        logo('collab2-03', 'Youssoupha'),
        logo('collab2-04', 'Kery James'),
        logo('collab2-05', 'Lilian Thuram'),
        logo('collab2-06', 'Amadou & Mariam'),
        logo('collab2-07', 'Abd Al Malik'),
        logo('collab2-08', 'IAM'),
      ],
    },
  ],
};

/* ---------------------------------------------- 03 LE BESOIN & NOTRE RÉPONSE */

export const needs = {
  num: '03',
  eyebrow: 'Le besoin & notre réponse',
  titleLead: "Trop peu de projets passent de l'intention à ",
  titleHighlight: "l'impact",
  intro:
    "Les idées, les talents et les initiatives n'ont jamais été aussi nombreux, notamment dans la culture et la création urbaine. Pourtant, les porteurs de projets rencontrent des freins récurrents.",
  frictionsTitle: 'Les principaux défis',
  frictionsSubtitle: "Des obstacles qui freinent l'impact",
  frictions: [
    {
      icon: 'bulb',
      title: 'Manque de structuration',
      text: 'Des idées fortes mais peu ou pas structurées, difficiles à présenter et à financer.',
    },
    {
      icon: 'users',
      title: 'Manque de compétences spécialisées',
      text: "Besoin d'expertise en stratégie, en création de contenus, en communication et en ingénierie de projets.",
    },
    {
      icon: 'eye',
      title: 'Visibilité insuffisante',
      text: "Des projets talentueux qui manquent de visibilité, de réseaux et d'accès aux bonnes opportunités.",
    },
    {
      icon: 'coins',
      title: 'Accès au financement complexe',
      text: 'Difficulté à constituer des dossiers solides et à convaincre les financeurs et institutions.',
    },
    {
      icon: 'gear',
      title: "Déficit d'accompagnement global",
      text: 'Peu de structures proposent une approche complète alliant conseil, création, formation et mise en réseau.',
    },
  ],
  answerTitle: 'Notre réponse : une approche 360°',
  answerSubtitle: 'Un accompagnement sur mesure',
  answerText:
    "Bantou Connexion apporte une réponse globale et intégrée aux défis des porteurs de projets et des structures, en combinant expertise stratégique, créativité et puissance culturelle pour transformer les idées en projets concrets, visibles et finançables.",
  pillars: [
    { num: '01', icon: 'target', title: 'Concevoir', text: 'Comprendre, analyser et structurer les idées et projets.' },
    { num: '02', icon: 'play', title: 'Créer', text: 'Produire des contenus et identités puissants, authentiques et impactants.' },
    { num: '03', icon: 'bulb', title: 'Former', text: 'Développer les compétences et transmettre des savoirs pratiques et innovants.' },
    { num: '04', icon: 'share', title: 'Connecter', text: "Ouvrir les réseaux, faciliter les partenariats et l'accès aux ressources." },
  ],
  cta: { lead: 'Transformer les contraintes en opportunités, ', highlight: "c'est notre métier.", label: 'Découvrir nos offres', href: '#offres' },
};

/* -------------------------------------------------------- 04 OFFRES & TARIFS */

export const offersSection = {
  num: '04',
  eyebrow: 'Nos offres & tarifs',
  titleLead: "Une gamme claire, pour chaque niveau d'",
  titleHighlight: 'ambition',
  intro: "Du diagnostic express à l'accompagnement premium, choisissez la formule adaptée à votre projet.",
  highlights: [
    { icon: 'users', label: 'Une approche sur mesure' },
    { icon: 'target', label: 'Des résultats concrets' },
    { icon: 'chart', label: 'Un accompagnement de bout en bout' },
  ],
  filters: [
    { id: 'all', label: 'Toutes les offres' },
    { id: 'particuliers', label: 'Particuliers' },
    { id: 'entreprises', label: 'Entreprises' },
    { id: 'institutions', label: 'Institutions' },
  ],
  offers: [
    {
      id: 'diagnostic',
      tag: 'DIAGNOSTIC',
      title: 'Diagnostic projet',
      text: 'Analyse rapide de votre idée et recommandations clés. (1h)',
      prices: [{ amount: '99 €', unit: '/ session' }],
      categories: ['particuliers'],
    },
    {
      id: 'session-strategique',
      tag: 'CONSEIL',
      title: 'Session stratégique',
      text: "Conseil individuel (1h30) pour passer à l'action.",
      prices: [{ amount: '190 €', unit: '/ session' }],
      categories: ['particuliers'],
    },
    {
      id: 'pack-structuration',
      tag: 'STRUCTURATION',
      title: 'Pack Structuration',
      text: "Dossier complet : stratégie, plan d'action et projections.",
      prices: [{ amount: '490 €' }],
      categories: ['particuliers', 'entreprises'],
    },
    {
      id: 'pack-lancement',
      tag: 'LANCEMENT',
      title: 'Pack Lancement',
      text: 'Stratégie + contenus + identité + plan de communication.',
      prices: [{ amount: '990 €' }],
      categories: ['particuliers', 'entreprises'],
      featured: true,
    },
    {
      id: 'premium',
      tag: 'PREMIUM',
      title: 'Accompagnement Premium',
      text: 'Suivi personnalisé et pilotage de projet sur 3 mois.',
      prices: [{ amount: '1 990 €' }],
      categories: ['entreprises', 'institutions'],
    },
    {
      id: 'formation',
      tag: 'FORMATION',
      title: 'Formation / Atelier',
      text: 'Journée ou demi-journée de formation sur mesure.',
      prices: [
        { amount: '1 200 €', unit: '/ jour' },
        { amount: '700 €', unit: '/ demi-journée' },
      ],
      categories: ['entreprises', 'institutions'],
    },
    {
      id: 'institutionnel',
      tag: 'INSTITUTIONNEL',
      title: 'Mission Institutionnelle',
      text: 'Étude, programme ou mission complète, sur devis.',
      prices: [{ amount: 'dès 2 500 €', unit: '/ sur devis' }],
      categories: ['institutions'],
    },
  ],
  ctaLabel: 'Choisir cette offre',
  cta: { lead: 'Échangeons sur ', highlight: 'vos besoins', text: 'Construisons ensemble des solutions à impact.', label: 'Réserver un échange', href: '#tunnel-vente' },
};

/** « 1 200 € / jour · 700 € / demi-journée » — libellé inline des tarifs d'une offre. */
export const formatOfferPrices = (offer) =>
  offer.prices.map(({ amount, unit }) => (unit ? `${amount} ${unit}` : amount)).join(' · ');

/* ---------------------------------------------------- 05 POURQUOI NOUS CHOISIR */

export const why = {
  num: '05',
  eyebrow: 'Pourquoi nous choisir',
  titleLead: 'Une approche globale, un ',
  titleHighlight: 'ancrage culturel réel',
  intro:
    "Bantou Connexion, c'est bien plus qu'un prestataire. C'est un partenaire engagé, à l'écoute de vos besoins, qui met son expertise au service de la réussite de vos projets.",
  reasons: [
    { icon: 'target', title: 'Approche 360°', text: "De la stratégie à la création, de l'idée à l'impact." },
    { icon: 'shield', title: 'Expertise culturelle unique', text: 'Une compréhension profonde des codes culturels urbains.' },
    { icon: 'trending', title: 'Résultats mesurables', text: 'Des solutions concrètes qui génèrent visibilité et opportunités.' },
    { icon: 'users', title: 'Accompagnement humain', text: 'Proximité, écoute et engagement à chaque étape du projet.' },
    { icon: 'globe', title: 'Réseau panafricain', text: 'Un écosystème solide en France, en Afrique et dans les industries créatives.' },
  ],
  trustBadges: [
    { icon: 'gem', label: 'Expertise reconnue' },
    { icon: 'users', label: 'Relation de confiance' },
    { icon: 'chart', label: 'Résultats concrets' },
    { icon: 'leaf', label: 'Engagement durable' },
  ],
  testimonialsEyebrow: 'Ils nous font confiance',
  testimonials: [
    {
      quote:
        'Bantou Connexion comprend les réalités du terrain et propose des solutions innovantes qui répondent à nos besoins.',
      author: 'Amina D.',
      role: "Directrice d'association culturelle",
    },
    {
      quote:
        'Leur approche mêle créativité, rigueur et impact. Un partenaire de confiance pour des projets à forte valeur sociale.',
      author: 'Julien M.',
      role: 'Responsable innovation, Fondation',
    },
    {
      quote: 'Grâce à Bantou Connexion, nous avons su structurer nos idées et toucher de nouveaux publics.',
      author: 'Idris K.',
      role: 'Entrepreneur & fondateur de startup',
    },
  ],
};

/* ------------------------------------------------------ 06 IMPACT & VISION 2030 */

export const impact = {
  num: '06',
  eyebrow: 'Impact & vision 2030',
  titleLead: 'Un impact mesurable, durable et ',
  titleHighlight: 'inclusif',
  intro:
    "Notre ambition est de créer des ponts entre la culture urbaine, l'innovation et le développement pour bâtir des avenirs meilleurs et connectés.",
  timeline: [
    { year: '2027', title: 'Consolider', text: "Structurer l'entreprise, développer nos offres et asseoir notre présence en France." },
    { year: '2028', title: 'Étendre', text: "Déployer nos programmes de formation et nos solutions culturelles à l'international." },
    { year: '2029', title: 'Connecter', text: "Créer un réseau panafricain de partenaires, d'ambassadeurs et de projets à impact." },
    { year: '2030', title: 'Transformer', text: "Devenir un acteur de référence dans la culture urbaine et l'innovation à impact." },
  ],
  engagements: [
    { icon: 'users', title: 'Inclusion', text: "Favoriser l'émergence des talents issus des quartiers, des zones rurales et de la diaspora." },
    { icon: 'bulb', title: 'Éducation & employabilité', text: "Donner accès à des compétences clés et à des opportunités d'évolution concrètes." },
    { icon: 'music', title: 'Culture & identité', text: "Valoriser les cultures urbaines africaines et diasporiques comme vecteurs d'unité et de rayonnement." },
    { icon: 'leaf', title: 'Durabilité', text: 'Concevoir des projets responsables, éthiques et respectueux des communautés et de l’environnement.' },
  ],
  cta: { lead: 'Construisons ensemble des projets ', highlight: 'qui comptent.', text: "Entreprendre aujourd'hui pour des territoires plus forts demain.", label: 'Échanger sur votre projet', href: '#contact' },
};

/* ------------------------------------------------- 07 PARTENAIRES & ÉCOSYSTÈME */

export const partners = {
  num: '07',
  eyebrow: 'Partenaires & écosystème',
  titleLead: 'Un réseau solide, en France, en Afrique et dans la ',
  titleHighlight: 'diaspora',
  values: [
    { icon: 'handshake', label: 'Écoute active' },
    { icon: 'target', label: 'Solutions sur mesure' },
    { icon: 'users', label: 'Relations durables' },
    { icon: 'gem', label: 'Impact réel' },
  ],
  testimonial: {
    quoteLead: 'Bantou Connexion a su comprendre nos enjeux et nous apporter des solutions concrètes, efficaces et adaptées à notre réalité. ',
    quoteHighlight: 'Un vrai partenaire de terrain.',
    author: 'Moussa K.',
    role: "Directeur d'une structure d'insertion",
  },
  cta: {
    title: "Rejoignez l'écosystème Bantou Connexion",
    text: 'Collaboration · Impact · Héritage — devenez partenaire et construisons ensemble des projets qui ont du sens.',
    label: 'Devenez partenaire',
    href: '#contact',
  },
};

/* ------------------------------------------- 08 PROCESSUS DE COLLABORATION */

export const process = {
  num: '08',
  eyebrow: 'Processus de collaboration',
  titleLead: 'Cinq étapes, une ',
  titleHighlight: 'trajectoire claire',
  intro:
    "Chez Bantou Connexion, nous suivons une méthode structurée pour transformer vos idées en projets concrets et durables. De l'écoute à la réalisation, nous avançons à vos côtés à chaque étape.",
  steps: [
    { num: '01', icon: 'chat', title: 'Écoute & analyse', text: 'Comprendre votre projet, vos objectifs et votre contexte.' },
    { num: '02', icon: 'target', title: 'Conception stratégique', text: 'Structurer une feuille de route claire et adaptée.' },
    { num: '03', icon: 'gear', title: 'Co-construction', text: 'Créer et développer les livrables avec vous, à chaque étape.' },
    { num: '04', icon: 'chart', title: 'Suivi & optimisation', text: 'Ajuster, mesurer et améliorer en continu.' },
    { num: '05', icon: 'users', title: 'Impact durable', text: 'Consolider les résultats et préparer la suite.' },
  ],
  manifesto: {
    lead: 'Des idées bien accompagnées deviennent des réalités qui ',
    highlight: 'changent des vies.',
    author: 'Bantou Connexion',
  },
  pillars: [
    { icon: 'bulb', title: 'Proximité et écoute' },
    { icon: 'handshake', title: 'Expertise et engagement' },
    { icon: 'leaf', title: 'Impact durable et partagé' },
  ],
  cta: { lead: "Ensemble, passons de ", highlight: "l'idée à l'impact.", text: 'Des solutions concrètes pour des territoires plus forts demain.', label: 'Échanger sur votre projet', href: '#contact' },
};

/* ------------------------------------------------------------------ 09 CONTACT */

export const contact = {
  num: '09',
  eyebrow: 'Contact',
  titleLead: 'Prenons rendez-vous et ',
  titleHighlight: 'construisons ensemble',
  intro: "Un projet en tête ? Parlons-en et voyons comment le transformer en impact concret.",
  details: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'contact@bantouconnexion.com',
      href: 'mailto:contact@bantouconnexion.com',
    },
    {
      icon: 'globe',
      label: 'Site web',
      value: 'www.bantouconnexion.com',
      href: 'https://www.bantouconnexion.com',
    },
  ],
  socials: [
    { icon: 'facebook', label: 'Facebook', href: '#' },
    { icon: 'instagram', label: 'Instagram', href: '#' },
    { icon: 'linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'youtube', label: 'YouTube', href: '#' },
  ],
  form: {
    title: 'Envoyez-nous un message',
    subtitle: 'Nous vous recontacterons dans les plus brefs délais.',
    fields: {
      name: { label: 'Nom complet', placeholder: 'Votre nom' },
      email: { label: 'Email', placeholder: 'vous@exemple.com' },
      message: { label: 'Votre message', placeholder: 'Parlez-nous de votre projet...' },
    },
    submitLabel: 'Envoyer ma demande',
    calendlyLabel: 'Réserver un créneau (Calendly)',
    successMessage: 'Merci ! Votre demande est bien partie. Nous revenons vers vous rapidement.',
    /*
     * Endpoint du formulaire (Formspree, Netlify Forms, API interne…).
     * Tant qu'il est vide, le formulaire bascule automatiquement sur un envoi
     * par client mail (mailto:) — le site reste donc fonctionnel dès le déploiement.
     */
    endpoint: '',
  },
  /* Remplacer par l'URL Calendly réelle avant mise en production. */
  calendlyUrl: 'https://calendly.com/bantou-connexion/diagnostic',
  closing: {
    title: 'Des projets, des rencontres, des opportunités',
    text: 'Ensemble, faisons émerger des solutions concrètes pour des territoires plus inclusifs, plus innovants et plus durables.',
  },
  cta: { lead: 'Ensemble, construisons ', highlight: "des territoires d'opportunités.", text: 'Des solutions concrètes pour un impact durable.', label: 'Démarrons la conversation', href: '#tunnel-vente' },
};
