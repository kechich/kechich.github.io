import type Lenis from 'lenis';
import { lockScroll } from './scroll-lock';

// Mobile navigation. Below 760px the header nav and CTA are hidden, so without
// this the only reachable link on a phone is the one in the header — on a page
// ~9,000px tall.
//
// Built on the same native <dialog> + showModal() as the experience modal:
// focus trapping, Escape and focus restoration come free and correct.
export function initMenu(lenis: Lenis | null): void {
  const menu = document.getElementById('nav-menu') as HTMLDialogElement | null;
  const button = document.getElementById('menu-button') as HTMLButtonElement | null;
  if (!menu || !button) return;
  if (typeof menu.showModal !== 'function') return; // no <dialog>: header links stay as they are

  const closeBtn = menu.querySelector<HTMLButtonElement>('.nav-menu__close');

  const open = (): void => {
    menu.showModal();
    button.setAttribute('aria-expanded', 'true');
    lockScroll(lenis, true);
  };

  // Idempotent, and called from every close path — see experience.ts. Releasing
  // the scroll lock is not something to hang on one event firing.
  const dismiss = (): void => {
    if (menu.open) menu.close();
    button.setAttribute('aria-expanded', 'false');
    lockScroll(lenis, false);
  };

  button.addEventListener('click', open);
  closeBtn?.addEventListener('click', dismiss);
  menu.addEventListener('cancel', dismiss);
  menu.addEventListener('close', dismiss);

  // CAPTURE phase, deliberately. Lenis.scrollTo bails out while stopped:
  //
  //   if ((this.isStopped || this.isLocked) && !force) return
  //
  // The anchors carry their own [data-scroll-link] handler from main.ts. If this
  // ran on bubble it would fire *after* that handler, so the scroll would be
  // requested while Lenis was still stopped and silently do nothing — the menu
  // would close and the page would never move. Capturing runs it first, so Lenis
  // is live again by the time the link asks to scroll.
  menu.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement;
      if (target === menu || target.closest('a')) dismiss(); // backdrop, or a link
    },
    true,
  );
}
