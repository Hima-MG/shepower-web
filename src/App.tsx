import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { DrawerState, EditorialDrawer } from './components/EditorialDrawer';
import { FocusAreasSection } from './components/FocusAreasSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InterestModal } from './components/InterestModal';
import { LegacySection } from './components/LegacySection';
import { SpeakersSection } from './components/SpeakersSection';
import { StatsSection } from './components/StatsSection';
import { useKineticScroll } from './hooks/useKineticScroll';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'delegate' | 'partner'>('delegate');
  const [modalDomain, setModalDomain] = useState<string>('');
  const [drawerState, setDrawerState] = useState<DrawerState>({ type: 'closed' });

  useKineticScroll(modalOpen || drawerState.type !== 'closed');

  const handleOpenRegistration = (
    mode: 'delegate' | 'partner' = 'delegate',
    domain = ''
  ) => {
    setModalMode(mode);
    setModalDomain(domain);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#193D66] flex flex-col">
      <Header onOpenRegistration={handleOpenRegistration} />

      <main className="flex-1">
        <HeroSection
          onOpenPartnerInquiry={() => handleOpenRegistration('partner')}
        />

        <StatsSection />

        <AboutSection
          onDiscoverStory={() => setDrawerState({ type: 'story' })}
        />

        <FocusAreasSection
          onSelectArea={(area) => setDrawerState({ type: 'focus-single', area })}
          onViewAllAreas={() => setDrawerState({ type: 'focus-all' })}
        />

        <SpeakersSection
          onSelectSpeaker={(speaker) =>
            setDrawerState({ type: 'speaker-single', speaker })
          }
          onExploreAllSpeakers={() => setDrawerState({ type: 'speakers-all' })}
        />

        <LegacySection
          onSelectEdition={(edition) =>
            setDrawerState({ type: 'legacy-single', edition })
          }
          onExploreLegacy={() => setDrawerState({ type: 'legacy-all' })}
        />
      </main>

      <Footer onOpenRegistration={handleOpenRegistration} />

      <EditorialDrawer
        state={drawerState}
        onClose={() => setDrawerState({ type: 'closed' })}
        onChangeState={setDrawerState}
        onOpenRegistration={handleOpenRegistration}
      />

      <InterestModal
        isOpen={modalOpen}
        initialMode={modalMode}
        initialDomain={modalDomain}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
