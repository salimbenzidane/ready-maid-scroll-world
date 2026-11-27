(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const tr = text => window.ReadymaidSiteI18n?.translate(text) || text;
  const video = $('#customer-video');
  // Keep the interview, video library and training gallery from playing over each other.
  document.addEventListener('play', (event) => {
    const playingVideo = event.target;
    if (!(playingVideo instanceof HTMLVideoElement)) return;
    document.querySelectorAll('video').forEach(other => {
      if (other !== playingVideo && !other.paused) other.pause();
    });
  }, true);
  const videoBox = $('#interview-screen');
  const sound = $('#video-sound');
  const pause = $('#video-pause');
  const play = $('#video-center-play');
  const expand = $('#video-expand');
  const status = $('#video-status');
  const soundGate = $('#interview-audio-gate');
  const soundStart = $('#interview-sound-start');
  const useIcon = (name) => `<svg aria-hidden="true"><use href="#${name}"></use></svg>`;
  let attemptedAudibleAutoplay = false;
  let autoplaySoundBlocked = false;
  let initialPlaybackRequested = false;

  function updateVideoUI() {
    const isPaused = video.paused;
    const needsSoundTap = autoplaySoundBlocked && video.muted;
    videoBox.classList.toggle('is-paused', isPaused);
    videoBox.classList.toggle('needs-sound-gesture', needsSoundTap);
    soundGate.hidden = !needsSoundTap;
    pause.innerHTML = useIcon(isPaused ? 'i-play' : 'i-pause');
    pause.setAttribute('aria-label', isPaused ? tr('Play interview') : tr('Pause interview'));
    sound.querySelector('span').textContent = video.muted ? tr('Play with sound') : tr('Mute sound');
    sound.querySelector('svg').innerHTML = `<use href="#${video.muted ? 'i-speaker' : 'i-mute'}"></use>`;
    sound.setAttribute('aria-pressed', String(!video.muted));
    if (status) status.textContent = needsSoundTap
      ? tr('Your browser requires a tap to enable sound. The interview is playing muted.')
      : isPaused ? tr('Interview paused. Press play to continue.') : tr('Interview playing.');
  }

  // On first load request audible autoplay. Chrome may deny this without a gesture.
  // When denied, show the original poster at 0:00 instead of playing silently.
  async function startVideo() {
    initialPlaybackRequested = true;
    if (autoplaySoundBlocked) return startWithSoundFromBeginning();
    if (!attemptedAudibleAutoplay) {
      attemptedAudibleAutoplay = true;
      video.defaultMuted = false;
      video.muted = false;
      try {
        await video.play();
        updateVideoUI();
        return;
      } catch (err) {
        video.pause();
        if (err && err.name === 'NotAllowedError') {
          autoplaySoundBlocked = true;
          video.muted = true;
          try { video.currentTime = 0; } catch (seekErr) { /* metadata not yet ready */ }
          updateVideoUI();
          return;
        }
        if (status) status.textContent = tr('Video unavailable. Please try again later.');
        updateVideoUI();
        return;
      }
    }
    try { await video.play(); }
    catch (err) { if (status) status.textContent = tr('Tap play to watch the interview.'); }
    updateVideoUI();
  }

  async function startWithSoundFromBeginning() {
    initialPlaybackRequested = true;
    // Directly inside a click event; no timer, prompt or automatic redirect.
    video.pause();
    try { video.currentTime = 0; } catch (err) { /* metadata not yet ready */ }
    video.muted = false;
    video.volume = 1;
    try {
      await video.play();
      autoplaySoundBlocked = false;
      updateVideoUI();
    } catch (err) {
      video.pause();
      video.muted = true;
      autoplaySoundBlocked = true;
      updateVideoUI();
      if (status) status.textContent = tr('Tap play to watch the interview.');
    }
  }

  async function toggleVideo() {
    if (video.paused) {
      if (autoplaySoundBlocked) await startWithSoundFromBeginning();
      else await startVideo();
    } else {
      video.pause();
      updateVideoUI();
    }
  }

  soundStart.addEventListener('click', startWithSoundFromBeginning);
  sound.addEventListener('click', async () => {
    if (autoplaySoundBlocked && video.muted) {
      await startWithSoundFromBeginning();
      return;
    }
    video.muted = !video.muted;
    if (video.paused) await startVideo();
    updateVideoUI();
  });
  pause.addEventListener('click', toggleVideo);
  play.addEventListener('click', toggleVideo);
  expand.addEventListener('click', async () => {
    try {
      if (video.requestFullscreen) await video.requestFullscreen();
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    } catch (e) { if (status) status.textContent = tr('This browser does not support expanding the video.'); }
  });
  video.addEventListener('play', updateVideoUI);
  video.addEventListener('pause', updateVideoUI);
  video.addEventListener('volumechange', updateVideoUI);
  video.addEventListener('error', () => { videoBox.classList.add('is-paused'); if (status) status.textContent = tr('Video unavailable. Please try again later.'); });
  window.addEventListener('DOMContentLoaded', () => {
    const begin = () => {
      if (!initialPlaybackRequested) startVideo();
    };
    // On mobile, do not fetch the interview video while it is offscreen.
    // Preserve the existing audible autoplay attempt when the interview is viewed.
    if (window.matchMedia('(max-width: 600px)').matches && 'IntersectionObserver' in window) {
      videoBox.classList.add('is-paused');
      const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          observer.disconnect();
          begin();
        }
      });
      observer.observe(videoBox);
    } else {
      begin();
    }
  });
  const menu = $('#menu-toggle');
  const quick = $('#quick-menu');
  menu.addEventListener('click', () => {
    const show = quick.hidden;
    quick.hidden = !show;
    menu.setAttribute('aria-expanded', String(show));
    menu.setAttribute('aria-label', show ? tr('Close website menu') : tr('Open website menu'));
  });
  quick.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { quick.hidden = true; menu.setAttribute('aria-expanded','false'); }));
  document.addEventListener('click', (e) => { if (!quick.hidden && !quick.contains(e.target) && !menu.contains(e.target)) { quick.hidden = true; menu.setAttribute('aria-expanded','false'); } });
  const mobileBar = $('#mobile-bottom');
  const hero = $('.fa-hero');
  const updateMobileBar = () => mobileBar.classList.toggle('is-visible', window.innerWidth <= 600 && window.scrollY > Math.min(520, hero.offsetHeight * .52));
  window.addEventListener('scroll', updateMobileBar, {passive:true});
  window.addEventListener('resize', updateMobileBar);
  updateMobileBar();
  const gallery = $('#gallery-dialog');
  const galleryContent = $('#gallery-content');
  const galleryTitle = $('#gallery-title');
  const galleryClose = $('#gallery-close');
  const galleryItems = {
    arrival: {title: 'Ready Team Arrive — edited orientation photo', type: 'image', src: 'site-v2/assets/ready-team-arrive-20261127.webp', alt: 'Readymaid team during office orientation, edited photograph'},
    training: {title: 'Readymaid Orientation & Training — edited photo', type: 'image', src: 'site-v2/assets/readymaid-training-orientation-20261127.webp', alt: 'Readymaid team learning together at a laptop, edited photograph'},
    practice: {title: 'Readymaid Practical Training', type: 'image', src: 'site-v2/assets/proof-practice.webp', alt: 'Real practical training activity by Readymaid helpers'},
    team: {title: 'Readymaid Helpers at the Airport', type: 'image', src: 'site-v2/assets/proof-team.webp', alt: 'Real Readymaid helpers arriving with luggage'}
  };
  const galleryOrder = ['team', 'training', 'practice', 'arrival'];
  let galleryIndex = 0;
  function showGalleryItem(index) {
    galleryIndex = (index + galleryOrder.length) % galleryOrder.length;
    const item = galleryItems[galleryOrder[galleryIndex]];
    const previousVideo = galleryContent.querySelector('video');
    if (previousVideo) previousVideo.pause();
    galleryTitle.textContent = tr(item.title);
    galleryContent.replaceChildren();
    if (item.type === 'image') {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = tr(item.alt);
      galleryContent.appendChild(img);
    } else {
      const media = document.createElement('video');
      media.src = item.src;
      media.controls = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.setAttribute('aria-label', tr(item.title));
      galleryContent.appendChild(media);
    }
  }
  document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
    if (!gallery.showModal) return;
    showGalleryItem(galleryOrder.indexOf(button.dataset.view));
    gallery.showModal();
  }));
  $('#gallery-prev').addEventListener('click', () => showGalleryItem(galleryIndex - 1));
  $('#gallery-next').addEventListener('click', () => showGalleryItem(galleryIndex + 1));
  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); showGalleryItem(galleryIndex - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); showGalleryItem(galleryIndex + 1); }
  });
  function closeGallery() { const v = galleryContent.querySelector('video'); if (v) v.pause(); gallery.close(); galleryContent.replaceChildren(); }
  galleryClose.addEventListener('click', closeGallery);
  gallery.addEventListener('click', (e) => { if (e.target === gallery) closeGallery(); });
  gallery.addEventListener('close', () => { const v = galleryContent.querySelector('video'); if (v) v.pause(); });
  document.addEventListener('readymaid:languagechange', () => {
    updateVideoUI();
    const open = !quick.hidden;
    menu.setAttribute('aria-label', tr(open ? 'Close website menu' : 'Open website menu'));
    if (gallery.open) {
      const current = galleryItems[galleryOrder[galleryIndex]];
      galleryTitle.textContent = tr(current.title);
      const media = galleryContent.querySelector('img,video');
      if (media?.tagName === 'IMG') media.alt = tr(current.alt);
      if (media?.tagName === 'VIDEO') media.setAttribute('aria-label',tr(current.title));
    }
  });
})();
