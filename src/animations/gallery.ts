import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Horizontal strip that scrolls within the vertical scroll: the section pins
// while the track translates left by its overflow width.
export function initGallery(): void {
  const pin = document.querySelector<HTMLElement>('.gallery__pin');
  const track = document.getElementById('gallery-track');
  if (!pin || !track) return;

  const distance = () => track.scrollWidth - window.innerWidth;

  // Desktop only, matching initProjects. On a phone this would pin the section
  // and remap ~1,700px of vertical scrolling into horizontal movement — and
  // pinning is the most fragile thing on iOS Safari, where the collapsing
  // address bar resizes the viewport mid-scroll. Below 901px the CSS turns the
  // strip into a native horizontal scroller instead, which is what a thumb
  // expects anyway.
  const mm = gsap.matchMedia();

  mm.add('(min-width: 901px)', () => {
    const trigger = ScrollTrigger.create({
      trigger: pin,
      start: 'top top',
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      animation: gsap.to(track, { x: () => -distance(), ease: 'none' }),
    });

    return () => {
      trigger.kill();
      gsap.set(track, { clearProps: 'all' });
    };
  });

  ScrollTrigger.addEventListener('refreshInit', () => gsap.set(track, { x: 0 }));
}
