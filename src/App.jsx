import { useState } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FormModal from './components/ui/FormModal';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Founder from './components/sections/Founder';
import Academie from './components/sections/Academie';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';

import { institutionalForm, registrationForm } from './data/site';

/*
 * Page unique Bantou Connexion.
 *
 * Ordre des sections : Hero → Expertises → À propos (fondateur, références) →
 * Académie → Institutions & Entreprises → Contact.
 *
 * Les modales d'inscription à l'Académie et de demande sur devis sont ouvertes
 * depuis plusieurs sections (header, hero via la modale diagnostic, Académie,
 * Institutions & Entreprises) : leur état vit donc ici.
 */
export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const openRegistration = () => setIsRegistrationOpen(true);
  const openQuote = () => setIsQuoteOpen(true);

  return (
    <>
      {/* Lien d'évitement : première tabulation de la page */}
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sharp focus:bg-orange-500 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-extrabold focus:text-white"
      >
        Aller au contenu
      </a>

      <Header onJoin={openRegistration} />

      <main id="contenu">
        <Hero onJoin={openRegistration} onQuote={openQuote} />
        <About />
        <Founder />
        <Academie onJoin={openRegistration} />
        <Partners onQuote={openQuote} />
        <Contact />
      </main>

      <Footer />

      <FormModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} copy={institutionalForm} />
      <FormModal
        open={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
        copy={registrationForm}
      />
    </>
  );
}
