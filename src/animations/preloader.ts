import gsap from 'gsap';

// Counter runs 0 → 100, the dark panel lifts, then hero content reveals.
export function initPreloader(onComplete: () => void): void {
  const preloader = document.getElementById('preloader');
  const count = document.getElementById('preloader-count');
  if (!preloader || !count) {
    onComplete();
    return;
  }

  document.body.style.overflow = 'hidden';

  const counter = { value: 0 };
  const tl = gsap.timeline({
    onComplete: () => {
      preloader.remove();
      document.body.style.overflow = '';
      onComplete();
    },
  });

  tl.to(counter, {
    value: 100,
    duration: 1.6,
    ease: 'power2.inOut',
    onUpdate: () => (count.textContent = String(Math.round(counter.value))),
  })
    .to(preloader, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '+=0.15')
    .fromTo(
      '.hero__bg',
      { scale: 1.25 },
      { scale: 1.1, duration: 1.6, ease: 'power3.out' },
      '-=0.5',
    )
    .to(
      '.hero .reveal',
      { yPercent: 0, duration: 1.1, ease: 'power4.out', stagger: 0.12 },
      '-=1.3',
    );
}
