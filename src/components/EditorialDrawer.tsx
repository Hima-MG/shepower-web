import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import {
  ABOUT_CONTENT,
  FOCUS_AREAS,
  FocusAreaItem,
  LEGACY_EDITIONS,
  LegacyEditionItem,
  SPEAKERS_PLACEHOLDERS,
  SpeakerPlaceholderItem,
} from '../data/summitData';
import { EditorialImage } from './EditorialImage';

export type DrawerState =
  | { type: 'closed' }
  | { type: 'story' }
  | { type: 'focus-single'; area: FocusAreaItem }
  | { type: 'focus-all' }
  | { type: 'speaker-single'; speaker: SpeakerPlaceholderItem }
  | { type: 'speakers-all' }
  | { type: 'legacy-single'; edition: LegacyEditionItem }
  | { type: 'legacy-all' };

interface EditorialDrawerProps {
  state: DrawerState;
  onClose: () => void;
  onChangeState: (next: DrawerState) => void;
  onOpenRegistration: (mode: 'delegate' | 'partner', domain?: string) => void;
}

export function EditorialDrawer({
  state,
  onClose,
  onChangeState,
  onOpenRegistration,
}: EditorialDrawerProps) {
  const [speakerCategoryFilter, setSpeakerCategoryFilter] = useState<string>('All');

  const isOpen = state.type !== 'closed';

  useEffect(() => {
    if (state.type === 'speakers-all') {
      setSpeakerCategoryFilter('All');
    }
  }, [state.type]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const speakerCategories = [
    'All',
    ...Array.from(new Set(SPEAKERS_PLACEHOLDERS.map((s) => s.category))),
  ];
  const filteredSpeakers =
    speakerCategoryFilter === 'All'
      ? SPEAKERS_PLACEHOLDERS
      : SPEAKERS_PLACEHOLDERS.filter((s) => s.category === speakerCategoryFilter);

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Summit Editorial Details"
    >
      <div
        className="absolute inset-0 bg-[#193D66]/55 backdrop-blur-xs"
        onClick={onClose}
      />

      <aside
        data-lenis-prevent
        className="relative z-10 w-full max-w-2xl bg-[#F7F4ED] text-[#193D66] h-full overflow-y-auto shadow-2xl border-l border-[#193D66]/15 flex flex-col"
      >
        {/* Sticky Drawer Top Bar */}
        <div className="sticky top-0 z-20 bg-[#F7F4ED]/95 backdrop-blur-md border-b border-[#193D66]/12 px-6 sm:px-8 py-5 flex items-center justify-between gap-4">
          <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78]">
            {state.type === 'story' && '01 — Channeliam Story'}
            {state.type === 'focus-single' && `Focus Domain · ${state.area.index}`}
            {state.type === 'focus-all' && '02 — All 08 Leadership Domains'}
            {state.type === 'speaker-single' && `Speaker Preview · ${state.speaker.slotNumber}`}
            {state.type === 'speakers-all' && '03 — 2027 Speaker Roster Preview'}
            {state.type === 'legacy-single' && `Legacy Archive · ${state.edition.editionNumber}`}
            {state.type === 'legacy-all' && '04 — Four Editions of She Power'}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="w-10 h-10 flex items-center justify-center text-[#193D66]/75 hover:text-[#193D66] hover:bg-[#193D66]/8 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" strokeWidth={1.6} />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 flex-1">
          {state.type === 'story' && (
            <div className="space-y-8">
              <div>
                <h2 className="font-editorial text-4xl sm:text-[44px] font-normal leading-[1.08] text-[#193D66]">
                  {ABOUT_CONTENT.storyModal.title}
                </h2>
                <p className="font-ui text-xs uppercase tracking-[0.16em] text-[#234B78] mt-3">
                  {ABOUT_CONTENT.storyModal.subtitle}
                </p>
              </div>

              <div className="overflow-hidden aspect-[4/3] bg-[#E8D9C5]/40">
                <EditorialImage
                  src={ABOUT_CONTENT.image}
                  alt={ABOUT_CONTENT.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 font-prose text-[15px] leading-[1.75] text-[#526783]">
                {ABOUT_CONTENT.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="border-t border-[#193D66]/15 pt-6 space-y-6">
                {ABOUT_CONTENT.storyModal.pillars.map((pillar, idx) => (
                  <div key={pillar.title} className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4">
                    <div className="sm:col-span-4 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-[#193D66]">
                      0{idx + 1}. {pillar.title}
                    </div>
                    <p className="sm:col-span-8 font-prose text-sm leading-[1.7] text-[#526783]">
                      {pillar.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenRegistration('delegate');
                  }}
                  className="inline-flex items-center gap-2.5 bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors cursor-pointer"
                >
                  <span>Register Interest for 2027</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </button>
              </div>
            </div>
          )}

          {state.type === 'focus-single' && (
            <div className="space-y-7">
              <div className="overflow-hidden aspect-[4/3] bg-[#193D66]">
                <EditorialImage
                  src={state.area.image}
                  alt={state.area.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78]">
                  {state.area.shortTag} · {state.area.sessionFormat}
                </p>
                <h2 className="font-editorial text-4xl font-normal leading-[1.1] text-[#193D66] mt-2">
                  {state.area.title}
                </h2>
              </div>

              <p className="font-prose text-base leading-[1.75] text-[#526783]">
                {state.area.summary}
              </p>

              <div className="border-t border-[#193D66]/15 pt-6">
                <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#193D66] mb-4">
                  Curated Conversation Themes
                </h3>
                <ul className="space-y-3">
                  {state.area.keyThemes.map((theme, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-3 font-prose text-sm leading-relaxed text-[#526783] pb-3 border-b border-[#193D66]/10 last:border-b-0"
                    >
                      <span className="font-ui text-[10px] font-semibold text-[#234B78] tabular-nums">
                        0{idx + 1}
                      </span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const domainTitle = state.area.title;
                    onClose();
                    onOpenRegistration('delegate', domainTitle);
                  }}
                  className="inline-flex items-center gap-2 bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors cursor-pointer"
                >
                  <span>Join This Domain</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
                </button>
                <button
                  type="button"
                  onClick={() => onChangeState({ type: 'focus-all' })}
                  className="border border-[#193D66]/25 hover:border-[#193D66] text-[#193D66] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors cursor-pointer"
                >
                  All 08 Domains
                </button>
              </div>
            </div>
          )}

          {state.type === 'focus-all' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-4xl font-normal text-[#193D66]">
                  Eight Leadership Domains
                </h2>
                <p className="font-prose text-sm leading-[1.7] text-[#526783] mt-2">
                  Select any domain below to view session formats and curatorial themes for Kochi 2027.
                </p>
              </div>

              <div className="divide-y divide-[#193D66]/12 border-y border-[#193D66]/15">
                {FOCUS_AREAS.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => onChangeState({ type: 'focus-single', area })}
                    className="w-full py-4 text-left flex items-center gap-4 group hover:bg-[#E9F2F9]/60 px-2 transition-colors cursor-pointer"
                  >
                    <div className="w-20 h-16 shrink-0 overflow-hidden bg-[#193D66]">
                      <EditorialImage
                        src={area.image}
                        alt={area.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-ui text-[10px] font-medium uppercase tracking-[0.18em] text-[#234B78]">
                        {area.index} · {area.shortTag}
                      </p>
                      <h3 className="font-editorial text-2xl text-[#193D66] group-hover:text-[#234B78] truncate">
                        {area.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#193D66]/60 group-hover:translate-x-1 transition-transform shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.type === 'speaker-single' && (
            <div className="space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
                <div className="sm:col-span-5 aspect-[3/4] overflow-hidden bg-[#E8D9C5]/40">
                  <EditorialImage
                    src={state.speaker.portrait}
                    alt={state.speaker.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="sm:col-span-7 space-y-3">
                  <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-[#234B78]">
                    {state.speaker.slotNumber} · {state.speaker.category}
                  </p>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#193D66]">
                    {state.speaker.name}
                  </h2>
                  <p className="font-prose text-sm font-medium text-[#234B78]">
                    {state.speaker.designation}
                  </p>
                  <p className="font-prose text-sm text-[#526783]">
                    {state.speaker.organisation}
                  </p>
                  <div className="pt-3 border-t border-[#193D66]/12">
                    <p className="font-prose text-sm leading-[1.7] text-[#526783]">
                      {state.speaker.bioPlaceholder}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#E9F2F9] p-5 font-prose text-xs sm:text-sm text-[#234B78]">
                Official 2027 speaker identities and session schedules are released progressively by
                the Channeliam editorial desk.
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onChangeState({ type: 'speakers-all' })}
                  className="bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors cursor-pointer"
                >
                  View Speaker Roster Preview
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenRegistration('delegate');
                  }}
                  className="border border-[#193D66]/25 hover:border-[#193D66] text-[#193D66] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3.5 transition-colors cursor-pointer"
                >
                  Get Speaker Alerts
                </button>
              </div>
            </div>
          )}

          {state.type === 'speakers-all' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-editorial text-4xl font-normal text-[#193D66]">
                  Voices of She Power 2027
                </h2>
                <p className="font-prose text-sm leading-[1.7] text-[#526783] mt-2">
                  Previewing 10 of 20+ planned speaker slots across sectors. Official speaker names
                  will replace these placeholders as confirmations are announced.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pb-2">
                {speakerCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSpeakerCategoryFilter(cat)}
                    className={`px-3 py-1.5 font-ui text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                      speakerCategoryFilter === cat
                        ? 'bg-[#193D66] text-[#F7F4ED]'
                        : 'bg-[#E9F2F9] text-[#234B78] hover:bg-[#A9C5DF]/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredSpeakers.map((sp) => (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => onChangeState({ type: 'speaker-single', speaker: sp })}
                    className="flex items-start gap-4 p-3 border border-[#193D66]/12 bg-white/70 hover:border-[#193D66]/40 text-left transition-colors cursor-pointer"
                  >
                    <div className="w-16 aspect-[3/4] shrink-0 overflow-hidden bg-[#E8D9C5]/40">
                      <EditorialImage
                        src={sp.portrait}
                        alt={sp.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-ui text-[10px] uppercase tracking-[0.16em] text-[#526783]">
                        {sp.slotNumber}
                      </p>
                      <h3 className="font-editorial text-xl text-[#193D66] mt-0.5">{sp.name}</h3>
                      <p className="font-prose text-xs text-[#234B78]">{sp.designation}</p>
                      <p className="font-prose text-xs text-[#526783] mt-0.5 truncate">
                        {sp.category}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {state.type === 'legacy-single' && (
            <div className="space-y-7">
              <div className="overflow-hidden aspect-[4/3] bg-[#193D66]">
                <EditorialImage
                  src={state.edition.image}
                  alt={state.edition.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78]">
                  {state.edition.editionNumber} · {state.edition.location}
                </p>
                <h2 className="font-editorial text-4xl font-normal text-[#193D66] mt-2">
                  {state.edition.title}
                </h2>
              </div>

              <p className="font-prose text-base leading-[1.75] text-[#526783]">
                {state.edition.summary}
              </p>

              <div className="border-t border-[#193D66]/15 pt-5">
                <h3 className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#193D66] mb-3">
                  Edition Milestones
                </h3>
                <ul className="space-y-2.5">
                  {state.edition.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-baseline gap-3 font-prose text-sm text-[#526783]"
                    >
                      <span className="font-ui text-[10px] font-semibold text-[#234B78]">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onChangeState({ type: 'legacy-all' })}
                className="border border-[#193D66]/30 hover:border-[#193D66] text-[#193D66] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3 transition-colors cursor-pointer"
              >
                Explore All 04 Past Editions
              </button>
            </div>
          )}

          {state.type === 'legacy-all' && (
            <div className="space-y-7">
              <div>
                <h2 className="font-editorial text-4xl font-normal text-[#193D66]">
                  Four Editions. A Growing Movement.
                </h2>
                <p className="font-prose text-sm leading-[1.7] text-[#526783] mt-2">
                  Tracing She Power’s journey across Kochi — from an intimate thirty-person circle
                  to the upcoming 5th edition in 2027.
                </p>
              </div>

              <div className="space-y-6">
                {LEGACY_EDITIONS.map((edition) => (
                  <button
                    key={edition.id}
                    type="button"
                    onClick={() => onChangeState({ type: 'legacy-single', edition })}
                    className="w-full text-left grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-[#193D66]/12 group cursor-pointer"
                  >
                    <div className="sm:col-span-5 aspect-[4/3] overflow-hidden bg-[#193D66]">
                      <EditorialImage
                        src={edition.image}
                        alt={edition.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <div className="sm:col-span-7 flex flex-col justify-center">
                      <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.18em] text-[#234B78]">
                        {edition.editionNumber} · {edition.location}
                      </p>
                      <h3 className="font-editorial text-2xl text-[#193D66] mt-1 group-hover:text-[#234B78]">
                        {edition.title}
                      </h3>
                      <p className="font-prose text-sm leading-relaxed text-[#526783] mt-2">
                        {edition.summary}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
