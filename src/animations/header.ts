import type Lenis from 'lenis';

// Header hides while scrolling down and returns on scroll up, and flips from
// white to deep ink as it leaves the hero photo. That colour swap replaces the
// old mix-blend-mode trick, which would have inverted the clay CTA.
export function initHeader(lenis: Lenis | null): void {
  const header = document.getElementById('header');
  if (!header) return;

  const hero = document.querySelector<HTMLElement>('.hero');

  // Measured up front so the scroll handler never reads layout.
  let heroLimit = 0;
  const measure = () => {
    heroLimit = hero ? hero.offsetHeight - header.offsetHeight - 8 : 0;
  };
  measure();
  window.addEventListener('resize', measure);

  let lastY = 0;
  const onScroll = (y: number) => {
    if (y > lastY && y > 120) header.classList.add('is-hidden');
    else header.classList.remove('is-hidden');
    if (hero) header.classList.toggle('is-over-hero', y < heroLimit);
    lastY = y;
  };

  if (lenis) {
    lenis.on('scroll', ({ scroll }: { scroll: number }) => onScroll(scroll));
  } else {
    window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
  }
}
