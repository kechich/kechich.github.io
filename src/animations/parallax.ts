import gsap from 'gsap';

// Media marked [data-parallax] drifts vertically inside its overflow-hidden mask.
// Images are pre-scaled (1.08–1.15) in CSS so edges never show.
export function initParallax(): void {
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  });
}
