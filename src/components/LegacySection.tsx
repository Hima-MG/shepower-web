import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LEGACY_EDITIONS, LEGACY_HEADER, LegacyEditionItem } from '../data/summitData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface LegacySectionProps {
  onSelectEdition: (edition: LegacyEditionItem) => void;
  onExploreLegacy: () => void;
}

const STEPPED_GALLERY_CLASSES = [
  'lg:mt-14',
  'lg:mt-9',
  'lg:mt-4',
  'lg:mt-0',
];

export function LegacySection({ onSelectEdition, onExploreLegacy }: LegacySectionProps) {
  return (
    <section
      id="legacy"
      className="bg-[#193D66] text-[#F7F4ED] py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-white/15">
            <div className="max-w-2xl">
              <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A9C5DF] mb-4">
                {LEGACY_HEADER.kicker}
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.06] tracking-[0.01em] text-white whitespace-pre-line text-balance">
                {LEGACY_HEADER.heading}
              </h2>
            </div>

            <div className="max-w-sm lg:pb-1">
              <p className="font-prose text-[15px] sm:text-base leading-[1.7] text-[#E9F2F9]/85 mb-6">
                {LEGACY_HEADER.supportingText}
              </p>
              <button
                type="button"
                onClick={onExploreLegacy}
                className="group inline-flex items-center gap-3 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-[#E8D9C5] pb-1.5 border-b border-[#E8D9C5]/40 hover:border-[#E8D9C5] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#193D66]"
              >
                <span>{LEGACY_HEADER.ctaLabel}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.6}
                />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Stepped Architectural Photographic Gallery */}
        <Reveal delayMs={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 pt-12 sm:pt-14 items-start">
            {LEGACY_EDITIONS.map((edition, index) => (
              <button
                key={edition.id}
                type="button"
                onClick={() => onSelectEdition(edition)}
                className={`group text-left w-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#193D66] ${
                  STEPPED_GALLERY_CLASSES[index] ?? ''
                }`}
              >
                <div className="relative overflow-hidden bg-[#234B78] aspect-[4/3]">
                  <EditorialImage
                    src={edition.image}
                    alt={edition.imageAlt}
                    fallbackTitle={edition.editionNumber}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#122B49]/85 via-[#193D66]/20 to-transparent"
                  />
                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/30 flex items-center justify-center text-white/85 group-hover:bg-[#F7F4ED] group-hover:text-[#193D66] group-hover:border-[#F7F4ED] transition-all duration-200">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8D9C5]">
                      {edition.editionNumber}
                    </span>
                    <span className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#E9F2F9]/80">
                      {edition.attendanceNote}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-b border-white/15 pb-5">
                  <h3 className="font-editorial text-[26px] font-normal leading-[1.15] text-white group-hover:text-[#E8D9C5] transition-colors">
                    {edition.title}
                  </h3>
                  <p className="font-ui text-[11px] uppercase tracking-[0.16em] text-[#A9C5DF] mt-2">
                    {edition.location}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
