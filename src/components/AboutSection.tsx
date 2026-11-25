import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/summitData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface AboutSectionProps {
  onDiscoverStory: () => void;
}

export function AboutSection({ onDiscoverStory }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="bg-[#F7F4ED] text-[#193D66] pb-20 sm:pb-28 lg:pb-32 pt-4 sm:pt-8"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Asymmetric Editorial Photograph with Subtle Pale-Blue Architectural Accent */}
          <Reveal className="lg:col-span-6">
            <figure className="relative">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-5 -left-5 right-8 top-8 bg-[#E9F2F9] z-0"
              />
              <div className="relative z-10 overflow-hidden bg-[#E8D9C5]/40">
                <EditorialImage
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.imageAlt}
                  fallbackTitle="She Power Curatorial Roundtable"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
              <figcaption className="relative z-10 mt-4 flex items-center justify-between font-ui text-[11px] uppercase tracking-[0.16em] text-[#526783]">
                <span>{ABOUT_CONTENT.caption}</span>
                <span className="hidden sm:inline text-[#193D66]/60">Kochi · 2027</span>
              </figcaption>
            </figure>
          </Reveal>

          {/* Right: Editorial Narrative */}
          <Reveal delayMs={120} className="lg:col-span-6 lg:pl-6">
            <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-[#234B78] mb-4">
              {ABOUT_CONTENT.kicker}
            </p>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.08] tracking-[-0.01em] text-[#193D66] whitespace-pre-line text-balance">
              {ABOUT_CONTENT.heading}
            </h2>

            <div className="w-16 h-[1px] bg-[#193D66]/25 my-7" aria-hidden="true" />

            <div className="space-y-5 max-w-[54ch]">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-prose text-[15px] sm:text-[16px] leading-[1.75] text-[#526783]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-9">
              <button
                type="button"
                onClick={onDiscoverStory}
                className="group inline-flex items-center gap-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-[#193D66] pb-1.5 border-b border-[#193D66]/40 hover:border-[#193D66] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F4ED]"
              >
                <span>{ABOUT_CONTENT.ctaLabel}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
