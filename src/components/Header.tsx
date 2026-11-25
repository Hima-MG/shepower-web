import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/summitData';
import { getLenisInstance, scrollToTarget } from '../utils/smoothScroll';

interface HeaderProps {
  onOpenRegistration: (mode?: 'delegate' | 'partner') => void;
}

export function Header({ onOpenRegistration }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    const lenis = getLenisInstance();
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    scrollToTarget(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F4ED]/95 backdrop-blur-md border-b border-[#193D66]/12 text-[#193D66] py-3.5'
            : 'bg-transparent text-white py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget(0);
            }}
            className={`font-editorial text-[24px] sm:text-[26px] font-semibold tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isScrolled
                ? 'text-[#193D66] focus-visible:ring-[#193D66]'
                : 'text-white focus-visible:ring-white'
            }`}
          >
            SHE POWER
          </a>

          {/* Zone 2: Clean Centered Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`font-ui text-[11px] font-medium uppercase tracking-[0.16em] whitespace-nowrap shrink-0 relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  isScrolled
                    ? 'text-[#193D66]/85 hover:text-[#193D66] after:bg-[#193D66] focus-visible:ring-[#193D66]'
                    : 'text-white/90 hover:text-white after:bg-[#E8D9C5] focus-visible:ring-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenRegistration('delegate')}
              className={`hidden sm:inline-flex items-center justify-center font-ui text-[11px] font-semibold uppercase tracking-[0.15em] px-5 py-2.5 whitespace-nowrap shrink-0 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                isScrolled
                  ? 'bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] focus-visible:ring-[#193D66]'
                  : 'bg-[#F7F4ED] text-[#193D66] hover:bg-[#E8D9C5] focus-visible:ring-white'
              }`}
            >
              REGISTER INTEREST
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              className={`lg:hidden inline-flex items-center justify-center w-11 h-11 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 ${
                isScrolled
                  ? 'text-[#193D66] hover:bg-[#193D66]/8 focus-visible:ring-[#193D66]'
                  : 'text-white hover:bg-white/10 focus-visible:ring-white'
              }`}
            >
              <Menu className="w-6 h-6" strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-Out Navigation */}
      <div
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#193D66]/40 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-y-0 right-0 w-full max-w-sm bg-[#193D66] text-[#F7F4ED] flex flex-col justify-between p-6 sm:p-8 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/12 pb-5">
            <span className="font-editorial text-2xl font-semibold tracking-[0.06em] text-white">
              SHE POWER
            </span>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              className="inline-flex items-center justify-center w-11 h-11 text-white/85 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" strokeWidth={1.6} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 my-auto py-8" aria-label="Mobile links">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group flex items-baseline justify-between py-3.5 border-b border-white/10 text-[#F7F4ED] hover:text-[#E8D9C5] transition-colors"
              >
                <span className="font-editorial text-3xl font-normal tracking-wide">
                  {link.label}
                </span>
                <span className="font-ui text-[11px] tracking-[0.18em] text-[#A9C5DF] tabular-nums">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-4 border-t border-white/12">
            <p className="font-ui text-[11px] uppercase tracking-[0.18em] text-[#A9C5DF]">
              2027 Edition · Kochi, Kerala
            </p>
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenRegistration('delegate');
              }}
              className="w-full py-3.5 px-6 bg-[#F7F4ED] text-[#193D66] hover:bg-[#E8D9C5] font-ui text-xs font-semibold uppercase tracking-[0.16em] transition-colors cursor-pointer"
            >
              REGISTER INTEREST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
