import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { FOOTER_CONTENT, NAV_LINKS } from '../data/summitData';
import { scrollToTarget } from '../utils/smoothScroll';

interface FooterProps {
  onOpenRegistration: (mode?: 'delegate' | 'partner') => void;
}

export function Footer({ onOpenRegistration }: FooterProps) {
  const handleNavClick = (href: string) => {
    scrollToTarget(href);
  };

  return (
    <footer
      id="contact"
      className="bg-[#F7F4ED] text-[#193D66] border-t border-[#193D66]/12 pt-16 sm:pt-20 pb-10"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#193D66]/15">
          {/* Col 1: Brand & Summit Statement */}
          <div className="md:col-span-5 space-y-4">
            <p className="font-editorial text-3xl sm:text-4xl font-semibold tracking-[0.05em] text-[#193D66]">
              {FOOTER_CONTENT.brand}
            </p>
            <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.22em] text-[#234B78]">
              {FOOTER_CONTENT.motto}
            </p>
            <p className="font-prose text-sm leading-[1.7] text-[#526783] max-w-sm pt-1">
              {FOOTER_CONTENT.editionLine}. {FOOTER_CONTENT.organiser}.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenRegistration('delegate')}
                className="inline-flex items-center gap-2 bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={() => onOpenRegistration('partner')}
                className="inline-flex items-center border border-[#193D66]/30 hover:border-[#193D66] text-[#193D66] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-5 py-3 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#193D66]"
              >
                Become a Partner
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3">
            <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78] mb-5">
              Summit Sections
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.filter((l) => l.href !== '#contact').map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-prose text-sm text-[#526783] hover:text-[#193D66] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Venue */}
          <div className="md:col-span-4 space-y-4">
            <p className="font-ui text-[11px] font-semibold uppercase tracking-[0.18em] text-[#234B78] mb-5">
              Summit Secretariat
            </p>
            <div className="space-y-3.5 font-prose text-sm text-[#526783]">
              <a
                href={`mailto:${FOOTER_CONTENT.contactEmail}`}
                className="flex items-center gap-3 hover:text-[#193D66] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#234B78] shrink-0" strokeWidth={1.6} />
                <span>Delegate Desk: {FOOTER_CONTENT.contactEmail}</span>
              </a>
              <a
                href={`mailto:${FOOTER_CONTENT.partnerEmail}`}
                className="flex items-center gap-3 hover:text-[#193D66] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#234B78] shrink-0" strokeWidth={1.6} />
                <span>Partnerships: {FOOTER_CONTENT.partnerEmail}</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#234B78] shrink-0" strokeWidth={1.6} />
                <span>{FOOTER_CONTENT.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-prose text-xs text-[#526783]">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p className="font-ui text-[10px] uppercase tracking-[0.18em] text-[#234B78]">
            {FOOTER_CONTENT.organiser}
          </p>
        </div>
      </div>
    </footer>
  );
}
