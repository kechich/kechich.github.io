import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Pinned project wheel: the section sticks to the viewport and each card folds
// away as the next unfolds, while the copy beside it swaps.
//
// Modelled on the reference this was asked for, whose settled transform measures
// translateY(±662px) rotateX(∓96deg) scale(0.8). The translate is what matters:
// without it neighbours collapse into a sliver at the centre, with it they sit
// above and below and peek past the active card's edges.
const FOLD = 80; // degrees of fold one step away
const MIN_SCALE = 0.84; // neighbours shrink to this
// Far enough that a neighbour clears the active card's edge entirely and is then
// cropped by the viewport, rather than overlapping it — that separation is what
// reads as "the next one waiting" in the reference.
const SHIFT = 76; // yPercent one step away
// The shift keeps pushing past one step so distant cards clear the viewport,
// while the fold stops at one step so nothing ever turns past its own back.
const SPREAD = 1.6;

export function initProjects(): void {
  const section = document.getElementById('pw');
  const list = document.getElementById('pw-list');
  if (!section || !list) return;

  const items = gsap.utils.toArray<HTMLElement>('.pw__item', list);
  const faces = items.map((item) => item.querySelector<HTMLElement>('.pw__face'));
  const copies = items.map((item) => item.querySelector<HTMLElement>('.pw__copy'));
  const dots = gsap.utils.toArray<HTMLElement>('#pw-dots li');
  const videos = items.map((item) => item.querySelector<HTMLVideoElement>('.pw__video'));
  const count = items.length;
  if (count < 2) return;

  // Demo clips only ever play on the card in front, and rewind when they leave —
  // with preload="none" that also means nothing downloads until you reach them.
  const setPlayback = (i: number, on: boolean): void => {
    const video = videos[i];
    if (!video) return;
    const face = video.parentElement;

    if (!on) {
      video.pause();
      video.currentTime = 0;
      face?.classList.remove('is-playing');
      return;
    }

    const start = (): void => {
      // The clip may have finished loading after the user already scrolled past.
      if (active !== i) return;
      void video
        .play()
        .then(() => face?.classList.add('is-playing'))
        .catch(() => {
          /* refused — the still card is a fine fallback */
        });
    };

    // preload="none" means there is nothing buffered the first time round, and
    // calling play() against an empty buffer aborts. Load first, play on ready.
    if (video.readyState >= 2) start();
    else {
      video.addEventListener('canplay', start, { once: true });
      video.load();
    }
  };

  let active = -1;

  // p is the fractional active index, 0 through count-1.
  const render = (p: number): void => {
    items.forEach((item, i) => {
      const raw = i - p;
      const fold = gsap.utils.clamp(-1, 1, raw);
      const shift = gsap.utils.clamp(-SPREAD, SPREAD, raw);
      const away = Math.abs(fold);

      gsap.set(item, { zIndex: Math.round((1 - away) * 100) });
      gsap.set(faces[i], {
        yPercent: shift * SHIFT,
        rotateX: fold * FOLD,
        scale: 1 - away * (1 - MIN_SCALE),
      });
      // Copy fades faster than the card folds, so two blocks of text are never
      // legible over each other mid-transition.
      gsap.set(copies[i], { opacity: Math.max(0, 1 - away * 2.4), yPercent: fold * 10 });
    });

    dots.forEach((dot, i) => {
      const near = 1 - Math.min(1, Math.abs(i - p));
      gsap.set(dot, { opacity: 0.25 + near * 0.75, scale: 1 + near * 0.9 });
    });

    // Only the card in front stays focusable and clickable.
    const nearest = Math.round(p);
    if (nearest !== active) {
      active = nearest;
      items.forEach((item, i) => {
        const on = i === active;
        item.classList.toggle('is-active', on);
        item.toggleAttribute('inert', !on);
        setPlayback(i, on);
      });
    }
  };

  // Below 900px the CSS keeps the plain stacked list and nothing is pinned:
  // a viewport-height pin plus 3D transforms is a poor trade on a phone.
  const mm = gsap.matchMedia();

  mm.add('(min-width: 901px)', () => {
    section.classList.add('is-live');
    render(0);

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${(count - 1) * window.innerHeight * 0.85}`,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => render(self.progress * (count - 1)),
    });

    return () => {
      trigger.kill();
      section.classList.remove('is-live');
      active = -1;
      items.forEach((item, i) => {
        item.classList.remove('is-active');
        item.removeAttribute('inert');
        setPlayback(i, false);
      });
      gsap.set([...items, ...faces, ...copies, ...dots], { clearProps: 'all' });
    };
  });
}
