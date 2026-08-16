import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Masked line reveals for everything outside the hero (hero is handled by the preloader timeline).
export function initReveals(): void {
  document.querySelectorAll<HTMLElement>('.mask .reveal').forEach((el) => {
    if (el.closest('.hero')) return;
    gsap.to(el, {
      yPercent: 0, // initial yPercent: 115 is applied via gsap.set in main.ts
      duration: 1.1,
      ease: 'power4.out',
      scrollTrigger: { trigger: el.closest('.mask'), start: 'top 88%' },
    });
  });

  // Experience rows
  gsap.utils.toArray<HTMLElement>('.row').forEach((row) => {
    gsap.from(row, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: row, start: 'top 92%' },
    });
  });
}

// Locomotive's signature: a giant paragraph whose words light up as you scroll through it.
//
// Safe to call again after the bio toggle swaps the copy: rebuilding the words
// throws away the spans the previous tween was driving, so the trigger that owns
// it has to go with them or it keeps scrubbing detached nodes.
export function initMissionReveal(): void {
  const text = document.getElementById('mission-text');
  if (!text) return;

  ScrollTrigger.getById('mission-reveal')?.kill();

  // Per paragraph, not per element: the long bio is a run of paragraphs whose
  // breaks carry the writing, and rewriting the container would flatten them.
  text.querySelectorAll('p').forEach((p) => {
    const words = (p.textContent ?? '').trim().split(/\s+/);
    p.innerHTML = words.map((w) => `<span class="w">${w}</span>`).join(' ');
  });

  gsap.to(text.querySelectorAll('.w'), {
    opacity: 1,
    stagger: 0.06,
    ease: 'none',
    scrollTrigger: {
      id: 'mission-reveal',
      trigger: text,
      start: 'top 75%',
      end: 'bottom 45%',
      scrub: 0.4,
    },
  });
}
