import { ArrowDown, ArrowRight } from 'lucide-react';
import { HERO_CONTENT } from '../data/summitData';
import { scrollToTarget } from '../utils/smoothScroll';
import { EditorialImage } from './EditorialImage';

interface HeroSectionProps {
  onOpenPartnerInquiry: () => void;
}

export function HeroSection({ onOpenPartnerInquiry }: HeroSectionProps) {
  const handleExploreClick = () => {
    scrollToTarget('#about');
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-end lg:items-center pt-28 pb-16 sm:pb-20 lg:py-28 overflow-hidden bg-[#193D66]"
    >
      {/* Background Video or Cinematic Editorial Photograph */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {HERO_CONTENT.media.videoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_CONTENT.media.posterImage}
            className="w-full h-full object-cover object-[72%_20%] sm:object-right"
          >
            <source src={HERO_CONTENT.media.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <EditorialImage
            src={HERO_CONTENT.media.posterImage}
            alt={HERO_CONTENT.media.imageAlt}
            loading="eager"
            fallbackTitle="SHE POWER 2027"
            className="w-full h-full object-cover object-[76%_18%] sm:object-[70%_20%] lg:object-right animate-hero-cinematic"
          />
        )}

        {/* Measured Deep Navy Gradient Overlays for Contrast While Keeping Subject Prominent */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#193D66]/92 via-[#193D66]/55 to-[#193D66]/35 lg:bg-gradient-to-r lg:from-[#193D66]/92 lg:via-[#193D66]/58 lg:to-[#193D66]/10"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 bg-gradient-to-b from-[#193D66]/45 via-transparent to-[#193D66]/45"
        />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="font-ui text-[11px] sm:text-xs font-medium uppercase tracking-[0.22em] text-[#E9F2F9]/90 mb-5 sm:mb-6">
            {HERO_CONTENT.eyebrow}
          </p>

          <h1 className="font-editorial text-[clamp(3.35rem,7.2vw,6.25rem)] font-medium leading-[0.94] tracking-[0.02em] text-white text-balance">
            {HERO_CONTENT.headline}
          </h1>

          <p className="font-ui text-xs sm:text-sm font-medium uppercase tracking-[0.24em] text-[#E8D9C5] mt-5 sm:mt-6">
            {HERO_CONTENT.statement}
          </p>

          <p className="font-prose text-base sm:text-[17px] leading-[1.7] text-[#E9F2F9]/90 max-w-xl mt-5 sm:mt-6">
            {HERO_CONTENT.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center gap-2.5 bg-[#F7F4ED] text-[#193D66] hover:bg-[#E8D9C5] font-ui text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] px-6 sm:px-7 py-3.5 sm:py-4 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#193D66]"
            >
              <span>{HERO_CONTENT.primaryCta}</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
            </button>

            <button
              type="button"
              onClick={onOpenPartnerInquiry}
              className="inline-flex items-center justify-center border border-white/45 text-white hover:bg-white/10 hover:border-white font-ui text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] px-6 sm:px-7 py-3.5 sm:py-4 whitespace-nowrap shrink-0 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#193D66]"
            >
              {HERO_CONTENT.secondaryCta}
            </button>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#stats"
        onClick={(e) => {
          e.preventDefault();
          scrollToTarget('#stats');
        }}
        aria-label="Scroll to summit statistics"
        className="hidden sm:flex items-center gap-3 absolute bottom-8 left-5 sm:left-8 lg:left-12 z-10 text-white/75 hover:text-white transition-colors group"
      >
        <span className="w-8 h-8 border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">
          <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.5} />
        </span>
        <span className="font-ui text-[10px] uppercase tracking-[0.22em]">Scroll</span>
      </a>
    </section>
  );
}
