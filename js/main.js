/* 메뉴와 기사 레이어. 본문 문장은 표지 제목을 바탕으로 한 리드다. */
(function () {
  var stories = {
    theory: {
      badge: "THEORY",
      title: "바람은 보이지 않아도 깃발은 흔들린다",
      image: "assets/hero.jpg",
      imageAlt: "푸른 하늘 위로 펄럭이는 하얀 깃발",
      body: [
        "기류는 눈에 띄지 않는다. 다만 깃발이 접히고 펴지는 방향으로, 전력이 몰리고 비는 자리로 그 흐름은 드러난다.",
        "2027년 1월호는 그 방향을 읽는 호이다. 기술과 제도, 현장과 사람의 변화가 어느 쪽을 가리키는지 표지부터 따라가 본다."
      ]
    },
    voice: {
      badge: "VOICE",
      title: "2027 한전인의 바람",
      image: "assets/voice-hd.jpg",
      imageAlt: "새해 바람을 메모로 나누는 직원들",
      body: [
        "한전인이 적은 새해 바람은 거창한 구호보다 출근길의 문장에 가깝다. 정전이 없는 겨울, 더 안전한 현장, 동료와 나누는 여유가 그 안에 있다.",
        "영상을 끝까지 보면 이벤트에 참여할 수 있다. 자신이 지키고 싶은 한 줄을 댓글로 남겨 보자."
      ]
    },
    now: {
      badge: "KEPCO NOW",
      title: "논의에서 실행으로, 2027 전력산업 혁신과제",
      image: "assets/now-hd.jpg",
      imageAlt: "전력 계통 관제 화면",
      body: [
        "회의실에 머물던 혁신과제가 올해는 현장의 일정표로 내려온다. 유연한 계통 운영, 데이터 기반 설비 진단, 수요가 큰 산단의 공급 속도가 우선 순위다.",
        "관제 화면의 점들이 실제 공사와 제도로 이어지는지, 1월의 실행 목록을 따라가 본다."
      ]
    },
    process: {
      badge: "KEPCO PRO:CESS",
      title: "한겨울 피크, 전력망은 이렇게 버틴다",
      image: "assets/process-hd.jpg",
      imageAlt: "눈 덮인 산의 송전탑",
      body: [
        "한파가 길수록 전력망은 예비력과 현장 순찰로 버틴다. 설비가 얼기 전에 점검하고, 피크가 오기 전에 부하를 나누는 일이 겨울 공정의 핵심이다.",
        "눈이 쌓인 선로를 지키는 순서를, 이번 호 프로세스 코너에서 단계별로 정리했다."
      ]
    },
    graphy: {
      badge: "KEPCO:GRAPHY",
      title: "송전탑 없이 길을 넓히다, 가상송전선로(VPL)",
      image: "assets/graphy-hd.jpg",
      imageAlt: "노을 속의 송전선로",
      body: [
        "새로운 철탑을 세우지 않고도 기존 선로의 여유를 끌어오는 방법이 가상송전선로다. 같은 하늘에 더 많은 전력을 흘리는 기술이다.",
        "사진 속 노을 아래의 선로가, 물리적인 탑 없이도 어떻게 넓어지는지 그래픽으로 풀어 본다."
      ]
    },
    perspective: {
      badge: "PERSPECTIVE",
      title: "메가 프로젝트 시대의 전력공급 속도는 국가 경쟁력",
      by: "조홍종 단국대학교 경제학과 교수",
      image: "assets/perspective.jpg",
      imageAlt: "야간에 가동 중인 산업단지",
      body: [
        "공장을 짓는 속도보다 전력을 대는 속도가 늦으면, 투자 일정 전체가 밀린다. 메가 프로젝트 시대의 경쟁력은 자본뿐 아니라 계통 연결의 시간에 달려 있다.",
        "조홍종 교수는 공급 일정을 산업 정책의 일부로 봐야 한다고 말한다. 기다림의 비용이 곧 국가의 비용이라는 이야기다."
      ]
    },
    site: {
      badge: "SITE",
      title: "서해 최북단, 섬의 겨울을 밝히다",
      by: "연평도 내연발전소",
      image: "assets/site.jpg",
      imageAlt: "발전 설비를 점검하는 현장",
      body: [
        "바다가 거칠어지면 섬의 전기는 더 가까워져야 한다. 연평도 내연발전소는 겨울철 섬의 불을 끄지 않기 위해 연료와 설비, 교대 근무를 미리 챙긴다.",
        "최북단 현장에서 하루가 어떻게 시작되고 끝나는지, 사람들의 동선으로 따라간다."
      ]
    },
    runway: {
      badge: "KEPCO RUNWAY",
      title: "출근길 OOTD, 겨울의 멋",
      by: "광주전남본부",
      image: "assets/runway.jpg",
      imageAlt: "겨울 코트를 입은 직원",
      body: [
        "두꺼운 코트 안에도 명찰과 안전화가 있다. 광주전남본부 직원들의 출근길은 따뜻함과 현장 복장이 한 벌 안에서 만난다.",
        "겨울의 멋을 고른 기준은 단순하다. 오래 걸어도 좋고, 현장에서 바로 입을 수 있을 것."
      ]
    },
    news: {
      badge: "KEPCO NEWS",
      title: "국산 AI 반도체(NPU) 변전소 AI 감시 현장 성능검증 외",
      image: "assets/news-npu.jpg",
      imageAlt: "설비를 감시하는 모니터",
      body: [
        "국산 NPU가 변전소 감시 영상과 센서 데이터를 현장에서 바로 판독할 수 있는지 성능검증이 진행됐다. 통신 지연 없이 이상 징후를 가려내는 것이 이번 시험의 초점이다.",
        "이 밖에도 겨울철 설비 보강과 지역 협력 소식이 24면에 함께 실렸다."
      ]
    },
    "news-winter": {
      badge: "KEPCO NEWS", title: "겨울철 전력 공급을 위한 설비 보강 소식",
      image: "assets/news-winter.jpg", imageAlt: "눈 덮인 송전 설비",
      body: ["겨울철 설비 보강 소식이 이번 호 KEPCO NEWS에 함께 실렸습니다.", "자세한 소식은 사보 24면에서 확인할 수 있습니다."]
    },
    "news-local": {
      badge: "KEPCO NEWS", title: "지역과 함께하는 한전, 협력의 소식",
      image: "assets/news-community-v2.jpg", imageAlt: "한전 현장 설비",
      body: ["지역 협력 소식이 이번 호 KEPCO NEWS에 함께 실렸습니다.", "자세한 소식은 사보 24면에서 확인할 수 있습니다."]
    },
    twin: {
      badge: "TWIN TRIP",
      title: "해가 떠오르는 곳, 땅이 끝나는 곳 그곳에 서다",
      image: "assets/twin-left.jpg",
      imageAlt: "간절곶의 일출",
      body: [
        "울산 간절곶은 한반도에서 해가 가장 먼저 올라오는 자리 중 하나다. 포르투갈 호카곶은 유럽 대륙이 대서양으로 끝나는 자리다. 둘 다 땅이 하늘이나 바다와 만나는 끝이다.",
        "등대와 절벽, 일출과 파도. 같은 질문을 다른 경도로 던져 보는 쌍둥이 여행이다."
      ]
    },
    nomics: {
      badge: "NEWS NOMICS",
      title: "금리 뉴스에 왜 새가 날아들었을까?",
      image: "assets/interest-rate-news.png",
      imageAlt: "매와 비둘기 일러스트",
      body: [
        "금리를 매와 비둘기로 부르는 말은, 물가를 누르려는 쪽과 경기를 살리려는 쪽을 한 장의 그림으로 줄인 것이다.",
        "뉴스 속 새의 이름이 전기요금과 투자 결정에 어떻게 연결되는지, 그래프와 함께 쉽게 풀어 본다."
      ]
    },
    table: {
      badge: "KEPCO TABLE",
      title: "쫄깃한 겨울 보약, 꼬막",
      image: "assets/table.jpg",
      imageAlt: "양념 꼬막 정식",
      body: [
        "겨울 꼬막은 살이 차고 껍질이 얇다. 데쳐서 양념장에 무치면 그 자체가 한 끼의 반찬이자 보약이 된다.",
        "입맛 없는 날에 밥과 김, 꼬막만으로 상을 차리는 법을 레시피와 함께 소개한다."
      ]
    },
    movie: {
      badge: "MOVIE:LAB",
      title: "태양이 어두워진다면?",
      by: "「프로젝트 헤일메리」로 읽는 E=mc²",
      image: "assets/movie.jpg",
      imageAlt: "어두워진 태양과 우주선",
      body: [
        "태양이 힘을 잃는다는 설정은 영화의 위기이자 에너지 이야기의 출발이다. 질량이 에너지가 되는 한 줄의 식이, 우주선의 선택과 맞닿아 있다.",
        "「프로젝트 헤일메리」의 장면을 빌려, 우리가 쓰는 전력이 어디서 오는지 다시 읽어 본다."
      ]
    },
    diary: {
      badge: "오피스 다이어리",
      title: "새해 다짐, 3일째 되는 날",
      image: "assets/diary.jpg",
      imageAlt: "일기와 커피가 있는 책상",
      body: [
        "다짐이 가장 흔들리는 때는 시작이 아니라 사흘째다. 거창한 목록 대신, 오늘 책상 위에 남길 한 가지를 적는 편이 오래간다.",
        "사무실 다이어리 코너가 제안하는 3일째의 문장. 커피가 식기 전에 한 줄이면 충분하다."
      ]
    }
  };

  var menuBtn = document.querySelector(".menu-btn");
  var drawer = document.getElementById("nav-drawer");
  var closeBtn = drawer.querySelector(".nav-close");
  var dialog = document.getElementById("story");
  var lastFocus = null;
  var menuCloseTimer = null;

  function openMenu() {
    clearTimeout(menuCloseTimer);
    lastFocus = document.activeElement;
    drawer.hidden = false;
    drawer.inert = false;
    // 시작 위치를 확정한 뒤 슬라이드를 재생한다.
    void drawer.offsetWidth;
    drawer.classList.add("is-open");
    document.body.classList.add("menu-open");
    document.querySelector(".sheet").inert = true;
    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.querySelector(".sr-only").textContent = "메뉴 닫기";
    closeBtn.focus();
  }

  function closeMenu(restoreFocus) {
    clearTimeout(menuCloseTimer);
    drawer.classList.remove("is-open");
    drawer.inert = true;
    menuCloseTimer = setTimeout(function () { drawer.hidden = true; },
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 360);
    document.body.classList.remove("menu-open");
    document.querySelector(".sheet").inert = false;
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.querySelector(".sr-only").textContent = "메뉴 열기";
    if (restoreFocus !== false && lastFocus) lastFocus.focus();
  }

  menuBtn.addEventListener("click", function () {
    if (!drawer.classList.contains("is-open")) openMenu();
    else closeMenu();
  });

  closeBtn.addEventListener("click", closeMenu);

  drawer.addEventListener("click", function (event) {
    if (event.target === drawer) closeMenu();
  });

  drawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.matchMedia("(min-width: 1280px)").addEventListener("change", function (event) {
    if (event.matches && !drawer.hidden) {
      closeMenu(false);
      document.querySelector(".desktop-nav a").focus();
    }
  });

  var enteringTravel = false;
  /* 더보기는 두 사진을 함께, 사진 버튼은 그 한 장만 화면 가득 확대한 뒤 이동한다. */
  function coverScale(rect) {
    var halfW = rect.width / 2;
    var halfH = rect.height / 2;
    if (halfW < 1 || halfH < 1) return 1;
    var cx = rect.left + halfW;
    var cy = rect.top + halfH;
    return Math.max(
      cx / halfW,
      (window.innerWidth - cx) / halfW,
      cy / halfH,
      (window.innerHeight - cy) / halfH,
      1
    ) * 1.04;
  }
  function placeClone(source, stage, origin) {
    var box = source.getBoundingClientRect();
    var clone = source.cloneNode(false);
    clone.removeAttribute("width");
    clone.removeAttribute("height");
    clone.alt = "";
    clone.style.left = (box.left - origin.left) + "px";
    clone.style.top = (box.top - origin.top) + "px";
    clone.style.width = box.width + "px";
    clone.style.height = box.height + "px";
    clone.style.maxWidth = "none";
    clone.style.objectFit = "cover";
    var frame = source.closest("button");
    clone.style.borderRadius = frame ? getComputedStyle(frame).borderRadius : "0px";
    stage.append(clone);
    return clone;
  }
  function enterTravel(trigger) {
    if (enteringTravel) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.href = "travel.html";
      return;
    }
    var photos = document.querySelector(".twin-photos");
    var sources = photos ? photos.querySelectorAll("img") : [];
    var clicked = trigger && trigger.querySelector("img");
    if (!sources.length || (clicked && !clicked.complete) || (!clicked && !sources[0].complete)) {
      window.location.href = "travel.html";
      return;
    }
    enteringTravel = true;
    document.body.classList.add("is-leaving");
    var portal = document.createElement("div");
    portal.className = "travel-portal";
    portal.setAttribute("aria-hidden", "true");
    var stage = document.createElement("div");
    stage.className = "travel-stage";
    var entry;
    if (clicked) {
      var rect = clicked.getBoundingClientRect();
      stage.style.left = rect.left + "px";
      stage.style.top = rect.top + "px";
      stage.style.width = rect.width + "px";
      stage.style.height = rect.height + "px";
      stage.style.overflow = "hidden";
      stage.style.borderRadius = getComputedStyle(clicked.closest("button")).borderRadius;
      var one = clicked.cloneNode(false);
      one.removeAttribute("width");
      one.removeAttribute("height");
      one.alt = "";
      one.style.inset = "0";
      one.style.width = "100%";
      one.style.height = "100%";
      one.style.maxWidth = "none";
      one.style.objectFit = "cover";
      stage.append(one);
      entry = { mode: "one", src: clicked.currentSrc || clicked.src, time: Date.now() };
    } else {
      var box = photos.getBoundingClientRect();
      stage.style.left = box.left + "px";
      stage.style.top = box.top + "px";
      stage.style.width = box.width + "px";
      stage.style.height = box.height + "px";
      sources.forEach(function (source) { placeClone(source, stage, box); });
      entry = {
        mode: "pair",
        left: sources[0].currentSrc || sources[0].src,
        right: sources[1] ? (sources[1].currentSrc || sources[1].src) : "",
        time: Date.now()
      };
    }
    portal.append(stage);
    document.body.append(portal);
    stage.querySelectorAll("img").forEach(function (clone) {
      if (!clone.style.borderRadius) return;
      clone.animate([
        { borderRadius: clone.style.borderRadius },
        { borderRadius: "0px" }
      ], { duration: 820, easing: "cubic-bezier(.55,.05,.2,1)", fill: "forwards" });
    });
    // 상세 페이지를 실제로 뒤에 렌더링해 문서 로딩 구간을 확대 화면으로 가린다.
    try { sessionStorage.removeItem('travel-entry'); } catch (e) {}
    var destination = document.createElement('iframe');
    destination.className = 'travel-destination';
    destination.title = '여행 상세 페이지 전환 미리보기';
    destination.setAttribute('aria-hidden', 'true');
    destination.tabIndex = -1;
    var ready = new Promise(function (resolve) {
      destination.addEventListener('load', async function () {
        try {
          var photos = Array.from(destination.contentDocument.querySelectorAll('.trip-cover img'));
          await Promise.race([
            Promise.all(photos.map(function (img) { return img.decode().catch(function () {}); })),
            new Promise(function (done) { setTimeout(done, 600); })
          ]);
        } catch (e) {}
        resolve();
      }, {once: true});
      setTimeout(resolve, 2000);
    });
    destination.src = 'travel.html';
    document.body.append(destination);
    var scale = coverScale(stage.getBoundingClientRect());
    stage.style.transformOrigin = clicked ? 'center center' : '25% center';
    stage.animate([
      { transform: 'scale(1)', filter: 'blur(0px)', borderRadius: '24px' },
      { transform: 'scale(' + (scale * 1.35) + ')', filter: 'blur(8px)', borderRadius: '0px', offset: .28 },
      { transform: 'scale(' + (scale * 6) + ')', filter: 'blur(40px)', borderRadius: '0px' }
    ], {duration: 2600, easing: 'cubic-bezier(.25,.1,.65,1)', fill: 'forwards'});
    Promise.all([ready, new Promise(function (resolve) { setTimeout(resolve, 650); })]).then(function () {
      destination.style.opacity = '1';
      portal.animate([{opacity: 1}, {opacity: 0}], {
        duration: 800, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards'
      }).finished.then(function () {
        window.location.href = 'travel.html';
      });
    });
  }
  window.addEventListener('pageshow', function () {
    document.querySelectorAll('.travel-portal, .travel-destination').forEach(function (el) { el.remove(); });
    enteringTravel = false;
    document.body.classList.remove("is-leaving");
  });
  function openStory(id) {
    if (id === "twin") { window.location.href = "travel.html"; return; }
    if (id === "perspective") { window.location.href = "perspective.html"; return; }
    if (id === "graphy") { window.location.href = "vpl.html"; return; }
    var data = stories[id];
    if (!data) return;
    var article = dialog.querySelector("article");
    var img = article.querySelector(".story-visual");
    var by = article.querySelector(".story-by");
    article.querySelector(".badge").textContent = data.badge;
    article.querySelector("h3").textContent = data.title;
    img.src = data.image;
    img.alt = data.imageAlt;
    if (data.by) {
      by.hidden = false;
      by.textContent = data.by;
    } else {
      by.hidden = true;
      by.textContent = "";
    }
    var body = article.querySelector(".story-body");
    body.replaceChildren();
    data.body.forEach(function (text) {
      var p = document.createElement("p");
      p.textContent = text;
      body.appendChild(p);
    });
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    article.querySelector(".story-close").focus();
  }

  document.querySelectorAll("[data-story]").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.preventDefault();
      if (el.getAttribute("data-story") === "twin") enterTravel(el);
      else openStory(el.getAttribute("data-story"));
    });
  });

  dialog.querySelector(".story-close").addEventListener("click", function () {
    dialog.close();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Tab" && drawer.classList.contains("is-open")) {
      var links = drawer.querySelectorAll("button, a[href]");
      var first = links[0], last = links[links.length - 1];
      if (event.shiftKey && (document.activeElement === first || !drawer.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !drawer.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    }
    if (event.key === "Escape" && drawer.classList.contains("is-open")) {
      event.preventDefault();
      closeMenu();
    }
  });

  /* 스크롤 진행 막대. 헤더 아래 노란 줄이 읽은 비율만큼 찬다 */
  var readbar = document.querySelector(".readbar");
  function paintReadbar() {
    if (!readbar) return;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = height > 0 ? window.scrollY / height : 0;
    readbar.style.transform = "scaleX(" + Math.min(1, Math.max(0, ratio)) + ")";
  }
  paintReadbar();
  window.addEventListener("scroll", paintReadbar, { passive: true });
  window.addEventListener("resize", paintReadbar);

  /* 화면에 들어온 블록만 올린다. 동작 줄이기면 바로 보여 준다 */
  document.documentElement.dataset.motionReady = "true";
  var blocks = document.querySelectorAll(".rise");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    blocks.forEach(function (el) { el.classList.add("in"); });
  } else {
    var watcher = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        watcher.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    blocks.forEach(function (el) {
      if (!el.classList.contains("hero-copy")) watcher.observe(el);
    });
    // 모바일에서 사진 아래 제목까지 포함한 표지 전체를 관찰한다.
    var heroCopy = document.querySelector(".hero-copy");
    var heroFrame = document.querySelector(".hero");
    if (heroCopy && heroFrame) {
      var titleAnimations = [];
      var titlePlaying = false;
      function resetTitle() {
        titleAnimations.forEach(function (animation) { animation.cancel(); });
        titleAnimations = [];
        heroCopy.classList.remove("in");
        titlePlaying = false;
      }
      // 글자 픽셀을 목적지로 삼아 연기 입자가 모이게 한다. 텍스트 자체는 이동하지 않는다.
      function smokeIntoText(line, delay) {
        var style = getComputedStyle(line);
        var width = line.offsetWidth, height = line.offsetHeight;
        var padX = 180, padY = 75;
        var mask = document.createElement('canvas');
        mask.width = width; mask.height = height;
        var ink = mask.getContext('2d');
        if (!ink || !width || !height) return null;
        ink.font = style.fontWeight + ' ' + style.fontSize + ' ' + style.fontFamily;
        if ('letterSpacing' in ink) ink.letterSpacing = style.letterSpacing;
        ink.textBaseline = 'middle';
        ink.fillStyle = '#fff';
        ink.fillText(line.textContent, 0, height / 2);
        var pixels = ink.getImageData(0, 0, width, height).data;
        var points = [], step = Math.max(4, Math.ceil(Math.sqrt(width * height / 2200)));
        for (var y = 0; y < height; y += step) {
          for (var x = 0; x < width; x += step) {
            if (pixels[(y * width + x) * 4 + 3] > 100) {
              points.push({ x: x, y: y, drift: 90 + Math.random() * 150,
                wave: (Math.random() - .5) * 80, phase: Math.random() * Math.PI * 2 });
            }
          }
        }
        var canvas = document.createElement('canvas');
        canvas.className = 'title-smoke';
        canvas.setAttribute('aria-hidden', 'true');
        canvas.width = width + padX * 2; canvas.height = height + padY * 2;
        canvas.style.width = canvas.width + 'px'; canvas.style.height = canvas.height + 'px';
        canvas.style.left = (line.offsetLeft - padX) + 'px';
        canvas.style.top = (line.offsetTop - padY) + 'px';
        heroCopy.append(canvas);
        var ctx = canvas.getContext('2d');
        if (!ctx) { canvas.remove(); return null; }
        // 불규칙한 밀도의 연무와 가느다란 꼬리가 먼저 흐르고, 이후 글자로 응집한다.
        var wisps = Array.from({ length: 42 }, function (_, i) {
          return { along: i / 41, phase: Math.random() * Math.PI * 2,
            spread: (Math.random() - .5) * height * 1.1,
            radius: 13 + Math.random() * 19, opacity: .07 + Math.random() * .1 };
        });
        var fog = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        fog.addColorStop(0, 'rgba(241,249,248,.8)');
        fog.addColorStop(.35, 'rgba(222,239,237,.42)');
        fog.addColorStop(1, 'rgba(222,239,237,0)');
        var start = performance.now() + delay, frame;
        function draw(now) {
          var progress = Math.max(0, Math.min(1, (now - start) / 3000));
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          if (now >= start && progress < 1) {
            var remaining = Math.pow(1 - progress, 2);
            var appear = Math.min(1, progress / .16);
            // 글자가 선명해지기 전에 연기 밝기를 점진적으로 낮춰 겹침 번쩍임을 줄인다.
            var fade = Math.max(0, Math.min(1, (progress - .4) / .4));
            var dissolve = 1 - fade * fade * (3 - 2 * fade);
            var cloudFade = appear * dissolve;
            var sweep = 1 - Math.pow(1 - Math.min(1, progress / .8), 2);
            ctx.filter = 'blur(2px)';
            wisps.forEach(function (wisp) {
              var px = padX - 160 + sweep * (width + 170) - wisp.along * width * .88;
              var curl = progress * 11 - wisp.along * 7 + wisp.phase;
              var py = padY + height * .5 + Math.sin(curl) * (13 + 12 * (1 - progress)) + wisp.spread * (1 - progress);
              var radius = wisp.radius * (1 + .2 * Math.sin(curl * 1.4));
              ctx.save();
              ctx.translate(px, py);
              ctx.rotate(Math.sin(curl) * .2);
              ctx.scale(radius * 3.5, radius * .85);
              ctx.globalAlpha = cloudFade * wisp.opacity;
              ctx.fillStyle = fog;
              ctx.fillRect(-1, -1, 2, 2);
              ctx.restore();
            });
            // 기존 바람의 꼬리는 유지하되 글자 완성 전에 부드럽게 사라진다.
            ctx.strokeStyle = '#e9f6f2';
            ctx.filter = 'blur(4px)';
            for (var ribbon = 0; ribbon < 6; ribbon++) {
              var head = padX - 100 + sweep * (width + 110);
              var center = padY + height / 2 + Math.sin(progress * 9 + ribbon) * 18;
              ctx.globalAlpha = cloudFade * .055;
              ctx.lineWidth = 3 + ribbon % 3;
              ctx.beginPath();
              ctx.moveTo(head - width * .8, center + Math.sin(ribbon) * 26);
              ctx.bezierCurveTo(head - width * .55, center - 35, head - width * .25, center + 36, head, center);
              ctx.stroke();
            }
            ctx.fillStyle = '#f4f9f8';
            ctx.filter = 'blur(' + (1 + 7 * remaining) + 'px)';
            points.forEach(function (point) {
              var px = padX + point.x - point.drift * remaining;
              var py = padY + point.y + remaining * (point.wave + Math.sin(progress * 9 + point.phase) * 20);
              ctx.globalAlpha = Math.max(0, (progress - .32) / .68) * dissolve * (.1 + .25 * progress);
              ctx.beginPath();
              ctx.ellipse(px, py, 1.6 + 11 * remaining, 1.6 + 5 * remaining, -.15, 0, Math.PI * 2);
              ctx.fill();
            });
          }
          if (progress < 1) frame = requestAnimationFrame(draw);
          else canvas.remove();
        }
        frame = requestAnimationFrame(draw);
        return { cancel: function () { cancelAnimationFrame(frame); canvas.remove(); } };
      }
      function replayTitle() {
        resetTitle();
        heroCopy.classList.add("in");
        titlePlaying = true;
        heroCopy.querySelectorAll(".title-line").forEach(function (line, i) {
          if (typeof line.animate !== "function") return;
          // 장식 효과 오류가 실제 제목 표시를 막지 않게 한다.
          try {
            var smoke = smokeIntoText(line, i * 500);
            if (smoke) titleAnimations.push(smoke);
          } catch (error) {
            // 연기 캔버스 지원 여부와 관계없이 아래 실제 텍스트는 표시한다.
          }
          titleAnimations.push(line.animate([
            { offset: 0, opacity: 0, filter: "blur(10px)", transform: "none" },
            { offset: 0.48, opacity: 0, filter: "blur(7px)", transform: "none" },
            { offset: 0.72, opacity: 0.45, filter: "blur(3px)", transform: "none" },
            { offset: 1, opacity: 1, filter: "blur(0px)", transform: "none" }
          ], { duration: 3000, delay: i * 500, easing: "linear", fill: "both" }));
        });
      }
      var titleWatcher = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) resetTitle();
          else if (entry.intersectionRatio >= 0.15 && !titlePlaying) replayTitle();
        });
      }, { threshold: [0, 0.15], rootMargin: "-70px 0px 0px 0px" });
      titleWatcher.observe(heroFrame);
      window.addEventListener("pageshow", function (event) {
        if (event.persisted) {
          resetTitle();
          titleWatcher.unobserve(heroFrame);
          titleWatcher.observe(heroFrame);
        }
      });
    }
  }
  /* FOCUS carousel: 양끝 복제 컷으로 마지막→처음도 같은 방향으로 이동한다. */
  (function initFocusCarousel() {
    var root = document.querySelector('.focus-carousel');
    if (!root) return;
    var track = root.querySelector('.focus-track');
    var slides = Array.from(track.children);
    var ids = slides.map(function (slide) { return slide.dataset.story; });
    var count = slides.length;
    var index = 0, position = 1, busy = false, timer = null;
    var paused = reduce, visible = false;
    var motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    var caption = root.querySelector('.focus-caption');
    var toggle = root.querySelector('.focus-pause');
    var dots = ids.map(function (id, target) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'focus-dot';
      dot.setAttribute('aria-label', (target + 1) + '번 기사: ' + stories[id].title);
      dot.addEventListener('click', function () {
        if (target !== index) move(target - index, true);
      });
      root.querySelector('.focus-dots').append(dot);
      return dot;
    });
    function clone(slide) {
      var copy = slide.cloneNode(true);
      copy.inert = true;
      copy.setAttribute('aria-hidden', 'true');
      copy.removeAttribute('data-story');
      copy.tabIndex = -1;
      return copy;
    }
    track.prepend(clone(slides[count - 1]));
    track.append(clone(slides[0]));
    track.append(clone(slides[1])); // 처음으로 순환할 때도 그 다음 사진이 보이도록 한다.
    function place(animate) {
      track.classList.toggle('no-transition', !animate);
      // 변형된 사진 폭 대신 트랙의 원래 폭으로 이동 거리를 계산한다.
      var slideWidth = track.getBoundingClientRect().width;
      Array.from(track.children).forEach(function (slide, physicalIndex) {
        slide.classList.toggle('is-main', physicalIndex === position);
      });
      var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      track.style.transform = 'translate3d(-' + position * (slideWidth + gap) + 'px, 0, 0)';
    }
    function update(manual) {
      var data = stories[ids[index]];
      var isVoice = ids[index] === 'voice';
      caption.classList.toggle('is-voice', isVoice);
      caption.querySelector('.focus-voice-extra').hidden = !isVoice;
      caption.querySelector('.focus-description').hidden = isVoice;
      caption.querySelector('.badge').textContent = data.badge;
      caption.querySelector('h3').textContent = data.title;
      caption.querySelector('.focus-description').textContent = index === 0
        ? '한전인의 2027 새해 바람을 담은 영상을 보고 이벤트에 참여해보세요.' : data.body[0];
      caption.querySelector('.more').dataset.story = ids[index];
      root.querySelector('.focus-count').textContent = String(index + 1).padStart(2, '0') + ' / 04';
      slides.forEach(function (slide, i) {
        slide.inert = i !== index;
        slide.setAttribute('aria-hidden', String(i !== index));
      });
      dots.forEach(function (dot, i) { dot.setAttribute('aria-current', String(i === index)); });
      if (manual) root.querySelector('.focus-announcement').textContent = (index + 1) + ' / ' + count + '. ' + data.title;
    }
    // 가장 긴 기사 설명을 기준으로 모든 슬라이드의 버튼/구분선 높이를 통일한다.
    function syncCaptionHeight() {
      var width = caption.getBoundingClientRect().width;
      if (!width) return;
      var height = 0;
      ids.forEach(function (id) {
        var data = stories[id], isVoice = id === 'voice';
        var sample = caption.cloneNode(true);
        sample.setAttribute('aria-hidden', 'true'); sample.inert = true;
        sample.style.cssText = 'position:absolute;left:0;top:0;visibility:hidden;pointer-events:none;width:' + width + 'px;min-height:0;height:auto;';
        sample.classList.toggle('is-voice', isVoice);
        sample.querySelector('.badge').textContent = data.badge;
        sample.querySelector('h3').textContent = data.title;
        sample.querySelector('.focus-voice-extra').hidden = !isVoice;
        sample.querySelector('.focus-description').hidden = isVoice;
        sample.querySelector('.focus-description').textContent = data.body[0];
        root.append(sample);
        height = Math.max(height, sample.getBoundingClientRect().height);
        sample.remove();
      });
      caption.style.minHeight = Math.ceil(height) + 'px';
    }
    function schedule() {
      clearTimeout(timer);
      if (!paused && visible && !document.hidden && !busy) {
        timer = setTimeout(function () { move(1, false); }, 4000);
      }
    }
    function finish() {
      if (!busy) return;
      if (position === 0) position = count;
      if (position === count + 1) position = 1;
      place(false);
      busy = false;
      schedule();
    }
    function move(direction, manual) {
      if (busy) return;
      clearTimeout(timer);
      busy = true;
      // 이전의 무애니메이션 위치를 먼저 확정해 복제 컷 복귀와 분리한다.
      void track.offsetWidth;
      position += direction;
      index = (index + direction + count) % count;
      place(!motionQuery.matches);
      update(manual);
      setTimeout(finish, motionQuery.matches ? 0 : 830);
    }
    root.querySelector('.focus-prev').addEventListener('click', function () { move(-1, true); });
    root.querySelector('.focus-next').addEventListener('click', function () { move(1, true); });
    function updateToggle() {
      toggle.textContent = paused ? '자동 재생' : '일시정지';
      toggle.setAttribute('aria-label', paused ? '자동 슬라이드 재생' : '자동 슬라이드 일시정지');
    }
    toggle.addEventListener('click', function () { paused = !paused; updateToggle(); schedule(); });
    // 수동 조작 후 포인터/포커스가 버튼에 남아도 자동 재생을 계속한다.
    // 사용자가 누른 일시정지, 화면 이탈, 비활성 탭에서만 타이머를 멈춘다.
    root.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        // 현재 이미지 버튼의 포커스가 inert 처리로 사라지지 않도록 한다.
        root.querySelector(event.key === 'ArrowLeft' ? '.focus-prev' : '.focus-next').focus();
        move(event.key === 'ArrowLeft' ? -1 : 1, true);
      }
    });
    var touch = null, swiped = false;
    var viewport = root.querySelector('.focus-viewport');
    viewport.addEventListener('touchstart', function (event) {
      var point = event.touches[0]; touch = { x: point.clientX, y: point.clientY }; swiped = false;
    }, { passive: true });
    viewport.addEventListener('touchend', function (event) {
      if (!touch) return;
      var point = event.changedTouches[0], dx = point.clientX - touch.x, dy = point.clientY - touch.y;
      touch = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) { swiped = true; move(dx < 0 ? 1 : -1, true); }
    }, { passive: true });
    viewport.addEventListener('touchcancel', function () { touch = null; }, { passive: true });
    viewport.addEventListener('click', function (event) {
      if (swiped) { event.preventDefault(); event.stopPropagation(); swiped = false; }
    }, true);
    window.addEventListener('resize', function () { place(false); syncCaptionHeight(); });
    document.addEventListener('visibilitychange', schedule);
    motionQuery.addEventListener('change', function (event) { paused = event.matches; updateToggle(); schedule(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; schedule(); }, { threshold: .15 }).observe(root);
    } else { visible = true; }
    place(false); update(false); updateToggle(); syncCaptionHeight(); schedule();
    if (document.fonts) document.fonts.ready.then(syncCaptionHeight);
  })();
  (function initIndustrialLights() {
    var scene = document.querySelector('.perspective');
    if (!scene || !('IntersectionObserver' in window)) return;
    scene.classList.add('lighting-ready');
    var copy = scene.querySelector('.perspective-copy');
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
})();
