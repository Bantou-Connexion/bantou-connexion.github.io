# Bantou Connexion — site one-page

Site vitrine one-page de Bantou Connexion : **React + Vite + Tailwind CSS**, entièrement responsive,
prêt à être déployé sur GitHub Pages.

> **Fusion des deux sources**
> - **Contenu, structure et fonctionnalités** : repris intégralement du document texte fourni
>   (organigramme Bantou Connexion). Aucun texte n'a été réécrit.
> - **Direction artistique** : reprise du PDF *Bantou Connexion Site Web Final* (planches 1 à 10) —
>   palette, typographies, découpes diagonales, cartes, boutons, bandeaux golden hour.

---

## Démarrage

```bash
npm install
npm run dev       # serveur de développement (http://localhost:5173)
npm run build     # build de production dans dist/
npm run preview   # prévisualisation du build
npm run lint      # ESLint
```

Node 20 ou supérieur.

---

## Structure du projet

```
index.html                    Point d'entrée Vite (métadonnées SEO, Open Graph, polices)
tailwind.config.js            Tokens de la charte : couleurs, typographies, ombres, animations
src/
  main.jsx                    Montage React
  App.jsx                     Composition de la page, ordre des sections
  index.css                   Base Tailwind, utilitaires de découpe, trame « wax »
  data/
    site.js                   Tout le contenu éditorial (source unique de vérité)
    media.js                  Manifeste des visuels : URL, texte alternatif, brief de production
  hooks/
    useReveal.js              Révélation au scroll (IntersectionObserver)
    useScrollSpy.js           Surlignage du menu selon la section visible
  components/
    layout/                   Logo, Header (sticky + menu hamburger), Footer
    ui/                       Icon, Button, Media, Reveal, ScriptMark, SectionHeader, CtaBand, GeoAccent
    sections/                 Hero, About, Founder, Needs, Offers, WhyUs, Impact, Partners, Process, Contact
```

### Ordre des sections (conforme à l'organigramme source)

| # | Section | Composant |
|---|---------|-----------|
| — | Hero — *Transformer vos idées en projets à impact* | `Hero` |
| 01 | Qui sommes-nous + Vision / Mission + 6 valeurs | `About` |
| 02 | Le fondateur + expertises + citation + statistiques | `Founder` |
| 03 | Le besoin & notre réponse | `Needs` |
| 04 | Nos offres & tarifs (8 formules, filtres, moteurs de valeur) | `Offers` |
| 05 | Pourquoi nous choisir + témoignages | `WhyUs` |
| 06 | Impact & vision 2030 (frise 2025 → 2030) | `Impact` |
| 07 | Partenaires & écosystème | `Partners` |
| 08 | Processus de collaboration (5 étapes) | `Process` |
| 09 | Contact — formulaire, coordonnées, réseaux, Calendly | `Contact` |

Des bandeaux d'appel à l'action « golden hour » ponctuent le parcours, comme dans le PDF.

---

## Charte graphique

| Rôle | Valeur |
|------|--------|
| Bleu marine profond | `#0A1628` (`navy-900`) — fond sombre principal |
| Bleu marine cartes | `#0F1C2E` (`navy-800`) |
| Orange de marque | `#F15A29` (`orange-500`), survol `#FF6B2C` |
| Crème | `#F6F3EC` (`cream`), alterné `#EDE8DD` (`cream-dim`) |
| Titres | Montserrat 800 / 900 |
| Texte courant | Nunito Sans |
| Accents manuscrits | Caveat |

Les sections alternent systématiquement fond clair et fond sombre. Les rayons de bordure restent
quasi nuls (2 à 4 px), conformément aux planches.

---

## À personnaliser avant mise en production

Tout se trouve dans `src/data/` — aucun composant n'a besoin d'être modifié.

1. **Photos** — `src/data/media.js`
   Les visuels sont des **placeholders Unsplash**. Chacun a été contrôlé visuellement, mais chaque
   entrée porte un champ `brief` décrivant précisément la photo définitive attendue (conforme à la
   direction artistique du PDF) : utilisable tel quel comme brief photographe ou prompt de génération.
   - ⚠️ `founderPortrait` **doit** être remplacé par une photo réelle de Karym Mbakam « Djomo ».
   - Les portraits accompagnant les témoignages (`whyTestimonial`, `partnersTestimonial`) doivent être
     remplacés par les portraits réels des personnes citées, ou retirés.

2. **Formulaire de contact** — `contact.form.endpoint` dans `src/data/site.js`
   Vide par défaut : le formulaire bascule alors sur un envoi via le client mail de l'utilisateur.
   Renseigner une URL (Formspree, Netlify Forms, API interne…) pour un envoi HTTP direct.

3. **Calendly** — `contact.calendlyUrl` dans `src/data/site.js`

4. **Réseaux sociaux** — `contact.socials` : les `href` sont actuellement des `#`.

5. **Logos partenaires** — `partners.logos` : rendus en pastilles typographiques, à remplacer par les
   logotypes officiels une fois les autorisations obtenues.

---

## Accessibilité

- Lien d'évitement vers le contenu principal.
- Navigation au clavier complète ; anneau de focus orange visible sur fond clair comme sur fond sombre.
- Menu mobile : `aria-expanded`, `aria-controls`, fermeture par `Échap`, défilement du corps bloqué.
- Formulaire : `label` associés, `aria-invalid`, messages d'erreur liés par `aria-describedby`,
  retour d'envoi annoncé via `role="status"`.
- Images décoratives en `alt=""` ; photos porteuses de sens décrites en français.
- `prefers-reduced-motion` respecté : animations et défilement doux désactivés.

## Performance

- Bundle unique d'environ 67 ko gzip (JS) et 7 ko gzip (CSS).
- Photos en `loading="lazy"` sauf le visuel du hero (`fetchpriority="high"`), qui porte le LCP.
- `content-visibility: auto` sur les sections hors écran.
- Icônes en SVG inline : aucune bibliothèque d'icônes chargée.
- Si une photo distante échoue, `Media` retombe sur un aplat dégradé aux couleurs de la charte.

---

## Déploiement

`.github/workflows/deploy.yml` construit et publie le site sur GitHub Pages à chaque push sur `main`
(lint + build, puis `actions/deploy-pages`).

Activation, une seule fois : **Settings → Pages → Source : GitHub Actions**.

Le dépôt étant un site « user/org » (`bantou-connexion.github.io`), le site est servi à la racine du
domaine et `base` reste `/` dans `vite.config.js`.
