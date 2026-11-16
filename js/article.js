(function () {
  var drawer = document.getElementById('nav-drawer');
  var menu = document.querySelector('.menu-btn');
  var close = drawer.querySelector('.nav-close');
  var main = document.querySelector('.article-main');
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
  var direction = document.querySelector('.flow-direction');
  var explanation = document.querySelector('.flow-explanation p');
  document.querySelectorAll('[data-mode]').forEach(function (button) {
    button.addEventListener('click', function () {
      var charging = button.dataset.mode === 'charge';
      document.querySelectorAll('[data-mode]').forEach(function (b) { b.classList.toggle('selected', b === button); b.setAttribute('aria-pressed', String(b === button)); });
      direction.textContent = charging ? '송전선로 → 배터리' : '배터리 → 송전선로';
      explanation.textContent = charging ? '송전선로가 감당하지 못하는 전기를 배터리에 충전해 둔다.' : '저장해 둔 전기를 송전선로로 내보낸다. 같은 선로로 더 많은 전기를 전달할 수 있다.';
    });
  });
  var readbar = document.querySelector('.readbar');
  function progress() { var h = document.documentElement.scrollHeight - innerHeight; readbar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, Math.max(0, scrollY / h)) : 0) + ')'; }
  window.addEventListener('scroll', progress, { passive: true }); window.addEventListener('resize', progress); progress();
  if ('IntersectionObserver' in window) {
    var links = document.querySelectorAll('.article-index nav a');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) { if (a.hash === '#' + entry.target.id) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); });
      });
    }, { rootMargin: '-15% 0px -50% 0px' });
    document.querySelectorAll('.article-section').forEach(function (s) { observer.observe(s); });
  }
  var imageDialog = document.getElementById('vpl-image-dialog');
  var imageOpener = document.querySelector('.overview-open');
  imageOpener.addEventListener('click', function () {
    imageDialog.showModal();
    document.body.classList.add('image-open');
  });
  imageDialog.querySelector('.lightbox-close').addEventListener('click', function () { imageDialog.close(); });
  imageDialog.addEventListener('click', function (e) {
    if (e.target === imageDialog) {
      var bounds = imageDialog.getBoundingClientRect();
      if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) imageDialog.close();
    }
  });
  imageDialog.addEventListener('close', function () {
    document.body.classList.remove('image-open'); imageOpener.focus();
  });
  // 그래프가 다시 보일 때마다 실제 데이터 비율까지 막대를 늘린다.
  var chart = document.querySelector('.build-chart');
  var chartMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (chart && 'IntersectionObserver' in window) {
    var barAnimations = [], chartPlaying = false;
    function resetBars() {
      barAnimations.forEach(function (animation) { animation.cancel(); });
      barAnimations = []; chartPlaying = false;
    }
    var chartObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { resetBars(); return; }
        if (entry.intersectionRatio < .2 || chartPlaying || chartMotion.matches) return;
        chartPlaying = true;
        chart.querySelectorAll('.bar-row i').forEach(function (bar, index) {
          if (typeof bar.animate !== 'function') return;
          barAnimations.push(bar.animate([
            { width: '0%' }, { width: bar.style.width }
          ], { duration: 1200, delay: index * 130, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' }));
          var yearLabel = bar.closest('.bar-row').querySelector('strong');
          if (yearLabel && typeof yearLabel.animate === 'function') {
            barAnimations.push(yearLabel.animate([
              { opacity: 0, transform: 'translateY(3px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 240, delay: 1200 + index * 130, easing: 'ease-out', fill: 'both' }));
          }
        });
      });
    }, { threshold: [0, .2], rootMargin: '-70px 0px 0px 0px' });
    chartObserver.observe(chart);
    chartMotion.addEventListener('change', function () { resetBars(); });
  }
  // 제목 공간과 스크린리더용 문장은 유지하고 시각적 글자만 순서대로 표시한다.
  var typingTitle = document.querySelector('.article-cover h1');
  var typingMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (typingTitle && 'IntersectionObserver' in window) {
    var titleText = typingTitle.textContent;
    var titleCharacters = Array.from(titleText);
    var readableTitle = document.createElement('span');
    readableTitle.className = 'sr-only'; readableTitle.textContent = titleText;
    var visualTitle = document.createElement('span');
    visualTitle.setAttribute('aria-hidden', 'true');
    var characterNodes = titleCharacters.map(function (character) {
      var node = document.createElement('span');
      node.className = 'typing-character'; node.textContent = character;
      visualTitle.append(node); return node;
    });
    typingTitle.replaceChildren(readableTitle, visualTitle);
    var typingTimer = null, typingActive = false;
    var typingCover = typingTitle.closest('.article-cover');
    function showTitle() {
      clearTimeout(typingTimer);
      typingCover.classList.remove('is-typed');
      characterNodes.forEach(function (node) { node.style.visibility = 'visible'; });
      typingActive = false;
    }
    function startTyping() {
      clearTimeout(typingTimer);
      typingCover.classList.remove('is-typed');
      if (typingMotion.matches) { showTitle(); return; }
      typingActive = true;
      characterNodes.forEach(function (node) { node.style.visibility = 'hidden'; });
      var cursor = 0;
      function typeNext() {
        characterNodes[cursor].style.visibility = 'visible'; cursor++;
        if (cursor < characterNodes.length) typingTimer = setTimeout(typeNext, 160);
        else typingCover.classList.add('is-typed');
      }
      typingTimer = setTimeout(typeNext, 250);
    }
    var typingObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { showTitle(); return; }
        if (!typingActive && !typingMotion.matches) startTyping();
      });
    }, { threshold: 0, rootMargin: '-70px 0px 0px 0px' });
    typingObserver.observe(typingTitle);
    typingMotion.addEventListener('change', function () { showTitle(); });
  }
})();
