(() => {
  'use strict';
  const section = document.querySelector('.rm-video-section');
  if (!section) return;
  const clips = [{"id":13,"title":"Matching your family’s needs","description":"Readymaid discusses household needs and finding a suitable helper.","benefit":"Understand how a needs-based discussion supports a more suitable match.","duration":"0:38","src":"site-v2/assets/video-stories/clip_13.mp4","poster":"site-v2/assets/video-stories/clip_13-poster.webp"},{"id":17,"title":"Why agency credentials matter","description":"What to check beyond the initial price, including licensing and service responsibility.","benefit":"Know why agency credentials and responsible processing are important.","duration":"0:32","src":"site-v2/assets/video-stories/clip_17.mp4","poster":"site-v2/assets/video-stories/clip_17-poster.webp"},{"id":11,"title":"Experience versus suitability","description":"Years of experience do not always mean experience in the care your family needs.","benefit":"Focus on relevant skills when comparing candidates.","duration":"0:38","src":"site-v2/assets/video-stories/clip_11.mp4","poster":"site-v2/assets/video-stories/clip_11-poster.webp"},{"id":7,"title":"Questions for a better interview","description":"Scenario-based interview questions about children, priorities and unclear instructions.","benefit":"Ask practical questions that reveal how a candidate may respond.","duration":"0:31","src":"site-v2/assets/video-stories/clip_07.mp4","poster":"site-v2/assets/video-stories/clip_07-poster.webp"},{"id":3,"title":"Interview promises versus real work","description":"An interview answer and daily performance can differ as someone adjusts to a new home.","benefit":"Set more realistic expectations and plan for orientation.","duration":"0:40","src":"site-v2/assets/video-stories/clip_03.mp4","poster":"site-v2/assets/video-stories/clip_03-poster.webp"},{"id":16,"title":"Three things to prepare before arrival","description":"Prepare household responsibilities, priorities and expectations before arrival.","benefit":"Reduce first-week uncertainty for your family and your helper.","duration":"0:33","src":"site-v2/assets/video-stories/clip_16.mp4","poster":"site-v2/assets/video-stories/clip_16-poster.webp"},{"id":15,"title":"The first seven days","description":"A simple first-week guide: welcome, explain, demonstrate and give feedback.","benefit":"Support a smoother start at home.","duration":"0:25","src":"site-v2/assets/video-stories/clip_15.mp4","poster":"site-v2/assets/video-stories/clip_15-poster.webp"},{"id":10,"title":"One clear household routine","description":"When several family members give different instructions, daily work becomes confusing.","benefit":"Agree on priorities and consistent instructions.","duration":"0:31","src":"site-v2/assets/video-stories/clip_10.mp4","poster":"site-v2/assets/video-stories/clip_10-poster.webp"},{"id":1,"title":"Give clear household instructions","description":"Why repeating vague requests can create misunderstandings about everyday tasks.","benefit":"Improve communication and reduce repeated mistakes.","duration":"0:43","src":"site-v2/assets/video-stories/clip_01.mp4","poster":"site-v2/assets/video-stories/clip_01-poster.webp"},{"id":12,"title":"When your helper stays quiet","description":"A quiet response may hide uncertainty; kind, clear follow-up helps.","benefit":"Make it easier to spot confusion and ask questions.","duration":"0:30","src":"site-v2/assets/video-stories/clip_12.mp4","poster":"site-v2/assets/video-stories/clip_12-poster.webp"},{"id":8,"title":"Set fair household expectations","description":"A discussion of household duties, time to rest and communication.","benefit":"Talk through expectations early while respecting employment terms.","duration":"0:27","src":"site-v2/assets/video-stories/clip_08.mp4","poster":"site-v2/assets/video-stories/clip_08-poster.webp"},{"id":2,"title":"Daily meals and child routines","description":"A school-day sequence with meal preparation and a child enjoying food.","benefit":"Picture everyday household and childcare routines.","duration":"0:46","src":"site-v2/assets/video-stories/clip_02.mp4","poster":"site-v2/assets/video-stories/clip_02-poster.webp"},{"id":14,"title":"A family travel day","description":"Luggage, transport, hotel arrival and a family trip.","benefit":"See a personal family-life moment rather than a service guarantee.","duration":"1:29","src":"site-v2/assets/video-stories/clip_14.mp4","poster":"site-v2/assets/video-stories/clip_14-poster.webp"},{"id":5,"title":"Can AI do all the housework?","description":"A humorous sequence about automation, ironing and cleaning tasks.","benefit":"A light-hearted look at everyday household work.","duration":"0:30","src":"site-v2/assets/video-stories/clip_05.mp4","poster":"site-v2/assets/video-stories/clip_05-poster.webp"},{"id":9,"title":"The robot vacuum problem","description":"A funny household situation involving a robot vacuum and stacked furniture.","benefit":"A familiar household joke for casual viewing.","duration":"0:14","src":"site-v2/assets/video-stories/clip_09.mp4","poster":"site-v2/assets/video-stories/clip_09-poster.webp"}];
  const groups = [{"id":"why","name":"Why Readymaid","summary":"Understand our service approach and what matters when choosing an agency.","clips":[13,17]},{"id":"choose","name":"Choose a Helper","summary":"Know what to ask and which skills matter to your family.","clips":[11,7,3]},{"id":"arrival","name":"Arrival & First Week","summary":"Prepare the home and help your new helper settle in.","clips":[16,15,10]},{"id":"together","name":"Daily Household Tips","summary":"Practical ways to communicate clearly and work well together.","clips":[1,12,8]},{"id":"family","name":"Family Life & Fun","summary":"Real family routines and lighter moments from everyday life.","clips":[2,14,5,9]}];
  const languages = {"en":{"ui":{"introEyebrow":"READYMAID VIDEO GUIDE","introTitle":"Find the right advice.","introAccent":"Watch in seconds.","introDesc":"Choose a topic, then pick a video. Swipe on mobile or use the arrows to browse.","realVideos":"REAL READYMAID VIDEOS","swipeHint":"SWIPE FOR NEXT VIDEO","collection":"THE READYMAID COLLECTION","headerTitle":"Your video library, made simple.","headerSubtitle":"Helpful guidance and everyday moments, picked for families.","libraryCount":"15 hand-picked videos · 5 topics","guideLanguage":"GUIDE LANGUAGE","audioNote":"Original video audio is unchanged","topicsLabel":"01 / CHOOSE A TOPIC","playlistLabel":"02 / PICK A VIDEO","benefitLabel":"WHY THIS VIDEO HELPS","scopeNote":"Videos share general guidance and examples. Current services and package terms are confirmed in writing.","play":"Play selected video","pause":"Pause video","selected":"Selected","watch":"Watch","videos":"videos","playLabel":"Play","selectedVideo":"Selected Readymaid video: ","previous":"Previous video in this category","next":"Next video in this category","categoryAria":"Choose a video category","episodeAria":"Choose an individual video","libraryAria":"Browse Readymaid videos","switchAria":"Choose video guide language"},"groups":{},"clips":{}},"zh":{"ui":{"introEyebrow":"READYMAID 视频指南","introTitle":"找到适合您的建议。","introAccent":"轻松观看，快速了解。","introDesc":"先选主题，再选视频。手机可左右滑动，电脑可点击箭头浏览。","realVideos":"READYMAID 真实视频","swipeHint":"左右滑动切换视频","collection":"READYMAID 精选视频","headerTitle":"想了解什么？这里轻松找到。","headerSubtitle":"为家庭精心整理的实用建议与生活片段。","libraryCount":"15 段精选视频 · 5 个主题","guideLanguage":"界面语言","audioNote":"切换语言不会改变原视频的配音","topicsLabel":"01 / 选择主题","playlistLabel":"02 / 选择视频","benefitLabel":"这段视频能帮您什么","scopeNote":"视频仅供一般参考；当前服务与配套条款以书面确认为准。","play":"播放所选视频","pause":"暂停视频","selected":"已选择","watch":"观看","videos":"段视频","playLabel":"播放","selectedVideo":"已选择的 Readymaid 视频：","previous":"本主题上一段视频","next":"本主题下一段视频","categoryAria":"选择视频主题","episodeAria":"选择具体视频","libraryAria":"浏览 Readymaid 视频","switchAria":"选择视频指南语言"},"groups":{"why":{"name":"为什么选择 Readymaid","tagline":"服务理念与信任","summary":"了解选择中介时值得注意的服务与责任。"},"choose":{"name":"如何挑选合适的帮手","tagline":"技能与面试","summary":"了解面试要问什么，以及哪些能力更适合家人。"},"arrival":{"name":"到家前与第一周","tagline":"安心做好准备","summary":"提前安排家务，让新帮手更顺利适应家庭。"},"together":{"name":"日常家务沟通","tagline":"建立良好相处方式","summary":"用简单实用的方法，让日常沟通更清晰。"},"family":{"name":"家庭生活与趣味","tagline":"生活点滴与轻松时刻","summary":"看看家庭日常，也轻松分享生活趣事。"}},"clips":{"13":{"title":"根据家庭需求匹配帮手","benefit":"先了解家庭需要，有助于找到更合适的人选。"},"17":{"title":"为什么中介执照很重要","benefit":"了解核查执照及规范办理的重要性。"},"11":{"title":"经验多，不代表一定合适","benefit":"比较人选时，更应重视家庭实际需要的技能。"},"7":{"title":"面试时值得问的问题","benefit":"用生活情境题，了解人选会如何应对。"},"3":{"title":"面试表现与实际工作","benefit":"建立合理预期，并做好到家后的指导。"},"16":{"title":"到家前的三项准备","benefit":"提前明确家务、优先事项与双方期望。"},"15":{"title":"到家后的第一周","benefit":"透过欢迎、示范和反馈，帮助彼此适应。"},"10":{"title":"统一家中的日常安排","benefit":"减少家人给出不同指示所造成的困扰。"},"1":{"title":"怎样清楚交代家务","benefit":"沟通更清晰，减少误会与重复出错。"},"12":{"title":"帮手不说话时怎么办","benefit":"主动了解疑问，及时发现沟通问题。"},"8":{"title":"建立合理的家务预期","benefit":"及早沟通职责与休息，并尊重雇佣条款。"},"2":{"title":"孩子的日常与家常餐食","benefit":"看看放学后照顾孩子和准备餐食的片段。"},"14":{"title":"家庭出游的一天","benefit":"分享真实家庭生活，不代表服务承诺。"},"5":{"title":"AI能包办所有家务吗？","benefit":"从轻松角度看待科技与日常家务。"},"9":{"title":"扫地机器人的小烦恼","benefit":"一起看看熟悉又有趣的家庭小插曲。"}}},"ms":{"ui":{"introEyebrow":"PANDUAN VIDEO READYMAID","introTitle":"Cari panduan yang sesuai.","introAccent":"Tonton dengan mudah.","introDesc":"Pilih topik dan video. Leret pada telefon atau gunakan anak panah di komputer.","realVideos":"VIDEO SEBENAR READYMAID","swipeHint":"LERET UNTUK VIDEO SETERUSNYA","collection":"KOLEKSI VIDEO READYMAID","headerTitle":"Panduan yang mudah dicari.","headerSubtitle":"Petua berguna dan detik keluarga, dipilih khas untuk anda.","libraryCount":"15 video pilihan · 5 topik","guideLanguage":"BAHASA PANDUAN","audioNote":"Audio asal video tidak berubah","topicsLabel":"01 / PILIH TOPIK","playlistLabel":"02 / PILIH VIDEO","benefitLabel":"MANFAAT VIDEO INI","scopeNote":"Video berkongsi panduan umum. Perkhidmatan dan terma pakej semasa disahkan secara bertulis.","play":"Mainkan video pilihan","pause":"Jeda video","selected":"Dipilih","watch":"Tonton","videos":"video","playLabel":"Mainkan","selectedVideo":"Video Readymaid dipilih: ","previous":"Video sebelumnya dalam topik ini","next":"Video seterusnya dalam topik ini","categoryAria":"Pilih kategori video","episodeAria":"Pilih video","libraryAria":"Layari video Readymaid","switchAria":"Pilih bahasa panduan video"},"groups":{"why":{"name":"Mengapa Readymaid","tagline":"Perkhidmatan & keyakinan","summary":"Fahami pendekatan perkhidmatan dan perkara penting semasa memilih agensi."},"choose":{"name":"Pilih Pembantu","tagline":"Kemahiran & temu duga","summary":"Ketahui soalan temu duga dan kemahiran yang sesuai untuk keluarga."},"arrival":{"name":"Ketibaan & Minggu Pertama","tagline":"Bersedia dengan yakin","summary":"Sediakan rumah dan bantu pembantu menyesuaikan diri."},"together":{"name":"Panduan Harian di Rumah","tagline":"Komunikasi & rutin","summary":"Cara mudah untuk berkomunikasi dengan jelas dan saling memahami."},"family":{"name":"Keluarga & Santai","tagline":"Kehidupan & hiburan ringan","summary":"Lihat rutin keluarga dan detik yang mencuit hati."}},"clips":{"13":{"title":"Padanan mengikut keperluan keluarga","benefit":"Perbincangan awal membantu mencari calon yang lebih sesuai."},"17":{"title":"Mengapa lesen agensi penting","benefit":"Ketahui mengapa lesen dan urusan yang teratur perlu disemak."},"11":{"title":"Pengalaman atau kesesuaian?","benefit":"Utamakan kemahiran yang benar-benar diperlukan keluarga."},"7":{"title":"Soalan temu duga yang tepat","benefit":"Tanya situasi sebenar untuk menilai tindak balas calon."},"3":{"title":"Temu duga dan kerja sebenar","benefit":"Tetapkan jangkaan munasabah dan rancang sesi orientasi."},"16":{"title":"3 perkara sebelum ketibaan","benefit":"Sediakan tugas, keutamaan dan jangkaan lebih awal."},"15":{"title":"Tujuh hari pertama","benefit":"Bantu penyesuaian melalui sambutan, tunjuk ajar dan maklum balas."},"10":{"title":"Satu rutin rumah yang jelas","benefit":"Selaraskan arahan keluarga dan keutamaan harian."},"1":{"title":"Arahan rumah yang lebih jelas","benefit":"Kurangkan salah faham melalui komunikasi yang tepat."},"12":{"title":"Apabila pembantu banyak berdiam","benefit":"Galakkan pertanyaan supaya kekeliruan dikenal pasti."},"8":{"title":"Jangkaan rumah yang adil","benefit":"Bincangkan tugas dan rehat menurut terma pekerjaan."},"2":{"title":"Rutin anak dan hidangan harian","benefit":"Lihat rutin selepas sekolah dan penyediaan makanan."},"14":{"title":"Perjalanan bersama keluarga","benefit":"Detik kehidupan keluarga, bukan janji perkhidmatan."},"5":{"title":"Bolehkah AI buat semua kerja rumah?","benefit":"Pandangan santai tentang automasi dan kerja harian."},"9":{"title":"Gelagat vakum robot","benefit":"Jenaka ringan tentang cabaran seharian di rumah."}}}};
  const byId = new Map(clips.map(c => [c.id,c]));
  // Guide labels are translated; original video footage, audio and captions stay unchanged.
  let language = 'en'; // Default on each new visit.
  const ui = () => languages[language].ui;
  const translatedGroup = group => languages[language].groups[group.id] || group;
  const translatedClip = clip => languages[language].clips[String(clip.id)] || clip;
  const countLabel = n => language === 'zh' ? n + ' ' + ui().videos : n + ' ' + ui().videos;

  const q = id => section.querySelector('#' + id);
  const video = q('rm-featured-video');
  const source = video.querySelector('source');
  const stage = q('rm-video-swipe-surface');
  const title = q('rm-featured-title');
  const benefit = q('rm-featured-benefit');
  const duration = q('rm-featured-duration');
  const summary = q('rm-video-category-summary');
  const progress = q('rm-video-progress-fill');
  const progressRoot = section.querySelector('.rm-video-progress');
  const playButton = q('rm-feature-play');
  const episodeList = q('rm-video-episodes');
  const episodeCount = q('rm-video-episode-count');
  const heroVideo = document.querySelector('#customer-video');
  const topicButtons = [...section.querySelectorAll('[data-video-category]')];
  let activeGroup = groups[0];
  let index = 0;
  const wrap = n => (n + activeGroup.clips.length) % activeGroup.clips.length;

  const labelPlay = () => {
    playButton.innerHTML = video.paused ? '<span aria-hidden="true">&#9654;</span> ' + ui().play : '<span aria-hidden="true">&#10074;&#10074;</span> ' + ui().pause;
  };
  function play() {
    if (heroVideo && !heroVideo.paused) heroVideo.pause();
    video.muted = false;
    const p = video.play();
    if (p && typeof p.catch === 'function') p.catch(() => labelPlay());
  }
  let renderedGroup = null;
  function renderEpisodes() {
    if (renderedGroup !== activeGroup.id) {
      episodeList.replaceChildren();
      activeGroup.clips.forEach((id, idx) => {
        const c = byId.get(id);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'rm-video-episode';
        button.dataset.videoId = String(id);
        button.setAttribute('aria-label', ui().playLabel + ' ' + translatedClip(c).title);
        const cover = document.createElement('span');
        cover.className = 'rm-episode-cover';
        const image = document.createElement('img');
        image.src = c.poster; image.alt = ''; image.loading = 'lazy';
        const glyph = document.createElement('span');
        glyph.className = 'rm-episode-play'; glyph.setAttribute('aria-hidden', 'true'); glyph.textContent = '\u25b6';
        cover.append(image, glyph);
        const info = document.createElement('span');
        info.className = 'rm-video-episode-copy';
        const name = document.createElement('strong'); name.textContent = translatedClip(c).title;
        const desc = document.createElement('small'); desc.textContent = translatedClip(c).benefit;
        info.append(name, desc);
        const tail = document.createElement('span'); tail.className = 'rm-episode-tail';
        const runtime = document.createElement('span'); runtime.className = 'rm-episode-runtime'; runtime.textContent = c.duration;
        const state = document.createElement('span'); state.className = 'rm-episode-state';
        tail.append(runtime, state);
        button.append(cover, info, tail);
        button.addEventListener('click', () => select(idx, true));
        episodeList.appendChild(button);
      });
      renderedGroup = activeGroup.id;
    }
    [...episodeList.querySelectorAll('.rm-video-episode')].forEach((button, idx) => {
      const selected = idx === index;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.querySelector('.rm-episode-state').textContent = selected ? ui().selected : ui().watch;
    });
  }
  function select(n, autoplay = false) {
    index = wrap(n);
    const clip = byId.get(activeGroup.clips[index]);
    const previous = byId.get(activeGroup.clips[wrap(index - 1)]);
    const next = byId.get(activeGroup.clips[wrap(index + 1)]);
    video.pause();
    source.src = clip.src;
    video.poster = clip.poster;
    video.setAttribute('aria-label', ui().selectedVideo + translatedClip(clip).title);
    video.load();
    title.textContent = translatedClip(clip).title;
    benefit.textContent = translatedClip(clip).benefit;
    duration.textContent = clip.duration;
    const pos = String(index + 1).padStart(2,'0') + ' / ' + String(activeGroup.clips.length).padStart(2,'0');
    q('rm-video-count').textContent = pos;
    q('rm-featured-position').textContent = pos;
    q('rm-peek-prev').src = previous.poster;
    q('rm-peek-next').src = next.poster;
    episodeCount.textContent = countLabel(activeGroup.clips.length);
    progress.style.width = ((index + 1) / activeGroup.clips.length * 100) + '%';
    progressRoot.setAttribute('aria-valuemax', String(activeGroup.clips.length));
    progressRoot.setAttribute('aria-valuenow', String(index + 1));
    renderEpisodes();
    labelPlay();
    if (autoplay) play();
  }
  function chooseTopic(id) {
    const group = groups.find(g => g.id === id);
    if (!group) return;
    activeGroup = group;
    summary.textContent = translatedGroup(group).summary;
    q('rm-video-current-topic').textContent = translatedGroup(group).name;
    topicButtons.forEach(button => {
      const active = button.dataset.videoCategory === id;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
    });
    select(0, false);
  }
  function applyLanguage(nextLanguage) {
    if (!languages[nextLanguage]) return;
    language = nextLanguage;
    section.lang = language === 'zh' ? 'zh-CN' : language;
    section.querySelectorAll('[data-i18n]').forEach(node => {
      const value = ui()[node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('[data-guide-language]').forEach(button => {
      const selected = button.dataset.guideLanguage === language;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    window.ReadymaidSiteI18n?.setLanguage(language);
    const library = section.querySelector('.rm-video-library');
    if (library) library.setAttribute('aria-label', ui().libraryAria);
    // Non-visible descriptions are localized as well as visible guide labels.
    const guideA11y = {
      en: ['Readymaid video guide', 'Video topics', 'Selected video position in the topic', 'Video duration'],
      zh: ['Readymaid 视频指南', '视频主题', '当前主题内所选视频的位置', '视频时长'],
      ms: ['Panduan video Readymaid', 'Topik video', 'Kedudukan video dipilih dalam topik', 'Durasi video']
    }[language];
    section.querySelector('.rm-video-feature')?.setAttribute('aria-label', guideA11y[0]);
    section.querySelector('.rm-video-topics-wrap')?.setAttribute('aria-label', guideA11y[1]);
    progressRoot.setAttribute('aria-label', guideA11y[2]);
    section.querySelector('.rm-video-duration')?.setAttribute('aria-label', guideA11y[3]);
    q('rm-video-topics').setAttribute('aria-label', ui().categoryAria);
    episodeList.setAttribute('aria-label', ui().episodeAria);
    q('rm-video-prev').setAttribute('aria-label', ui().previous);
    q('rm-video-next').setAttribute('aria-label', ui().next);
    topicButtons.forEach(button => {
      const group = groups.find(g => g.id === button.dataset.videoCategory);
      const tGroup = translatedGroup(group);
      button.querySelector('.rm-video-topic-name').textContent = tGroup.name;
      button.querySelector('.rm-topic-copy small').textContent = tGroup.tagline || ({ why: 'Service & trust', choose: 'Skills & interviews', arrival: 'Prepare with confidence', together: 'Better everyday routines', family: 'Real life & a little fun' })[group.id];
      button.setAttribute('aria-label', tGroup.name + ', ' + countLabel(group.clips.length));
    });
    const clip = byId.get(activeGroup.clips[index]);
    summary.textContent = translatedGroup(activeGroup).summary;
    q('rm-video-current-topic').textContent = translatedGroup(activeGroup).name;
    title.textContent = translatedClip(clip).title;
    benefit.textContent = translatedClip(clip).benefit;
    video.setAttribute('aria-label', ui().selectedVideo + translatedClip(clip).title);
    episodeCount.textContent = countLabel(activeGroup.clips.length);
    // Re-label choices without touching video src/currentTime or playing state.
    renderedGroup = null;
    renderEpisodes();
    labelPlay();
  }
  document.querySelectorAll('[data-guide-language]').forEach(button => {
    button.addEventListener('click', () => applyLanguage(button.dataset.guideLanguage));
  });
  topicButtons.forEach(button => button.addEventListener('click', () => chooseTopic(button.dataset.videoCategory)));
  q('rm-video-prev').addEventListener('click', () => select(index - 1, true));
  q('rm-video-next').addEventListener('click', () => select(index + 1, true));
  playButton.addEventListener('click', () => video.paused ? play() : video.pause());
  video.addEventListener('play', () => { if (heroVideo && !heroVideo.paused) heroVideo.pause(); labelPlay(); });
  video.addEventListener('pause', labelPlay);
  if (heroVideo) heroVideo.addEventListener('play', () => { if (!video.paused) video.pause(); });

  // One horizontal swipe moves one clip inside the active category; vertical scrolling remains natural.
  let touch = null;
  stage.addEventListener('touchstart', event => {
    touch = event.touches.length === 1 ? {x:event.touches[0].clientX, y:event.touches[0].clientY} : null;
  }, {passive:true});
  stage.addEventListener('touchend', event => {
    if (!touch || event.changedTouches.length !== 1) return;
    const dx = event.changedTouches[0].clientX - touch.x;
    const dy = event.changedTouches[0].clientY - touch.y;
    touch = null;
    if (Math.abs(dx) >= 52 && Math.abs(dx) > Math.abs(dy) * 1.3) select(index + (dx < 0 ? 1 : -1), true);
  }, {passive:true});
  stage.addEventListener('touchcancel', () => {touch=null;}, {passive:true});
  stage.addEventListener('keydown', event => {
    if (event.target === video) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      select(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  chooseTopic(groups[0].id);
  applyLanguage('en');
})();
