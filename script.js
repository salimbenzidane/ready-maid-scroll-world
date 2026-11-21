// READY MAID RESPONSIVE HOMEPAGE — Meet DUKE locked production baseline
'use strict';

// Measure a Ready Maid WhatsApp link selection. This records a click only;
// it cannot confirm that WhatsApp opened or that a message was sent/received.
(() => {
  const measurementId = 'G-80EJ9M4TG3';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  if (!document.querySelector('[data-readymaid-ga4]')) {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    tag.dataset.readymaidGa4 = 'true';
    document.head.appendChild(tag);
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    const link = target instanceof Element ? target.closest('a[href]') : null;
    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    const isReadymaidWaMe = destination.hostname === 'wa.me'
      && destination.pathname.replace(/^\/+/, '').split('/')[0] === '60123790677';
    const isReadymaidApi = destination.hostname === 'api.whatsapp.com'
      && destination.searchParams.get('phone') === '60123790677';
    if (!isReadymaidWaMe && !isReadymaidApi) return;

    const linkLocation = link.matches('.floating-whatsapp') ? 'floating'
      : link.closest('.mobile-sticky-cta') ? 'mobile_sticky'
        : link.closest('header, nav') ? 'header'
          : link.closest('footer') ? 'footer'
            : 'content';
    const linkText = (link.getAttribute('aria-label') || link.textContent || 'WhatsApp')
      .replace(/\s+/g, ' ').trim().slice(0, 80);

    window.gtag('event', 'whatsapp_click', {
      link_url: `${destination.origin}${destination.pathname}`,
      link_text: linkText,
      link_location: linkLocation
    });
  }, true);
})();

// P0 COMPLIANCE LINKS — execute first, before any optional homepage behavior.
(() => {
  const quickLinks = [...document.querySelectorAll('.site-footer .footer-column')]
    .find((column) => column.querySelector('h2')?.textContent.trim() === 'QUICK LINKS');
  if (quickLinks) {
    [
      ['/refund-policy/', 'Refund Policy'],
      ['/fees-payment-replacement-policy/', 'Fees & Payment Policy']
    ].forEach(([href, label]) => {
      if (!quickLinks.querySelector(`a[href="${href}"]`)) {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        link.setAttribute('data-compliance-link', 'true');
        quickLinks.appendChild(link);
      }
    });
  }

  const legalLinks = document.querySelector('.site-footer .footer-bottom-row > div');
  if (legalLinks) {
    [
      ['/refund-policy/', 'Refund Policy'],
      ['/fees-payment-replacement-policy/', 'Fees & Payment']
    ].forEach(([href, label]) => {
      if (!legalLinks.querySelector(`a[href="${href}"]`)) {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        link.setAttribute('data-compliance-link', 'true');
        legalLinks.appendChild(link);
      }
    });
  }
})();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const navLinks = [...document.querySelectorAll('.desktop-nav a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if ('IntersectionObserver' in window) {
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${visible.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-32% 0px -58% 0px', threshold: [0.05, 0.2, 0.5] });
  sections.forEach((section) => navObserver.observe(section));
}

// MOBILE NAVIGATION
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
if (menuToggle && primaryNav) {
  const closeMenu = ({ returnFocus = false } = {}) => {
    primaryNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) menuToggle.focus();
  };
  menuToggle.addEventListener('click', () => {
    const open = !primaryNav.classList.contains('open');
    primaryNav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (open) primaryNav.querySelector('a')?.focus();
  });
  primaryNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && primaryNav.classList.contains('open')) closeMenu({ returnFocus: true });
  });
  const desktopQuery = window.matchMedia('(min-width: 1280px)');
  const handleDesktop = (event) => { if (event.matches) closeMenu(); };
  desktopQuery.addEventListener?.('change', handleDesktop);
}

// RESTRAINED SCROLL REVEAL
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const revealItems = document.querySelectorAll('.panel, .trust-strip, .contact-cta');
  revealItems.forEach((item) => item.classList.add('reveal-ready'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px' });
  revealItems.forEach((item) => revealObserver.observe(item));
}

// MEET DUKE — locked six-video modal player
const dukeModal = document.querySelector('.duke-video-modal');
const dukeVideo = dukeModal?.querySelector('video');
const dukeModalTitle = dukeModal?.querySelector('#duke-modal-title');
const dukeVideoError = dukeModal?.querySelector('.duke-video-error');
const dukeOpeners = [...document.querySelectorAll('.duke-video-open')];
let lastDukeTrigger = null;

const closeDukeVideo = () => {
  if (!dukeModal || !dukeVideo) return;
  dukeVideo.pause();
  dukeVideo.removeAttribute('src');
  dukeVideo.load();
  dukeModal.hidden = true;
  dukeModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('video-modal-open');
  if (dukeVideoError) dukeVideoError.hidden = true;
  lastDukeTrigger?.focus();
};

if (dukeModal && dukeVideo && dukeOpeners.length) {
  dukeOpeners.forEach((opener) => {
    opener.addEventListener('click', (event) => {
      event.preventDefault();
      const src = opener.dataset.videoSrc || opener.getAttribute('href');
      if (!src) return;
      lastDukeTrigger = opener;
      if (dukeModalTitle) dukeModalTitle.textContent = opener.dataset.videoTitle || 'Meet DUKE';
      if (dukeVideoError) dukeVideoError.hidden = true;
      dukeVideo.src = src;
      dukeModal.hidden = false;
      dukeModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('video-modal-open');
      dukeVideo.load();
      dukeVideo.play().catch(() => {});
    });
  });
  dukeModal.querySelectorAll('[data-video-close]').forEach((control) => control.addEventListener('click', closeDukeVideo));
  dukeVideo.addEventListener('error', () => { if (dukeVideoError) dukeVideoError.hidden = false; });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dukeModal.hidden) closeDukeVideo();
  });
}

// CURRENT YEAR AND RESILIENT IN-PAGE FOCUS
const year = document.querySelector('[data-current-year]');
if (year) year.textContent = String(new Date().getFullYear());
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    window.setTimeout(() => target.setAttribute('tabindex', target.hasAttribute('tabindex') ? target.getAttribute('tabindex') : '-1'), 0);
  });
});
