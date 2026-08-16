import './styles/main.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initPreloader } from './animations/preloader';
import { initReveals, initMissionReveal } from './animations/reveals';
import { initParallax } from './animations/parallax';
import { initProjects } from './animations/projects';
import { initGallery } from './animations/gallery';
import { initCursor } from './animations/cursor';
import { initHeader } from './animations/header';
import { initExperience } from './animations/experience';
import { initBioToggle } from './animations/bio';
import { initMenu } from './animations/menu';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

if (!reducedMotion) {
  lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// Anchor navigation through Lenis
document.querySelectorAll<HTMLAnchorElement>('[data-scroll-link]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = link.getAttribute('href');
    if (!target || !target.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(target === '#top' ? 'body' : target);
    if (!el) return;
    // Negative offset lands the section below the fixed header rather than under it.
    if (lenis) lenis.scrollTo(el as HTMLElement, { offset: target === '#top' ? 0 : -96, duration: 1.4 });
    else (el as HTMLElement).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form → Web3Forms.
//
// The rule here is that nothing may report success it did not get: the previous
// version showed a thank-you without transmitting anything, which silently drops
// real messages. Every branch below either delivers or says plainly that it did
// not, including the case where the access key has not been pasted in yet.
const CONTACT_EMAIL = 'kechiche579@gmail.com';
const UNSET_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const form = document.getElementById('contact-form') as HTMLFormElement | null;
const status = document.getElementById('form-status');

if (form && status) {
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  const say = (message: string, state: 'ok' | 'error'): void => {
    status.textContent = message;
    status.dataset.state = state;
    status.removeAttribute('hidden');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const key = String(data.get('access_key') ?? '');

    // Not configured: hand the message to a mail client rather than swallow it.
    if (!key || key === UNSET_KEY) {
      const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
      say('Opening your email app…', 'ok');
      window.location.href =
        `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Message from kechiche.dev')}` +
        `&body=${encodeURIComponent(body)}`;
      return;
    }

    const label = button?.textContent ?? 'Send →';
    if (button) {
      button.disabled = true;
      button.textContent = 'Sending…';
    }

    void fetch(form.action, { method: 'POST', body: data })
      .then(async (res) => {
        const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
        if (!res.ok || !json.success) throw new Error(json.message ?? res.statusText);
        form.querySelectorAll<HTMLElement>('label, button').forEach((el) => (el.style.display = 'none'));
        say("Thanks for reaching out — I'll get back to you soon.", 'ok');
      })
      .catch(() => {
        say(`That didn't send. Please email me directly at ${CONTACT_EMAIL}.`, 'error');
        if (button) {
          button.disabled = false;
          button.textContent = label;
        }
      });
  });
}

initCursor();
initHeader(lenis);
initExperience(lenis);
initMenu(lenis);
// Before the preloader callback, so it captures the short copy while the
// paragraph is still plain text rather than word spans.
initBioToggle(!reducedMotion);

if (reducedMotion) {
  document.getElementById('preloader')?.remove();
  document.documentElement.classList.add('reduced-motion');
} else {
  // Initial hidden state for all masked lines; the preloader covers the page while this applies.
  gsap.set('.mask .reveal', { yPercent: 115 });
  initPreloader(() => {
    initReveals();
    initMissionReveal();
    initParallax();
    initProjects();
    initGallery();
    ScrollTrigger.refresh();
  });
}
