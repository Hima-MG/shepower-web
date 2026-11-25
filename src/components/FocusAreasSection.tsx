import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FOCUS_AREAS, FOCUS_AREAS_HEADER, FocusAreaItem } from '../data/summitData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface FocusAreasSectionProps {
  onSelectArea: (area: FocusAreaItem) => void;
  onViewAllAreas: () => void;
}

const DESKTOP_SPAN_CLASSES: Record<string, string> = {
  entrepreneurship: 'lg:col-span-5 lg:h-[370px]',
  creativity: 'lg:col-span-3 lg:h-[370px]',
  technology: 'lg:col-span-4 lg:h-[370px]',
  policy: 'lg:col-span-3 lg:h-[410px]',
  hospitality: 'lg:col-span-5 lg:h-[410px]',
  homemakers: 'lg:col-span-4 lg:h-[410px]',
  startups: 'lg:col-span-7 lg:h-[340px]',
  finance: 'lg:col-span-5 lg:h-[340px]',
};

export function FocusAreasSection({ onSelectArea, onViewAllAreas }: FocusAreasSectionProps) {
  return (
    <section
      id="focus-areas"
      className="bg-[#E9F2F9] text-[#193D66] py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-14">
            <div className="max-w-2xl">
              <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-[#234B78] mb-3.5">
                {FOCUS_AREAS_HEADER.kicker}
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.08] tracking-[-0.01em] text-[#193D66] text-balance">
                {FOCUS_AREAS_HEADER.heading}
              </h2>
              <p className="font-prose text-[15px] sm:text-base leading-[1.7] text-[#526783] mt-4 max-w-xl">
                {FOCUS_AREAS_HEADER.supportingText}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onViewAllAreas}
                className="group inline-flex items-center gap-2.5 border border-[#193D66]/30 hover:border-[#193D66] hover:bg-[#193D66] hover:text-[#F7F4ED] text-[#193D66] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3.5 whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
              >
                <span>{FOCUS_AREAS_HEADER.ctaLabel}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Mobile: horizontal swipe carousel | Tablet: 2-col grid | Desktop: Asymmetric 12-col architectural gallery */}
        <Reveal delayMs={100}>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-5 no-scrollbar">
            {FOCUS_AREAS.map((area) => {
              const spanClass = DESKTOP_SPAN_CLASSES[area.id] ?? 'lg:col-span-4 lg:h-[360px]';
              return (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => onSelectArea(area)}
                  className={`group relative text-left shrink-0 w-[80vw] sm:w-[62vw] md:w-auto h-[360px] md:h-[340px] ${spanClass} snap-start overflow-hidden bg-[#193D66] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E9F2F9]`}
                >
                  <EditorialImage
                    src={area.image}
                    alt={area.imageAlt}
                    fallbackTitle={area.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Measured Dark Navy Scrim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#132E4E]/95 via-[#193D66]/40 to-[#193D66]/10 transition-opacity duration-300 group-hover:opacity-95"
                  />

                  {/* Top subtle index & hover icon */}
                  <div className="absolute top-5 inset-x-5 sm:inset-x-6 flex items-center justify-between">
                    <span className="font-ui text-[11px] font-medium tracking-[0.2em] text-[#E9F2F9]/85 tabular-nums">
                      {area.index}
                    </span>
                    <span className="w-8 h-8 flex items-center justify-center border border-white/25 text-white/80 group-hover:bg-[#F7F4ED] group-hover:text-[#193D66] group-hover:border-[#F7F4ED] transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
                    </span>
                  </div>

                  {/* Bottom Domain Title & Subtle Tag */}
                  <div className="absolute bottom-5 sm:bottom-6 inset-x-5 sm:inset-x-6">
                    <p className="font-ui text-[10px] font-medium uppercase tracking-[0.2em] text-[#A9C5DF] mb-1.5">
                      {area.shortTag}
                    </p>
                    <h3 className="font-editorial text-[26px] sm:text-[28px] lg:text-[30px] font-normal leading-[1.12] text-white text-balance">
                      {area.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          <p className="mt-3 font-ui text-[10px] uppercase tracking-[0.18em] text-[#526783] md:hidden">
            Swipe to explore all 08 leadership domains →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
