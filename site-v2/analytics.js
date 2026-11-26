/* The shared attribution module owns GA4, Ads and WhatsApp tracking. */
(() => {
  'use strict';
  window.__readymaidPrimaryWhatsAppNumber = '601115556666';
  if (window.__readymaidAttributionBootstrap) return;
  window.__readymaidAttributionBootstrap = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = '/site-v2/google-ads-attribution.js';
  document.head.appendChild(s);
})();
