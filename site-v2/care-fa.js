// Scoped to the three-service carousel. All other Readymaid controls remain unchanged.
(() => {
  'use strict';
  const section = document.getElementById('services');
  if (!section) return;
  const track = section.querySelector('#care-carousel');
  const cards = Array.from(track.querySelectorAll('a.service-card'));
  const previous = section.querySelector('#care-prev');
  const next = section.querySelector('#care-next');
  const count = section.querySelector('#care-slide-count');
  const bars = Array.from(section.querySelectorAll('.care-progress span'));
  if (cards.length !== 3 || !previous || !next || !count) return;
  let active = 0;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  function update() {
    const center = track.getBoundingClientRect().left + 40;
    let best = Infinity;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - center);
      if (distance < best) { best = distance; active = index; }
    });
    count.innerHTML = String(active + 1).padStart(2, '0') + ' <b>/ 03</b>';
    bars.forEach((bar, index) => bar.classList.toggle('is-active', index === active));
    previous.disabled = active === 0;
    next.disabled = active === cards.length - 1;
  }
  function goTo(index) {
    const card = cards[Math.max(0, Math.min(cards.length - 1, index))];
    const left = card.offsetLeft - track.offsetLeft;
    track.scrollTo({left, behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  }
  previous.addEventListener('click', () => goTo(active - 1));
  next.addEventListener('click', () => goTo(active + 1));
  let scheduled = false;
  track.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; update(); });
  }, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  update();
})();
