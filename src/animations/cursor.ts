import gsap from 'gsap';

// Dot cursor that eases after the pointer and grows over interactive elements.
export function initCursor(): void {
  const cursor = document.getElementById('cursor');
  const label = document.getElementById('cursor-label');
  if (!cursor || !label) return;
  if (window.matchMedia('(hover: none)').matches) return;

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3.out' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3.out' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  document.querySelectorAll<HTMLElement>('a, button, [data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('is-hover');
      label.textContent = el.closest<HTMLElement>('[data-cursor]')?.dataset.cursor ?? '';
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-hover');
      label.textContent = '';
    });
  });
}
