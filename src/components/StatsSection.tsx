import { STATS_HEADER, SUMMIT_STATS } from '../data/summitData';
import { Reveal } from './Reveal';

export function StatsSection() {
  return (
    <section id="stats" className="bg-[#F7F4ED] text-[#193D66] py-20 sm:py-24 lg:py-28">
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 sm:pb-14">
            <div className="lg:col-span-7">
              <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.2em] text-[#234B78] mb-3.5">
                {STATS_HEADER.kicker}
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.12] tracking-[-0.01em] text-[#193D66] text-balance">
                {STATS_HEADER.heading}
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-1">
              <p className="font-prose text-[15px] sm:text-base leading-[1.7] text-[#526783] max-w-lg">
                {STATS_HEADER.supportingText}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-[#193D66]/15">
            {SUMMIT_STATS.map((stat, index) => (
              <div
                key={stat.id}
                className={`py-8 sm:py-10 lg:py-12 ${
                  index % 2 === 0 ? 'pr-4 sm:pr-8' : 'pl-4 sm:pl-8 border-l border-[#193D66]/15'
                } ${
                  index >= 2 ? 'border-t lg:border-t-0 border-[#193D66]/15' : ''
                } lg:px-8 lg:first:pl-0 lg:last:pr-0 lg:border-l lg:first:border-l-0 lg:border-[#193D66]/15`}
              >
                <div className="font-editorial text-[44px] sm:text-[56px] lg:text-[64px] font-normal leading-none tracking-tight text-[#193D66] tabular-nums">
                  {stat.value}
                </div>
                <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78] mt-4">
                  {stat.label}
                </div>
                <p className="font-prose text-sm leading-[1.65] text-[#526783] mt-3 max-w-[26ch]">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
