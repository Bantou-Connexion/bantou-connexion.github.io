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
  baseline: 'CONCEVOIR · CONNECTER · CONSTRUIRE',
  tagline: "Des idées d'aujourd'hui pour des villes de demain",
  script: 'Des Territoires qui inspirent',
  footerKeywords: ['CULTURE', 'INNOVATION', 'TERRITOIRES DURABLES'],
  legal: '© 2026 Bantou Connexion — France · Afrique · Diaspora',
  disciplines: 'Conseil · Création · Formation · Ingénierie de projets · Culture urbaine',
};

/* --------------------------------------------------------------- NAVIGATION */

export const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'offres', label: 'Offres' },
  { id: 'apropos', label: 'À propos' },
  { id: 'impact', label: 'Impact' },
  { id: 'contact', label: 'Contact' },
];

export const navCta = { label: 'Réserver un diagnostic', href: '#tunnel-vente' };

/* --------------------------------------------------------------------- HERO */

export const hero = {
  eyebrow: 'CONCEVOIR · CONNECTER · CONSTRUIRE',
  titleLead: 'Transformer vos idées en',
  titleHighlight: 'projets à impact',
  lede: "Conseil, création, formation et ingénierie de projets — au service des porteurs d'idées, des institutions et de la culture urbaine.",
  primaryCta: { label: 'Découvrir nos offres', href: '#offres' },
  secondaryCta: { label: 'Réserver un diagnostic', href: '#tunnel-vente' },
  pillars: [
    { icon: 'target', label: 'Stratégie & conseil' },
    { icon: 'play', label: 'Création & contenus' },
    { icon: 'users', label: 'Formation & accompagnement' },
  ],
  badge: { value: '25 000 €', label: 'objectif de financement 2026' },
};

/* ------------------------------------------------------- 01 QUI SOMMES-NOUS */

export const about = {
  num: '01',
  eyebrow: 'Qui sommes-nous',
  titleLead: "L'expertise au service des projets et de la",
  titleHighlight: 'culture urbaine',
  intro:
    "Bantou Connexion est une micro-entreprise qui accompagne les créateurs, entrepreneurs, associations, institutions et marques dans la transformation de leurs idées en projets concrets, visibles et finançables — en combinant conseil stratégique, création de contenus, direction artistique, formation et ingénierie de projets, avec une forte empreinte culturelle et urbaine.",
  quoteLead: 'Notre ambition : bâtir des ',
  quoteHighlight: 'passerelles',
  quoteTail: ' entre ambition, compétence et culture pour créer un impact durable.',
  quotePillars: ['TALENTS', 'PROJETS', 'TERRITOIRES'],
  visionMission: [
    {
      icon: 'binoculars',
      title: 'Notre vision',
      text: "Devenir le partenaire de référence qui révèle les talents, structure les projets et connecte les forces vives de la culture urbaine et du monde professionnel pour construire l'avenir.",
    },
    {
      icon: 'target',
      title: 'Notre mission',
      text: "Accompagner nos clients de la conception à la réalisation de leurs projets grâce à des solutions sur mesure en conseil, création, formation et ingénierie — en valorisant la culture urbaine comme levier d'innovation, d'inclusion et de développement économique.",
    },
  ],
  values: [
    { num: '01', icon: 'bulb', title: 'Créativité', text: 'Une force de transformation au service de chaque projet.' },
    { num: '02', icon: 'users', title: 'Authenticité', text: 'Des projets ancrés dans des réalités vécues, jamais artificielles.' },
    { num: '03', icon: 'star', title: 'Excellence', text: 'Un standard exigeant, du diagnostic à la livraison.' },
    { num: '04', icon: 'handshake', title: 'Engagement', text: 'Une proximité humaine et une écoute réelle des besoins.' },
    { num: '05', icon: 'share', title: 'Collaboration', text: "Co-construire plutôt qu'imposer, avec chaque partenaire." },
    { num: '06', icon: 'chart', title: 'Impact social', text: 'Des résultats mesurables, orientés utilité durable.' },
  ],
};

/* ------------------------------------------------------------- 02 FONDATEUR */

export const founder = {
  num: '02',
  eyebrow: 'Le fondateur',
  titleLead: "L'ADN du ",
  titleHighlight: 'projet',
  lead: "Bantou Connexion est porté par Karym Mbakam « Djomo », entrepreneur, créateur, stratège et producteur de projets à la croisée de la culture, de l'innovation et de l'impact social.",
  body: "Depuis plus de 20 ans, il conçoit, structure et développe des projets dans les domaines culturels, éducatifs, artistiques, entrepreneuriaux et technologiques, en France et en Afrique. Fondateur de plusieurs initiatives dont Just Human Africa (association loi 1901), il met aujourd'hui son expertise au service des porteurs de projets et des institutions à travers une approche exigeante, humaine et créative.",
  expertise: [
    { icon: 'target', label: 'Conception et ingénierie de projets' },
    { icon: 'chart', label: 'Conseil stratégique et développement' },
    { icon: 'play', label: 'Création de contenus et direction artistique' },
    { icon: 'users', label: 'Formation, transmission et accompagnement' },
    { icon: 'music', label: 'Culture urbaine, musique et industries créatives' },
    { icon: 'share', label: 'Réseaux institutionnels et partenariats' },
  ],
  quoteLead: '« Je crois aux idées qui rassemblent, aux projets qui élèvent et aux talents qui ',
  quoteHighlight: 'construisent le futur.',
  quoteTail: ' »',
  signature: { name: 'Karym Mbakam', role: 'DJOMO' },
  stats: [
    { value: '+100', label: 'projets accompagnés' },
    { value: '+50', label: 'partenaires mobilisés' },
    { value: '+20', label: 'formations & ateliers' },
    { value: '+15', label: 'projets culturels' },
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
      text: 'Analyse rapide de votre idée et recommandations clés.',
      price: '99 €',
      priceUnit: '/ session',
      categories: ['particuliers'],
    },
    {
      id: 'session-strategique',
      tag: 'CONSEIL',
      title: 'Session stratégique',
      text: "Conseil individuel (1h30) pour passer à l'action.",
      price: '190 €',
      priceUnit: '/ session',
      categories: ['particuliers'],
    },
    {
      id: 'pack-structuration',
      tag: 'STRUCTURATION',
      title: 'Pack Structuration',
      text: "Dossier complet : stratégie, plan d'action et projections.",
      price: '490 €',
      priceUnit: '',
      categories: ['particuliers', 'entreprises'],
    },
    {
      id: 'pack-lancement',
      tag: 'LANCEMENT',
      title: 'Pack Lancement',
      text: 'Stratégie + contenus + identité + plan de communication.',
      price: '990 €',
      priceUnit: '',
      categories: ['particuliers', 'entreprises'],
      featured: true,
    },
    {
      id: 'premium',
      tag: 'PREMIUM',
      title: 'Accompagnement Premium',
      text: 'Suivi personnalisé et pilotage de projet sur 3 mois.',
      price: '1 990 €',
      priceUnit: '',
      categories: ['entreprises', 'institutions'],
    },
    {
      id: 'formation',
      tag: 'FORMATION',
      title: 'Formation / Atelier',
      text: 'Journée ou demi-journée de formation sur mesure.',
      price: '1 200 €',
      priceUnit: '/ jour',
      categories: ['entreprises', 'institutions'],
    },
    {
      id: 'institutionnel',
      tag: 'INSTITUTIONNEL',
      title: 'Mission Institutionnelle',
      text: 'Étude, programme ou mission complète, sur devis.',
      price: 'dès 2 500 €',
      priceUnit: '/ sur devis',
      categories: ['institutions'],
    },
    {
      id: 'abonnement',
      tag: 'RESSOURCES',
      title: 'Abonnement Ressources',
      text: 'Accès illimité à nos ressources, modèles et masterclass.',
      price: '29 €',
      priceUnit: '/ mois',
      categories: ['particuliers'],
    },
  ],
  ctaLabel: 'Choisir cette offre',
  engines: [
    { num: '01', icon: 'handshake', title: 'Offres en ligne', text: 'Diagnostics, sessions stratégiques, packs et abonnements ressources.' },
    { num: '02', icon: 'sliders', title: 'Prestations Premium', text: 'Accompagnement sur-mesure, direction artistique et ingénierie de projets.' },
    { num: '03', icon: 'clock', title: 'Formations & Ateliers', text: 'Ateliers pratiques et programmes thématiques adaptés aux besoins.' },
    { num: '04', icon: 'users', title: 'Commandes B2B & Institutionnelles', text: 'Missions pour associations, collectivités, entreprises et organismes.' },
  ],
  cta: { lead: 'Échangeons sur ', highlight: 'vos besoins', text: 'Construisons ensemble des solutions à impact.', label: 'Réserver un échange', href: '#tunnel-vente' },
};

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
    { year: '2025', title: 'Consolider', text: "Structurer l'entreprise, développer nos offres et asseoir notre présence en France." },
    { year: '2026', title: 'Étendre', text: "Déployer nos programmes de formation et nos solutions culturelles à l'international." },
    { year: '2028', title: 'Connecter', text: "Créer un réseau panafricain de partenaires, d'ambassadeurs et de projets à impact." },
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
  eyebrowTrust: 'Ils nous font confiance',
  logos: [
    'Institut Français',
    'UNESCO',
    'AFD',
    'Radio Nova',
    'Trace Urban',
    'Rapelite',
    'Campus France',
    'Orange Digital Center',
  ],
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
  verbs: ['ÉCOUTER', 'CONSEILLER', 'PLANIFIER', 'RÉALISER', 'MESURER'],
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
  verbs: ['ÉCOUTER', 'ÉCHANGER', 'CONSTRUIRE', 'AVANCER', 'ENSEMBLE'],
  details: [
    {
      icon: 'phone',
      label: 'Téléphone',
      value: '+33 6 11 21 95 57',
      href: 'tel:+33611219557',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'contact@bantouconnexion.com',
      href: 'mailto:contact@bantouconnexion.com',
    },
    {
      icon: 'pin',
      label: 'Adresse',
      value: '37 rue du Maréchal de Lattre de Tassigny,\n78150 Le Chesnay-Rocquencourt',
      href: null,
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
