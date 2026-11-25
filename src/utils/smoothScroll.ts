import Lenis from 'lenis';

let activeLenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  activeLenis = instance;
}

export function getLenisInstance(): Lenis | null {
  return activeLenis;
}

const EDITORIAL_EASING = (t: number): number => {
  // Quartic ease-out for a composed, weighty deceleration
  return 1 - Math.pow(1 - t, 4);
};

export function scrollToTarget(target: string | number) {
  if (typeof window === 'undefined') return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (activeLenis && !prefersReducedMotion) {
    activeLenis.scrollTo(target, {
      duration: 1.35,
      easing: EDITORIAL_EASING,
    });
    return;
  }

  if (typeof target === 'number') {
    window.scrollTo({
      top: target,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    return;
  }

  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }
}
