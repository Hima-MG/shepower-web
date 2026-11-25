import { FormEvent, useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { FOCUS_AREAS } from '../data/summitData';

interface InterestModalProps {
  isOpen: boolean;
  initialMode: 'delegate' | 'partner';
  initialDomain?: string;
  onClose: () => void;
}

export function InterestModal({
  isOpen,
  initialMode,
  initialDomain = '',
  onClose,
}: InterestModalProps) {
  const [mode, setMode] = useState<'delegate' | 'partner'>(initialMode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [organisation, setOrganisation] = useState('');
  const [city, setCity] = useState('Kochi');
  const [domain, setDomain] = useState(initialDomain || FOCUS_AREAS[0].title);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    if (initialDomain) {
      setDomain(initialDomain);
    }
    setError('');
    setSubmitted(false);
  }, [initialMode, initialDomain, isOpen]);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setError('Please enter your full name.');
      return;
    }
    if (!emailPattern.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (mode === 'partner' && !organisation.trim()) {
      setError('Please enter your organisation name for partnership inquiries.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setFullName('');
    setEmail('');
    setOrganisation('');
    setNotes('');
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="interest-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#193D66]/65 backdrop-blur-xs"
        onClick={handleResetAndClose}
      />

      <div
        data-lenis-prevent
        className="relative z-10 w-full max-w-xl bg-[#F7F4ED] text-[#193D66] border border-[#193D66]/15 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Top Bar */}
        <div className="flex items-start justify-between gap-4 px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-[#193D66]/12">
          <div>
            <p className="font-ui text-[10px] font-semibold uppercase tracking-[0.2em] text-[#234B78]">
              She Power 2027 · Kochi
            </p>
            <h2
              id="interest-modal-title"
              className="font-editorial text-3xl sm:text-4xl font-normal text-[#193D66] mt-1"
            >
              {mode === 'delegate' ? 'Register Your Interest' : 'Partner With She Power'}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close modal"
            className="w-10 h-10 flex items-center justify-center text-[#193D66]/70 hover:text-[#193D66] hover:bg-[#193D66]/8 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" strokeWidth={1.6} />
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6 sm:py-8">
          {submitted ? (
            <div className="py-4 space-y-5">
              <div className="w-12 h-12 bg-[#193D66] text-[#F7F4ED] flex items-center justify-center">
                <Check className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <div className="space-y-2">
                <h3 className="font-editorial text-3xl text-[#193D66]">
                  Thank you, {fullName.trim()}.
                </h3>
                <p className="font-prose text-sm sm:text-base leading-relaxed text-[#526783]">
                  Your {mode === 'delegate' ? 'delegate interest' : 'partnership inquiry'} for SHE
                  POWER 2027 in Kochi has been recorded. Our Channeliam secretariat will reach out
                  to <span className="text-[#193D66] font-medium">{email.trim()}</span> as early-wave
                  passes and curatorial briefs open.
                </p>
              </div>
              <div className="bg-[#E9F2F9] p-4 space-y-1 text-xs font-prose text-[#234B78]">
                <p>
                  <span className="font-semibold">Track Focus:</span> {domain}
                </p>
                {organisation.trim() ? (
                  <p>
                    <span className="font-semibold">Organisation:</span> {organisation.trim()}
                  </p>
                ) : null}
                <p>
                  <span className="font-semibold">City:</span> {city.trim() || 'Kochi'}
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-xs font-semibold uppercase tracking-[0.16em] px-6 py-3.5 transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Mode Selector */}
              <div className="grid grid-cols-2 border border-[#193D66]/20 bg-[#E9F2F9]/60 p-1">
                <button
                  type="button"
                  onClick={() => {
                    setMode('delegate');
                    setError('');
                  }}
                  className={`py-2.5 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    mode === 'delegate'
                      ? 'bg-[#193D66] text-[#F7F4ED]'
                      : 'text-[#526783] hover:text-[#193D66]'
                  }`}
                >
                  Delegate Interest
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMode('partner');
                    setError('');
                  }}
                  className={`py-2.5 font-ui text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
                    mode === 'partner'
                      ? 'bg-[#193D66] text-[#F7F4ED]'
                      : 'text-[#526783] hover:text-[#193D66]'
                  }`}
                >
                  Become a Partner
                </button>
              </div>

              {error ? (
                <div
                  role="alert"
                  className="border border-[#9A3412]/30 bg-[#9A3412]/8 px-4 py-3 font-prose text-xs sm:text-sm text-[#9A3412]"
                >
                  {error}
                </div>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sp-full-name"
                    className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="sp-full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] placeholder:text-[#526783]/50 focus:outline-none focus:border-[#193D66]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sp-email"
                    className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="sp-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] placeholder:text-[#526783]/50 focus:outline-none focus:border-[#193D66]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="sp-organisation"
                    className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                  >
                    {mode === 'partner' ? 'Organisation *' : 'Venture / Role (Optional)'}
                  </label>
                  <input
                    id="sp-organisation"
                    type="text"
                    required={mode === 'partner'}
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder={mode === 'partner' ? 'Company or institution' : 'Founder, creator, etc.'}
                    className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] placeholder:text-[#526783]/50 focus:outline-none focus:border-[#193D66]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sp-city"
                    className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                  >
                    City
                  </label>
                  <input
                    id="sp-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Kochi, Bengaluru, Mumbai..."
                    className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] placeholder:text-[#526783]/50 focus:outline-none focus:border-[#193D66]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sp-domain"
                  className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                >
                  Primary Focus Area
                </label>
                <select
                  id="sp-domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] focus:outline-none focus:border-[#193D66]"
                >
                  {FOCUS_AREAS.map((area) => (
                    <option key={area.id} value={area.title}>
                      {area.index} · {area.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="sp-notes"
                  className="block font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-[#234B78] mb-2"
                >
                  {mode === 'partner' ? 'Partnership Focus' : 'What brings you to She Power? (Optional)'}
                </label>
                <textarea
                  id="sp-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={
                    mode === 'partner'
                      ? 'Tell us about brand alignment, track patronage or institutional collaboration...'
                      : 'Share your background or the conversations you are keen to join...'
                  }
                  className="w-full bg-white border border-[#193D66]/20 px-3.5 py-2.5 font-prose text-sm text-[#193D66] placeholder:text-[#526783]/50 focus:outline-none focus:border-[#193D66] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <p className="font-prose text-xs text-[#526783]">
                  Curated by Channeliam · Kochi, Kerala
                </p>
                <button
                  type="submit"
                  className="bg-[#193D66] text-[#F7F4ED] hover:bg-[#234B78] font-ui text-[11px] font-semibold uppercase tracking-[0.16em] px-6 py-3.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer"
                >
                  {mode === 'delegate' ? 'Submit Interest' : 'Send Inquiry'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
