(function () {
  /* 목록에서 깔아 둔 사진을 조금 더 확대하며 걷어 내 기사 안으로 들어온 느낌을 잇는다. */
  var veil = document.querySelector('.travel-portal.is-arrive');
  try { sessionStorage.removeItem('travel-entry'); } catch (e) {}
  if (veil && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    veil.animate(
      [{ opacity: 1, transform: 'scale(1)', filter: veil.style.filter || 'blur(5px)' }, { opacity: .55, transform: 'scale(1.12)', filter: 'blur(10px)', offset: .3 }, { opacity: 0, transform: 'scale(1.35)', filter: 'blur(18px)' }],
      { duration: 700, easing: 'cubic-bezier(.22,.7,.2,1)', fill: 'forwards', delay: 0 }
    ).finished.then(function () { veil.remove(); }, function () { veil.remove(); });
  } else if (veil) {
    veil.remove();
  }

  var drawer = document.getElementById('nav-drawer');
  var menu = document.querySelector('.menu-btn');
  var close = drawer.querySelector('.nav-close');
  var main = document.querySelector('.travel-main');
  var closeTimer;
  function closeMenu(restore) {
    clearTimeout(closeTimer);
    drawer.classList.remove('is-open'); drawer.inert = true;
    document.body.classList.remove('menu-open'); main.inert = false;
    menu.setAttribute('aria-expanded', 'false');
    closeTimer = setTimeout(function () { drawer.hidden = true; }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 360);
    if (restore !== false) menu.focus();
  }
  menu.addEventListener('click', function () {
    if (drawer.classList.contains('is-open')) { closeMenu(); return; }
    clearTimeout(closeTimer); drawer.hidden = false; drawer.inert = false;
    void drawer.offsetWidth; drawer.classList.add('is-open');
    document.body.classList.add('menu-open'); main.inert = true;
    menu.setAttribute('aria-expanded', 'true'); close.focus();
  });
  close.addEventListener('click', closeMenu);
  drawer.addEventListener('click', function (e) { if (e.target === drawer) closeMenu(); });
  drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) {
    if (!drawer.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); closeMenu(); }
    if (e.key === 'Tab') {
      var links = drawer.querySelectorAll('button, a');
      if (e.shiftKey && document.activeElement === links[0]) { e.preventDefault(); links[links.length-1].focus(); }
      else if (!e.shiftKey && document.activeElement === links[links.length-1]) { e.preventDefault(); links[0].focus(); }
    }
  });
  window.matchMedia('(min-width: 1280px)').addEventListener('change', function (e) {
    if (e.matches && !drawer.hidden) { closeMenu(false); document.querySelector('.desktop-nav a').focus(); }
  });

  var galleries = {
    ulsan: [
      ['assets/travel/photo-7.jpg','간절곶 표지석과 푸른 바다','울산 간절곶'],
      ['assets/travel/photo-6.jpg','장생포 고래문화마을 고래 조형물','장생포 고래문화마을'],
      ['assets/travel/bamboo.jpg','태화강 국가정원 십리대숲 산책길','태화강 국가정원 십리대숲']
    ],
    portugal: [
      ['assets/travel/photo-0.jpg','신트라 페나 궁전의 노란 외벽과 붉은 탑','신트라 페나 궁전'],
      ['assets/travel/photo-8.jpg','호카곶 절벽 위 십자가 기념비','호카곶 십자가 기념비'],
      ['assets/travel/photo-4.jpg','헤갈레이라 별장의 나선형 입문의 우물','헤갈레이라 별장 ‘입문의 우물’']
    ]
  };
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var items = galleries[gallery.dataset.gallery], index = 0;
    var image = gallery.querySelector('img');
    var busy = false;
    var frame = gallery.querySelector('.gallery-frame');
    var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // 미리 읽어 두어 첫 전환에서도 빈 사진이 나타나지 않게 한다.
    items.forEach(function (item) { var preload = new Image(); preload.src = item[0]; });
    async function move(step) {
      if (busy) return;
      busy = true;
      var nextIndex = (index + step + items.length) % items.length;
      var incoming = image.cloneNode(false);
      incoming.removeAttribute('loading');
      incoming.src = items[nextIndex][0]; incoming.alt = '';
      incoming.setAttribute('aria-hidden', 'true');
      incoming.classList.add('gallery-incoming');
      try {
        await incoming.decode();
        frame.append(incoming);
        if (!motion.matches) {
          var direction = step > 0 ? 1 : -1;
          var timing = {duration: 650, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'both'};
          var outgoingMotion = image.animate([
            {transform: 'translateX(0)'}, {transform: 'translateX(' + (-direction * 100) + '%)'}
          ], timing);
          var incomingMotion = incoming.animate([
            {transform: 'translateX(' + (direction * 100) + '%)'}, {transform: 'translateX(0)'}
          ], timing);
          await Promise.all([outgoingMotion.finished, incomingMotion.finished]);
          image.src = items[nextIndex][0];
          outgoingMotion.cancel(); incomingMotion.cancel();
        } else { image.src = items[nextIndex][0]; }
        image.alt = items[nextIndex][1];
        index = nextIndex;
        gallery.querySelector('.gallery-caption').textContent = items[index][2];
        gallery.querySelector('.gallery-count').textContent = String(index + 1).padStart(2,'0') + ' / 03';
        gallery.querySelector('.gallery-status').textContent = (index + 1) + ' / 3. ' + items[index][2];
      } catch (error) {
        gallery.querySelector('.gallery-status').textContent = '사진을 불러오지 못했습니다. 다시 시도해 주세요.';
      } finally {
        incoming.remove(); busy = false;
      }
    }
    gallery.querySelector('.gallery-prev').addEventListener('click', function () { move(-1); });
    gallery.querySelector('.gallery-next').addEventListener('click', function () { move(1); });
    gallery.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
    });
  });
  var readbar = document.querySelector('.readbar');
  function progress() {
    var height = document.documentElement.scrollHeight - innerHeight;
    readbar.style.transform = 'scaleX(' + (height > 0 ? Math.min(1,Math.max(0,scrollY/height)) : 0) + ')';
  }
  window.addEventListener('scroll', progress, {passive:true}); window.addEventListener('resize',progress); progress();
})();
