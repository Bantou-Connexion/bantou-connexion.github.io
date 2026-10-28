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
  secondaryCta: { label: 'Réserver un diagnostic', href: '/diagnostic.html', icon: 'calendar' },
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

/* ------------------------------------------------------------- 04 ACADÉMIE */

export const academie = {
  num: '04',
  eyebrow: "L'Académie des Bâtisseurs",
  titleLead: "Passez de l'idée au ",
  titleHighlight: 'projet structuré.',
  intro:
    "L'Académie des Bâtisseurs réunit des ressources et des parcours de formation pour clarifier votre positionnement, bâtir votre stratégie et organiser votre lancement.",
  stepsTitle: 'Un parcours en 4 temps',
  steps: [
    { num: '01', title: 'Clarifier', text: "Définir l'ambition et le public." },
    { num: '02', title: 'Structurer', text: "Construire l'offre et le modèle." },
    { num: '03', title: 'Créer', text: "Préparer l'identité et les supports." },
    { num: '04', title: 'Déployer', text: 'Organiser la commercialisation et le pilotage.' },
  ],
  cta: { label: "Rejoignez l'Académie des Bâtisseurs", href: '#contact' },
};

/* ------------------------------------------------ INSTITUTIONS & ENTREPRISES */

export const partners = {
  eyebrow: 'Institutions & Entreprises',
  titleLead: 'Des solutions conçues ',
  titleHighlight: 'pour vos publics',
  titleTail: 'et vos objectifs',
  intro:
    "Collectivités, associations, établissements, entreprises et acteurs culturels : nous concevons avec vous des dispositifs de formation, d'accompagnement, de création et de développement de projets.",
  offers: [
    { icon: 'graduation', title: 'Formation & ateliers', text: 'Transmettre des compétences et développer les talents de vos publics.' },
    { icon: 'users', title: 'Accompagnement de porteurs de projets', text: 'Structurer les initiatives et sécuriser leur réalisation.' },
    { icon: 'gear', title: 'Ingénierie et montage de programmes', text: 'Concevoir, organiser et déployer des dispositifs adaptés à vos enjeux.' },
    { icon: 'megaphone', title: 'Communication et création de contenus', text: 'Valoriser vos projets par des contenus et des identités fortes et cohérentes.' },
  ],
  method: {
    title: 'Notre méthode',
    intro: "Un accompagnement simple, clair et efficace, du premier échange à l'évaluation des résultats.",
    steps: [
      { num: '01', title: 'Échange de cadrage', text: 'Comprendre vos besoins, vos objectifs et vos contraintes.' },
      { num: '02', title: 'Proposition', text: 'Vous présenter une solution sur mesure et un devis.' },
      { num: '03', title: 'Déploiement', text: 'Mettre en œuvre les actions avec un suivi régulier.' },
      { num: '04', title: 'Bilan', text: 'Évaluer les résultats et les perspectives.' },
    ],
  },
  cta: { label: 'Présenter mon besoin', href: '#contact' },
};

/* ------------------------------------------------------------------ CONTACT */

export const contact = {
  eyebrow: 'Contact',
  titleLead: 'Prenons rendez-vous et ',
  titleHighlight: 'construisons ensemble',
  intro: 'Un projet, une question ou une collaboration ? Notre équipe est à votre écoute pour échanger et vous proposer une réponse adaptée.',
  cards: [
    {
      title: 'Contact direct',
      text: 'Une question, un projet ou une demande de partenariat ? Écrivez-nous.',
      link: { icon: 'mail', label: 'Email', value: 'contact@bantouconnexion.com', href: 'mailto:contact@bantouconnexion.com' },
    },
    {
      title: 'Site web',
      text: "Découvrez nos offres, nos projets et toute l'actualité.",
      link: { icon: 'globe', label: 'Site internet', value: 'www.bantouconnexion.com', href: 'https://www.bantouconnexion.com' },
    },
  ],
  socialsCard: {
    title: 'Suivez-nous',
    text: 'Retrouvez nos actualités, nos projets et nos contenus sur les réseaux sociaux.',
    links: [
      { icon: 'facebook', label: 'Facebook', href: '#' },
      { icon: 'instagram', label: 'Instagram', href: '#' },
      { icon: 'linkedin', label: 'LinkedIn', href: '#' },
      { icon: 'youtube', label: 'YouTube', href: '#' },
    ],
  },
};
