import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initMissionReveal } from './reveals';

// Short / long switch for the About paragraph.
//
// `animated` is false under prefers-reduced-motion, where the word-by-word
// reveal never runs and the paragraph is plain text — the swap still has to
// work there, so this module is initialised in both branches.
export function initBioToggle(animated: boolean): void {
  const toggle = document.getElementById('bio-toggle');
  const text = document.getElementById('mission-text');
  const longTpl = document.getElementById('mission-long') as HTMLTemplateElement | null;
  if (!toggle || !text || !longTpl) return;

  const options = toggle.querySelectorAll<HTMLButtonElement>('.bio-toggle__opt');
  if (options.length !== 2) return;

  const section = toggle.closest<HTMLElement>('.mission');

  // Kept as nodes rather than strings: both versions are runs of <p>, and the
  // long bio's paragraph breaks are part of the writing — textContent would
  // flatten them into the single block this exists to avoid.
  //
  // Read before initMissionReveal rewrites the paragraphs into word spans. This
  // runs ahead of the preloader callback, so the copy is still intact here.
  const versions: Record<string, Element[]> = {
    short: [...text.children].map((c) => c.cloneNode(true) as Element),
    long: [...longTpl.content.children].map((c) => c.cloneNode(true) as Element),
  };

  let current = 'short';

  const select = (variant: string): void => {
    const nodes = versions[variant];
    if (variant === current || !nodes?.length) return;
    current = variant;

    // Clone again on every swap. What goes into the document gets rewritten
    // into word spans, so handing over the stored node would poison the copy.
    text.replaceChildren(...nodes.map((n) => n.cloneNode(true)));
    // The state lives on the section, not the toggle, so the CSS can reach both
    // the thumb and the paragraph by descent rather than by sibling order —
    // which would break the moment either one is wrapped or moved.
    section?.classList.toggle('is-long', variant === 'long');
    options.forEach((o) => o.setAttribute('aria-pressed', String(o.dataset.variant === variant)));

    if (animated) initMissionReveal();
    // The two versions are different heights, so every trigger below this
    // section — experience rows, gallery, the footer curtain — is now measuring
    // against a page that moved.
    ScrollTrigger.refresh();
  };

  options.forEach((o) => o.addEventListener('click', () => select(o.dataset.variant ?? '')));

  toggle.removeAttribute('hidden');
}
