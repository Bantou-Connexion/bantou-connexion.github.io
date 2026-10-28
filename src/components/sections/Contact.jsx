import Icon from '../ui/Icon';
import Media from '../ui/Media';
import Reveal from '../ui/Reveal';
import media from '../../data/media';
import { contact } from '../../data/site';

/*
 * CONTACT (planche 6 de la maquette V2).
 *
 * Bandeau sombre sur skyline au coucher du soleil : titre, présentation, puis
 * l'email, l'adresse du site et une carte réseaux sociaux.
 */

function CardTitle({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="block h-[3px] w-11 shrink-0 bg-orange-500" aria-hidden="true" />
      <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-white">{children}</h3>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="content-auto relative isolate overflow-hidden bg-navy-900 pb-16 pt-32 lg:pb-20 lg:pt-36">
      {/* Skyline : fondue dans le bleu nuit par un masque sur son bord gauche */}
      <Media
        media={media.contactSkyline}
        position="absolute"
        className="pointer-events-none inset-y-0 right-0 -z-10 hidden w-[62%] bg-transparent [mask-image:linear-gradient(to_right,transparent,#000_30%)] lg:block"
        imgClassName="object-cover object-left"
        overlay={<div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,#0A1628_100%)]" aria-hidden="true" />}
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          <Reveal className="flex items-center gap-4">
            <span className="block h-[3px] w-12 shrink-0 bg-orange-500" aria-hidden="true" />
            <span className="font-display text-eyebrow font-extrabold uppercase text-white/80">{contact.eyebrow}</span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-display-lg text-white">
              {contact.titleLead}
              <span className="text-orange-500">{contact.titleHighlight}</span>
              <span>.</span>
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-lg text-[1.05rem] leading-relaxed text-white/80">{contact.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {contact.links.map((link, index) => (
            <Reveal key={link.label} as="li" delay={index * 90} className="flex">
              <a
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
                className="flex w-full min-w-0 items-stretch border border-navy-600 bg-navy-900/80 backdrop-blur-sm transition-colors hover:border-orange-500"
              >
                <span className="flex w-16 shrink-0 items-center justify-center bg-orange-500 text-white">
                  <Icon name={link.icon} className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <span className="min-w-0 self-center px-5 py-5">
                  <span className="block text-xs uppercase tracking-[0.14em] text-white/60">{link.label}</span>
                  <span className="mt-1 block break-words font-display text-[0.95rem] font-bold text-white">
                    {link.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}

          <Reveal as="li" delay={180} className="flex flex-col border border-navy-600 bg-navy-900/80 p-6 backdrop-blur-sm">
            <CardTitle>{contact.socialsCard.title}</CardTitle>
            <p className="mt-4 text-sm leading-relaxed text-white/80">{contact.socialsCard.text}</p>

            <ul className="mt-6 flex flex-wrap gap-3">
              {contact.socialsCard.links.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-700 text-white transition-colors hover:bg-orange-500"
                  >
                    <Icon name={social.icon} className="h-6 w-6" strokeWidth={1.8} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
