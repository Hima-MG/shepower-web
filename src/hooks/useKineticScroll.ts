import { useEffect } from 'react';
import Lenis from 'lenis';
import { getLenisInstance, setLenisInstance } from '../utils/smoothScroll';

export function useKineticScroll(isLocked: boolean) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDesktopPointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!isDesktopPointer || prefersReducedMotion) {
      setLenisInstance(null);
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.068,
      wheelMultiplier: 0.9,
      allowNestedScroll: true,
      respectReducedMotion: true,
    });

    setLenisInstance(lenis);

    return () => {
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  useEffect(() => {
    const lenis = getLenisInstance();
    if (!lenis) return;

    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [isLocked]);
}
