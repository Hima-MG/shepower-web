import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  SPEAKERS_HEADER,
  SPEAKERS_PLACEHOLDERS,
  SpeakerPlaceholderItem,
} from '../data/summitData';
import { EditorialImage } from './EditorialImage';
import { Reveal } from './Reveal';

interface SpeakersSectionProps {
  onSelectSpeaker: (speaker: SpeakerPlaceholderItem) => void;
  onExploreAllSpeakers: () => void;
}

const DESKTOP_PAGE_SIZE = 5;

export function SpeakersSection({
  onSelectSpeaker,
  onExploreAllSpeakers,
}: SpeakersSectionProps) {
  const [desktopPage, setDesktopPage] = useState(0);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  const totalPages = Math.ceil(SPEAKERS_PLACEHOLDERS.length / DESKTOP_PAGE_SIZE);
  const visibleDesktopSpeakers = SPEAKERS_PLACEHOLDERS.slice(
    desktopPage * DESKTOP_PAGE_SIZE,
    desktopPage * DESKTOP_PAGE_SIZE + DESKTOP_PAGE_SIZE
  );

  const handlePrev = () => {
    setDesktopPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    setDesktopPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    if (mobileTrackRef.current) {
      mobileTrackRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="speakers"
      className="bg-[#F7F4ED] text-[#193D66] py-20 sm:py-24 lg:py-32"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-14">
            <div className="max-w-2xl">
              <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-[#234B78] mb-3.5">
                {SPEAKERS_HEADER.kicker}
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.08] tracking-[-0.01em] text-[#193D66] text-balance">
                {SPEAKERS_HEADER.heading}
              </h2>
              <p className="font-prose text-[15px] sm:text-base leading-[1.7] text-[#526783] mt-4 max-w-xl">
                {SPEAKERS_HEADER.supportingText}
              </p>
            </div>

            {/* Slider Controls + Explore All Speakers */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous speakers"
                  className="w-11 h-11 border border-[#193D66]/25 hover:border-[#193D66] hover:bg-[#193D66] hover:text-[#F7F4ED] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
                >
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.6} />
                </button>
                <span className="hidden lg:inline-block font-ui text-[11px] font-medium tracking-[0.18em] text-[#526783] px-2 tabular-nums">
                  0{desktopPage + 1} / 0{totalPages}
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next speakers"
                  className="w-11 h-11 border border-[#193D66]/25 hover:border-[#193D66] hover:bg-[#193D66] hover:text-[#F7F4ED] flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
                >
                  <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </button>
              </div>

              <button
                type="button"
                onClick={onExploreAllSpeakers}
                className="inline-flex items-center gap-2.5 bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
              >
                <span>{SPEAKERS_HEADER.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Desktop 5-Card Grid View */}
        <Reveal delayMs={100}>
          <div className="hidden lg:grid lg:grid-cols-5 gap-6">
            {visibleDesktopSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                onSelect={() => onSelectSpeaker(speaker)}
              />
            ))}
          </div>

          {/* Mobile & Tablet Horizontal Slider */}
          <div
            ref={mobileTrackRef}
            className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 no-scrollbar"
          >
            {SPEAKERS_PLACEHOLDERS.map((speaker) => (
              <div
                key={speaker.id}
                className="shrink-0 w-[68vw] sm:w-[40vw] md:w-[30vw] snap-start"
              >
                <SpeakerCard speaker={speaker} onSelect={() => onSelectSpeaker(speaker)} />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 pt-6 border-t border-[#193D66]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="font-prose text-xs sm:text-sm text-[#526783]">
            {SPEAKERS_HEADER.note}
          </p>
          <div className="hidden lg:flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setDesktopPage(idx)}
                aria-label={`View speaker group ${idx + 1}`}
                className={`h-[2px] transition-all duration-300 cursor-pointer ${
                  desktopPage === idx ? 'w-10 bg-[#193D66]' : 'w-5 bg-[#193D66]/20 hover:bg-[#193D66]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SpeakerCardProps {
  speaker: SpeakerPlaceholderItem;
  onSelect: () => void;
}

function SpeakerCard({ speaker, onSelect }: SpeakerCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="group w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F4ED]"
    >
      <div className="relative overflow-hidden bg-[#E8D9C5]/40 aspect-[3/4]">
        <EditorialImage
          src={speaker.portrait}
          alt={`${speaker.name} — ${speaker.designation}`}
          fallbackTitle={speaker.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#193D66]/0 group-hover:bg-[#193D66]/10 transition-colors duration-300"
        />
      </div>

      <div className="pt-4">
        <p className="font-ui text-[10px] font-medium uppercase tracking-[0.18em] text-[#526783]">
          <span>{speaker.slotNumber}</span>
          <span aria-hidden="true" className="mx-1.5">·</span>
          <span>{speaker.category}</span>
        </p>

        <h3 className="font-editorial text-[23px] font-medium leading-[1.18] text-[#193D66] mt-1.5 group-hover:text-[#234B78] transition-colors">
          {speaker.name}
        </h3>

        <p className="font-prose text-xs font-medium text-[#234B78] mt-1">
          {speaker.designation}
        </p>

        <p className="font-prose text-xs text-[#526783] mt-0.5 truncate">
          {speaker.organisation}
        </p>
      </div>
    </button>
  );
}
