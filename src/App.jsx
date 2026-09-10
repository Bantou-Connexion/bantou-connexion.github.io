import { useState } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CtaBand from './components/ui/CtaBand';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Founder from './components/sections/Founder';
import Needs from './components/sections/Needs';
import Offers from './components/sections/Offers';
import WhyUs from './components/sections/WhyUs';
import Impact from './components/sections/Impact';
import Partners from './components/sections/Partners';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';

import { contact, impact, needs, offersSection, process } from './data/site';

/*
 * Page unique Bantou Connexion.
 *
 * L'ordre des sections suit strictement l'organigramme du contenu source :
 * Hero → 01 Qui sommes-nous → 02 Fondateur → 03 Besoin → 04 Offres →
 * 05 Pourquoi nous → 06 Impact → 07 Partenaires → 08 Processus → 09 Contact.
 *
 * Les bandeaux « golden hour » ponctuent le parcours, comme dans le PDF.
 *
 * Seul état global : l'offre choisie depuis la section tarifs, qui alimente le
 * message pré-rempli du formulaire de contact.
 */
export default function App() {
  const [selectedOffer, setSelectedOffer] = useState(null);

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
        <Needs />

        <CtaBand
          lead={needs.cta.lead}
          highlight={needs.cta.highlight}
          label={needs.cta.label}
          href={needs.cta.href}
        />

        <Offers onSelectOffer={setSelectedOffer} />

        <CtaBand
          lead={offersSection.cta.lead}
          highlight={offersSection.cta.highlight}
          text={offersSection.cta.text}
          label={offersSection.cta.label}
          href={offersSection.cta.href}
        />

        <WhyUs />
        <Impact />

        <CtaBand
          lead={impact.cta.lead}
          highlight={impact.cta.highlight}
          text={impact.cta.text}
          label={impact.cta.label}
          href={impact.cta.href}
        />

        <Partners />
        <Process />

        <CtaBand
          lead={process.cta.lead}
          highlight={process.cta.highlight}
          text={process.cta.text}
          label={process.cta.label}
          href={process.cta.href}
        />

        <Contact selectedOffer={selectedOffer} />

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
