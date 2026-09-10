/** @type {import('tailwindcss').Config} */

/*
 * Direction artistique Bantou Connexion.
 * Tous les tokens sont extraits de la charte du PDF « Bantou Connexion Site Web Final » :
 * bleu marine très sombre, orange vif, crème, titres ultra-bold, angles vifs (rayons ~2px).
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060F1C', // aplats les plus profonds / overlays
          900: '#0A1628', // fond sombre principal
          800: '#0F1C2E', // cartes sombres
          700: '#152B45', // surfaces sombres surélevées
          600: '#1E3A5C', // filets et bordures sur fond sombre
          500: '#2C4B70',
        },
        orange: {
          700: '#C93F16',
          600: '#D9481D',
          500: '#F15A29', // orange de marque
          400: '#FF6B2C', // survol / dégradés
          300: '#FF8A5B',
        },
        cream: {
          DEFAULT: '#F6F3EC', // fond clair principal
          dim: '#EDE8DD', // fond clair alterné
          deep: '#E2DCCE', // filets sur fond clair
        },
        ink: {
          DEFAULT: '#0A1628',
          muted: '#5A6675', // texte courant sur fond clair
          soft: '#8A94A3',
        },
        gold: '#FFB25A', // accents « golden hour »
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['"Nunito Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      fontSize: {
        // Titres fluides : jamais de débordement horizontal en dessous de 400px.
        'display-xl': ['clamp(2.6rem, 7.5vw, 5rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 5vw, 3.4rem)', { lineHeight: '1.06', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3.2vw, 2.2rem)', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        eyebrow: ['0.72rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      borderRadius: {
        // La charte PDF privilégie les angles vifs : 2px par défaut, 4px pour les cartes.
        card: '4px',
        sharp: '2px',
      },
      maxWidth: {
        shell: '1200px',
      },
      boxShadow: {
        card: '0 18px 44px -24px rgba(10, 22, 40, 0.35)',
        'card-hover': '0 26px 60px -22px rgba(10, 22, 40, 0.45)',
        orange: '0 14px 34px -12px rgba(241, 90, 41, 0.55)',
        header: '0 8px 30px -12px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'golden-hour': 'linear-gradient(180deg, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.78) 60%, rgba(10,22,40,0.95) 100%)',
        'navy-fade': 'linear-gradient(90deg, #0A1628 0%, #0A1628 45%, rgba(10,22,40,0.35) 100%)',
        'orange-sweep': 'linear-gradient(135deg, #F15A29 0%, #FF6B2C 100%)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translate3d(-32px, 0, 0)' },
          to: { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'slide-in-left': 'slide-in-left 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
