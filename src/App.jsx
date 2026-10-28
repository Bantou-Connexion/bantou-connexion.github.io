import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CtaBand from './components/ui/CtaBand';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Founder from './components/sections/Founder';
import Academie from './components/sections/Academie';
import Partners from './components/sections/Partners';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';

import { contact, process } from './data/site';

/*
 * Page unique Bantou Connexion.
 *
 * Ordre des sections : Hero → Expertises → À propos (fondateur, références) →
 * Académie → Institutions & Entreprises → Processus → Contact.
 *
 * Les bandeaux « golden hour » ponctuent le parcours, comme dans le PDF.
 */
export default function App() {
  return (
    <>
      {/* Lien d'évitement : première tabulation de la page */}
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sharp focus:bg-orange-500 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-extrabold focus:text-white"
      >
        Aller au contenu
      </a>

      <Header />

      <main id="contenu">
        <Hero />
        <About />
        <Founder />
        <Academie />
        <Partners />
        <Process />

        <CtaBand
          lead={process.cta.lead}
          highlight={process.cta.highlight}
          text={process.cta.text}
          label={process.cta.label}
          href={process.cta.href}
        />

        <Contact />

        <CtaBand
          lead={contact.cta.lead}
          highlight={contact.cta.highlight}
          text={contact.cta.text}
          label={contact.cta.label}
          href={contact.cta.href}
        />
      </main>

      <Footer />
    </>
  );
}
