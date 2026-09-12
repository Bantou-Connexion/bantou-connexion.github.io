import Button from './Button';
import Media from './Media';
import Reveal from './Reveal';
import media from '../../data/media';

/*
 * Bandeau d'appel à l'action « golden hour ».
 *
 * Motif récurrent du PDF : photo de skyline au coucher du soleil, fortement
 * assombrie, sur laquelle repose un panneau bleu marine à liseré orange.
 * Réutilisé entre les sections 03, 04, 06, 08 et 09.
 */
export default function CtaBand({ lead, highlight, text, label, href, onClick }) {
  return (
    <section className="relative isolate">
      <Media
        media={media.ctaBand}
        className="min-h-[280px] sm:min-h-[320px]"
        imgClassName="absolute inset-0"
        overlay={
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,15,28,0.94)_0%,rgba(10,22,40,0.82)_45%,rgba(10,22,40,0.55)_100%)]"
            aria-hidden="true"
          />
        }
      >
        <div className="relative shell flex min-h-[280px] items-center py-14 sm:min-h-[320px]">
          <Reveal className="w-full">
            <div className="flex flex-col gap-7 border-l-4 border-orange-500 bg-navy-900/75 px-6 py-8 backdrop-blur-sm sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="min-w-0">
                <h2 className="text-display-md text-white">
                  {lead}
                  <span className="text-orange-500">{highlight}</span>
                </h2>
                {text ? <p className="mt-3 text-white/75">{text}</p> : null}
              </div>

              <Button href={href} onClick={onClick} variant="orange" className="shrink-0 self-start lg:self-auto">
                {label}
              </Button>
            </div>
          </Reveal>
        </div>
      </Media>
    </section>
  );
}
