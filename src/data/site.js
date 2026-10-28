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
  legal: `© ${new Date().getFullYear()} Bantou Connexion`,
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

export const navCta = { label: "Rejoignez\nl'Académie des Bâtisseurs" };

/* --------------------------------------------------------------------- HERO */

export const hero = {
  eyebrow: 'CONCEVOIR / CONSTRUIRE / CONNECTER',
  titleLead: 'Votre idée mérite de devenir',
  titleHighlight: 'un vrai projet',
  lede: 'Conseil, créations, productions et ingénierie de projets — au service des artistes et entrepreneurs issus de la street culture.',
  cta: { label: 'Réserver un diagnostic', icon: 'calendar' },
};

/* ------------------------------------------------------ MODALE DIAGNOSTIC */

export const diagnostic = {
  eyebrow: 'Le diagnostic',
  titleLead: 'Trouvons le bon ',
  titleHighlight: 'point de départ',
  intro: 'Avant de choisir une formation ou un accompagnement, identifiez les priorités de votre projet.',
  closeLabel: 'Fermer la fenêtre',
  options: [
    {
      tone: 'dark',
      eyebrow: 'Particuliers & indépendants',
      titleLead: 'Diagnostic stratégique ',
      titleHighlight: 'de projet',
      text: 'Un premier regard structuré sur votre projet, ses points forts, ses blocages et ses prochaines étapes.',
      cta: { label: 'Commencer', action: 'join' },
    },
    {
      tone: 'light',
      eyebrow: 'Institutions & Entreprises',
      titleLead: 'Une réponse adaptée ',
      titleHighlight: 'à vos enjeux',
      text: "Formation, accompagnement, conception de programme ou ingénierie de projet : nous construisons une proposition adaptée à votre organisation.",
      cta: { label: 'Demander une proposition sur devis', action: 'quote' },
    },
  ],
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
  cta: { label: "Rejoignez l'Académie des Bâtisseurs" },
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
  cta: { label: 'Présenter mon besoin' },
};

/* ------------------------------------------------------------------ CONTACT */

export const contact = {
  eyebrow: 'Contacts',
  titleLead: 'Prenons rendez-vous et ',
  titleHighlight: 'construisons ensemble',
  intro: 'Un projet, une question ou une collaboration ? Notre équipe est à votre écoute pour échanger et vous proposer une réponse adaptée.',
  links: [
    { icon: 'mail', label: 'Email', value: 'contact@bantouconnexion.com', href: 'mailto:contact@bantouconnexion.com' },
    { icon: 'globe', label: 'Site internet', value: 'www.bantouconnexion.com', href: 'https://www.bantouconnexion.com' },
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

/* ------------------------------------------ MODALE PRISE DE CONTACT INSTITUTIONNELLE */

export const institutionalForm = {
  id: 'institution',
  mailSubject: 'Demande institutionnelle',
  subjectField: 'structure',
  eyebrow: 'Institutions & Entreprises',
  titleLead: 'Présentez votre besoin, ',
  titleHighlight: 'nous revenons vers vous',
  intro:
    'Remplissez le formulaire ci-contre afin de nous présenter votre projet. Notre équipe vous contacte pour échanger et vous proposer une solution adaptée.',
  closeLabel: 'Fermer la fenêtre',
  formEyebrow: 'Formulaire',
  formTitle: 'Prise de contact institutionnelle',
  formIntro:
    'Partagez les informations clés de votre projet afin que nous puissions vous proposer une réponse adaptée à vos besoins.',
  fields: [
    { name: 'structure', label: 'Nom de la structure', placeholder: 'Entreprise, association, collectivité, établissement…', required: true, autoComplete: 'organization', wide: true },
    { name: 'interlocuteur', label: 'Interlocuteur', placeholder: 'Nom et fonction', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Courriel professionnel', placeholder: 'nom@structure.fr', required: true, type: 'email', autoComplete: 'email' },
    { name: 'objectif', label: 'Objectif de votre projet', placeholder: 'Décrivez en quelques lignes votre besoin, vos objectifs et le contexte…', required: true, multiline: true, wide: true },
    { name: 'public', label: 'Public concerné', placeholder: 'Jeunes, équipes, artistes, entrepreneurs…', required: true },
    { name: 'calendrier', label: 'Calendrier envisagé', placeholder: 'Période souhaitée', required: true },
    { name: 'budget', label: 'Budget indicatif (facultatif)', placeholder: 'Montant ou fourchette', wide: true },
  ],
  submitLabel: 'Envoyer ma demande',
  sendingLabel: 'Envoi en cours…',
  privacy: 'Vos informations sont confidentielles et utilisées uniquement dans le cadre de votre demande.',
  successMessage: 'Merci ! Votre demande est bien partie. Notre équipe revient vers vous rapidement.',
  errorMessage: "L'envoi a échoué. Merci de réessayer ou de nous écrire directement à contact@bantouconnexion.com.",
  requiredError: 'Ce champ est requis.',
  emailError: 'Cet email ne semble pas valide.',
  /*
   * Endpoint du formulaire (Formspree, Netlify Forms, Worker…). Tant qu'il est vide,
   * la demande s'ouvre dans le client mail du visiteur (mailto:) : rien n'est envoyé
   * automatiquement.
   */
  endpoint: '',
  mailTo: 'contact@bantouconnexion.com',
};

/* ------------------------------------------------ MODALE INSCRIPTION ACADÉMIE */

export const registrationForm = {
  id: 'inscription',
  mailSubject: "Inscription — Académie des Bâtisseurs",
  subjectField: 'nom',
  eyebrow: 'Entrepreneurs, artistes & futurs participants',
  titleLead: 'Parlez-nous de votre projet, ',
  titleHighlight: 'nous avançons ensemble',
  intro:
    "Que vous soyez entrepreneur, artiste ou futur participant de l'Académie des Bâtisseurs, partagez votre projet avec notre équipe. Nous vous orientons vers le parcours le plus adapté à vos objectifs.",
  closeLabel: 'Fermer la fenêtre',
  formEyebrow: 'Formulaire',
  formTitle: 'Présentez votre projet',
  formIntro:
    'Remplissez ce formulaire pour nous permettre de mieux comprendre votre parcours, vos besoins et vos objectifs. Notre équipe vous recontacte rapidement pour échanger et vous proposer un accompagnement adapté.',
  fields: [
    {
      name: 'profil',
      label: 'Vous êtes',
      type: 'radio',
      required: true,
      wide: true,
      options: ['Entrepreneur', 'Artiste', "Futur participant de l'Académie des Bâtisseurs"],
      defaultValue: 'Entrepreneur',
    },
    { name: 'nom', label: 'Nom et prénom', placeholder: 'Nom et prénom', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Courriel', placeholder: 'votre@email.com', required: true, type: 'email', autoComplete: 'email' },
    { name: 'telephone', label: 'Téléphone', placeholder: 'Votre numéro de téléphone', type: 'tel', autoComplete: 'tel' },
    { name: 'ville', label: 'Ville / Pays', placeholder: 'Ville, pays', autoComplete: 'address-level2' },
    { name: 'projet', label: 'Votre projet', placeholder: 'Décrivez votre projet, vos objectifs et le contexte…', required: true, multiline: true, wide: true },
    {
      name: 'besoins',
      label: 'Vos besoins',
      type: 'checkboxes',
      required: true,
      options: ['Conseil stratégique', 'Création & direction artistique', 'Formation & transmission', 'Ingénierie de projets'],
    },
    { name: 'echeance', label: 'Échéance souhaitée', placeholder: 'Période envisagée' },
    { name: 'infos', label: 'Informations complémentaires (facultatif)', placeholder: 'Informations utiles, liens, références…', multiline: true, wide: true },
  ],
  submitLabel: 'Envoyer ma demande',
  sendingLabel: 'Envoi en cours…',
  privacy: 'Vos informations sont confidentielles et utilisées uniquement dans le cadre de votre demande.',
  successMessage: 'Merci ! Votre demande est bien partie. Notre équipe revient vers vous rapidement.',
  errorMessage: "L'envoi a échoué. Merci de réessayer ou de nous écrire directement à contact@bantouconnexion.com.",
  requiredError: 'Ce champ est requis.',
  emailError: 'Cet email ne semble pas valide.',
  /* Même fonctionnement que `institutionalForm.endpoint` : vide = ouverture du client mail. */
  endpoint: '',
  mailTo: 'contact@bantouconnexion.com',
};
