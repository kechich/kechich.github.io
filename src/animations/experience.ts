import type Lenis from 'lenis';
import { lockScroll } from './scroll-lock';

// Each experience row opens a detail card over a dimmed page. Built on a native
// <dialog> + showModal(), which gives focus trapping, Escape-to-close, focus
// restoration and the backdrop for free — all the parts a hand-rolled overlay
// tends to get wrong.
export function initExperience(lenis: Lenis | null): void {
  const modal = document.getElementById('exp-modal') as HTMLDialogElement | null;
  const triggers = document.querySelectorAll<HTMLButtonElement>('.row__trigger');
  if (!modal || !triggers.length) return;
  if (typeof modal.showModal !== 'function') return; // no <dialog> support: rows stay inert

  const titleEl = modal.querySelector<HTMLElement>('.modal__title');
  const orgEl = modal.querySelector<HTMLElement>('.modal__org');
  const dateEl = modal.querySelector<HTMLElement>('.modal__date');
  const bodyEl = modal.querySelector<HTMLElement>('.modal__body');
  const closeBtn = modal.querySelector<HTMLButtonElement>('.modal__close');

  const open = (trigger: HTMLButtonElement): void => {
    const row = trigger.closest('.row');
    if (!row) return;

    // Read straight off the row so the copy lives in exactly one place.
    if (titleEl) titleEl.innerHTML = row.querySelector('.row__title')?.innerHTML ?? '';
    if (orgEl) orgEl.textContent = row.querySelector('.row__org')?.textContent ?? '';
    if (dateEl) dateEl.textContent = row.querySelector('.row__date')?.textContent ?? '';

    if (bodyEl) {
      bodyEl.replaceChildren();
      const detail = row.querySelector<HTMLTemplateElement>('.row__detail');
      if (detail) bodyEl.append(detail.content.cloneNode(true));
    }

    modal.showModal();
    lockScroll(lenis, true);
  };

  // Idempotent, and called from every close path rather than only from the
  // 'close' event — releasing the scroll lock is not something to hang on a
  // single event firing. If it were missed the page would stay frozen.
  const dismiss = (): void => {
    if (modal.open) modal.close();
    lockScroll(lenis, false);
    bodyEl?.replaceChildren();
  };

  triggers.forEach((trigger) => trigger.addEventListener('click', () => open(trigger)));

  closeBtn?.addEventListener('click', dismiss);

  // A click that lands on the backdrop reports the dialog itself as its target.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) dismiss();
  });

  // Escape is handled by the browser: 'cancel' fires before it closes, 'close'
  // after. Both run the same cleanup, so either one alone is enough.
  modal.addEventListener('cancel', dismiss);
  modal.addEventListener('close', dismiss);
}
