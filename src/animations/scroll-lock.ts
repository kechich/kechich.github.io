import type Lenis from 'lenis';

// Shared by every full-screen overlay (experience modal, mobile menu). Two
// copies of this that must agree is exactly the kind of thing that drifts, and
// getting it wrong leaves the page permanently frozen.
//
// Always release it from an idempotent dismiss called on every close path —
// never hang it on a single event firing.
export function lockScroll(lenis: Lenis | null, locked: boolean): void {
  // Lenis keeps its RAF loop running behind an overlay unless told to stop;
  // without a Lenis instance the native scroll needs pinning instead.
  if (lenis) locked ? lenis.stop() : lenis.start();
  else document.documentElement.style.overflow = locked ? 'hidden' : '';
}
