/* Readymaid shared paid-source attribution. A WhatsApp click is not a confirmed lead. */
(() => {
  'use strict';
  if (window.__rmAttributionLoaded) return;
  window.__rmAttributionLoaded = true;

  const GA4 = 'G-80EJ9M4TG3';
  const ADS = 'AW-18587211891';
  const CONVERSION = 'AW-18587211891/f5meCMmSpb0dEPOwiZ9F';
  const ATTR = 'rm_attribution';
  const REFS = 'rm_attribution_refs';
  const FIELDS = ['gclid','gbraid','wbraid','utm_source','utm_medium','utm_campaign','utm_term'];
  const TTL = 90 * 24 * 60 * 60 * 1000;
  const DEBUG = new URLSearchParams(location.search).get('debug_ads') === '1';
  const log = (...args) => { if (DEBUG) console.info('[Readymaid Ads debug]', ...args); };
  const storage = name => { try { return window[name]; } catch { return null; } };
  const local = storage('localStorage');
  const session = storage('sessionStorage');
  const read = (store, key) => { try { return JSON.parse(store.getItem(key) || 'null'); } catch { return null; } };
  const write = (store, key, value) => { try { store.setItem(key, JSON.stringify(value)); return true; } catch { return false; } };
  const current = value => value && typeof value.capturedAt === 'number'
    && Date.now() >= value.capturedAt && Date.now() - value.capturedAt < TTL;
  function cookieValue() {
    try {
      const item = document.cookie.split('; ').find(x => x.startsWith(ATTR + '='));
      return item ? JSON.parse(decodeURIComponent(item.slice(ATTR.length + 1))) : null;
    } catch { return null; }
  }
  function capture() {
    const query = new URLSearchParams(location.search);
    const hasTouch = FIELDS.some(name => query.has(name) && query.get(name));
    if (!hasTouch) {
      const saved = read(local, ATTR);
      if (current(saved)) return saved;
      const cookie = cookieValue();
      return current(cookie) ? cookie : null;
    }
    const attribution = { capturedAt: Date.now(), landingPath: location.pathname };
    for (const name of FIELDS) attribution[name] = (query.get(name) || '').trim().slice(0, 256);
    write(local, ATTR, attribution);
    try {
      document.cookie = ATTR + '=' + encodeURIComponent(JSON.stringify(attribution))
        + '; Max-Age=7776000; Path=/; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
    } catch { /* Storage can be blocked in private browsing. */ }
    log('Captured', attribution);
    return attribution;
  }
  function paid(a) {
    return !!a && (!!(a.gclid || a.gbraid || a.wbraid)
      || /^(cpc|ppc|paid|paid[-_ ]?search|paid[-_ ]?social|display)$/i.test(a.utm_medium || ''));
  }
  function reference(a) {
    if (!paid(a)) return null;
    let refs = read(local, REFS);
    refs = Array.isArray(refs) ? refs.filter(r => r && /^[0-9A-F]{6}$/.test(r.ref)
      && Number.isFinite(r.clickedAt) && Date.now() - r.clickedAt < TTL).slice(-80) : [];
    const identity = a.capturedAt + '|' + (a.gclid || '') + '|' + (a.gbraid || '') + '|' + (a.wbraid || '');
    const existing = read(session, 'rm_paid_lead_ref');
    if (existing && existing.identity === identity && refs.some(r => r.ref === existing.ref)) return existing.ref;
    let ref = null;
    for (let attempt = 0; attempt < 10; attempt++) {
      const bytes = new Uint8Array(3);
      if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(bytes);
      else for (let i = 0; i < 3; i++) bytes[i] = Math.floor(Math.random() * 256);
      const candidate = Array.from(bytes).map(x => x.toString(16).padStart(2,'0')).join('').toUpperCase();
      if (!refs.some(r => r.ref === candidate)) { ref = candidate; break; }
    }
    if (!ref) return null;
    refs.push({
      ref, gclid:a.gclid || '', gbraid:a.gbraid || '', wbraid:a.wbraid || '',
      utm_source:a.utm_source || '', utm_medium:a.utm_medium || '',
      utm_campaign:a.utm_campaign || '', utm_term:a.utm_term || '',
      capturedAt:a.capturedAt, landingPath:a.landingPath, clickedAt:Date.now(), clickPath:location.pathname
    });
    write(local, REFS, refs);
    write(session, 'rm_paid_lead_ref', { identity, ref });
    log('Ref', 'RM-' + ref);
    return ref;
  }
  function isBusinessWhatsapp(url) {
    const phone = String(window.__readymaidPrimaryWhatsAppNumber || '601115556666').replace(/\D/g, '');
    return (url.hostname === 'wa.me' && url.pathname.replace(/^\/+/, '').split('/')[0] === phone)
      || (url.hostname === 'api.whatsapp.com' && /^\/send\/?$/.test(url.pathname)
          && (url.searchParams.get('phone') || '').replace(/\D/g, '') === phone);
  }
  function withRef(url, ref) {
    if (!ref) return;
    const initial = url.searchParams.get('text')
      || 'Hello Readymaid, I would like to enquire about a domestic helper.';
    url.searchParams.set('text', initial.replace(/\s*\[Ref:\s*RM-[A-F0-9]{6}\]\s*$/i, '').trimEnd()
      + '\n\n[Ref: RM-' + ref + ']');
  }

  // Preserve the existing GA4 and Ads destinations; one non-blocking gtag.js loader.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  if (!window.__readymaidAdsTagInitialized) {
    window.__readymaidAdsTagInitialized = true;
    window.gtag('js', new Date());
    window.gtag('config', GA4);
    window.gtag('config', ADS);
  }
  if (!document.querySelector('[data-readymaid-ga4]')
      && !document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4;
    tag.dataset.readymaidGa4 = 'true';
    document.head.appendChild(tag);
  }

  const attribution = capture();
  log('GCLID', attribution?.gclid || '(none)', 'paid', paid(attribution));
  document.addEventListener('click', event => {
    const target = event.target instanceof Element
      ? event.target.closest('a[href], [data-whatsapp-url]') : null;
    if (!target) return;
    const href = target.getAttribute('href') || target.getAttribute('data-whatsapp-url');
    if (!href) return;
    let url;
    try { url = new URL(href, location.href); } catch { return; }
    if (!isBusinessWhatsapp(url)) return;
    const ref = reference(attribution);
    withRef(url, ref);
    const anchor = target instanceof HTMLAnchorElement;
    if (ref) {
      if (anchor) target.href = url.toString();
      else target.setAttribute('data-whatsapp-url', url.toString());
    }
    const area = target.closest('.mobile-bottom, .mobile-sticky-cta') ? 'mobile_sticky'
      : target.closest('.wa-float, .floating-whatsapp') ? 'floating'
        : target.closest('header, nav') ? 'header'
          : target.closest('footer') ? 'footer' : 'content';
    const label = (target.getAttribute('aria-label') || target.textContent || 'WhatsApp')
      .replace(/\s+/g, ' ').trim().slice(0, 80);
    const conversion = {send_to:CONVERSION, value:1.0, currency:'MYR', transport_type:'beacon'};
    if (DEBUG) {
      log('WhatsApp click: conversion suppressed', {ref, url:url.toString(), conversion});
      return;
    }
    window.gtag('event', 'whatsapp_click', {
      link_url:url.origin + url.pathname, link_text:label, link_location:area,
      ...(ref ? {lead_reference:'RM-' + ref} : {}), transport_type:'beacon'
    });
    // Count one lead per tab session and paid touch, not repeat CTA taps.
    const dedupe = 'rm_ads_conversion_' + (ref || 'organic');
    if (read(session, dedupe)) return;
    write(session, dedupe, true);

    const sameTab = anchor && (!target.target || target.target === '_self')
      && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;
    if (sameTab) {
      event.preventDefault();
      let opened = false;
      const open = () => { if (!opened) { opened = true; location.assign(url.toString()); } };
      window.setTimeout(open, 150);
      window.gtag('event', 'conversion', {...conversion, event_callback:open, event_timeout:150});
    } else {
      window.gtag('event', 'conversion', conversion);
      if (!anchor) { event.preventDefault(); window.open(url.toString(), '_blank', 'noopener,noreferrer'); }
    }
  }, true);
})();
