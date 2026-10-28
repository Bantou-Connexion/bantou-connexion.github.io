import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le dépôt est un site GitHub Pages « user/org » (bantou-connexion.github.io),
// servi à la racine du domaine : la base reste donc « / ».
export default defineConfig({
  plugins: [react()],
  base: '/',
  // Autorise les domaines de tunnel (ngrok…) pour partager le site en local.
  server: { allowedHosts: true },
  preview: { allowedHosts: true },
  build: {
    outDir: 'dist',
    target: 'es2020',
    cssCodeSplit: false,
    // Une seule page, peu de dépendances : on garde un bundle unique et compact.
    // Les pages HTML autonomes (ex. diagnostic.html) vivent dans public/ : copiées telles
    // quelles, sans recevoir le CSS Tailwind du site.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
