  (function initIndustrialLights() {
    var scene = document.querySelector('.perspective');
    if (!scene || !('IntersectionObserver' in window)) return;
    scene.classList.add('lighting-ready');
    var copy = scene.querySelector('.perspective-copy');
    if (!copy) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) scene.classList.remove('is-lit');
          else if (entry.intersectionRatio >= 2 / 3) scene.classList.add('is-lit');
        });
      }, {threshold: [0, 2 / 3], rootMargin: '-70px 0px 0px 0px'});
      observer.observe(scene); return;
    }
    function alignSlogan() {
      var baseHeight = Math.max(540, copy.offsetHeight + 96);
      var originalScale = Math.max(scene.clientWidth / 2172, baseHeight / 724);
      var extendedHeight = 2172 * (861 / 1827) * originalScale;
      scene.style.setProperty('--extended-scene-height', extendedHeight + 'px');
      scene.style.setProperty('--extended-scene-pad', (48 + (extendedHeight - baseHeight) / 2) + 'px');
      scene.style.setProperty('--copy-bottom', Math.max(0, scene.clientHeight - copy.offsetTop - copy.offsetHeight) + 'px');
      var copyRight = copy.offsetLeft + copy.offsetWidth;
      scene.style.setProperty('--slogan-center', ((copyRight + scene.clientWidth) / 2) + 'px');
    }
    alignSlogan();
    if ('ResizeObserver' in window) {
      var alignmentObserver = new ResizeObserver(alignSlogan);
      alignmentObserver.observe(scene);
      alignmentObserver.observe(copy);
    }
    window.addEventListener('resize', alignSlogan);
    var lightsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) scene.classList.remove('is-lit');
        else if (entry.intersectionRatio >= 2 / 3) scene.classList.add('is-lit');
      });
    }, { threshold: [0, 2 / 3], rootMargin: '-70px 0px 0px 0px' });
    lightsObserver.observe(scene);
  })();
