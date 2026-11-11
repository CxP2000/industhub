// IndustHub - English static site interactions
document.addEventListener('DOMContentLoaded', function() {
  // JS is running: disable the no-JS fallback reveal animation so the normal
  // scroll-triggered reveal (IntersectionObserver -> .visible) drives the page.
  document.documentElement.classList.add('js-ok');

  // Defined here (before the nav arrows are built) so all runtime labels can
  // pick the right language. The later `isZh` constant below reuses this.
  const isZhPage = (document.documentElement.lang || '').toLowerCase().indexOf('zh') === 0;

  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function() {
      const expanded = navLinks.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(expanded));
      toggle.classList.toggle('open', expanded);
    });

    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('open');
        navLinks.classList.remove('active');
      });
    });
  }

  // Wrap .nav-links in a positioned container and inject left/right scroll arrows.
  let navArrowUpdate = null;
  if (navLinks && navLinks.parentElement) {
    const wrap = document.createElement('div');
    wrap.className = 'nav-scroll-wrap';
    navLinks.parentElement.insertBefore(wrap, navLinks);
    wrap.appendChild(navLinks);

    const prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'nav-arrow prev';
    prevBtn.setAttribute('aria-label', isZhPage ? '向左滚动导航' : 'Scroll navigation left');
    prevBtn.innerHTML = '&#8249;';
    prevBtn.disabled = true;
    const nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'nav-arrow next';
    nextBtn.setAttribute('aria-label', isZhPage ? '向右滚动导航' : 'Scroll navigation right');
    nextBtn.innerHTML = '&#8250;';
    wrap.appendChild(prevBtn);
    wrap.appendChild(nextBtn);

    const SCROLL_STEP = 280;
    prevBtn.addEventListener('click', function() {
      navLinks.scrollLeft = Math.max(0, navLinks.scrollLeft - SCROLL_STEP);
    });
    nextBtn.addEventListener('click', function() {
      navLinks.scrollLeft = Math.min(navLinks.scrollWidth - navLinks.clientWidth, navLinks.scrollLeft + SCROLL_STEP);
    });

    function updateNavArrows() {
      const overflow = navLinks.scrollWidth > navLinks.clientWidth + 2;
      wrap.classList.toggle('can-scroll', overflow && window.innerWidth > 640);
      prevBtn.disabled = navLinks.scrollLeft <= 1;
      nextBtn.disabled = navLinks.scrollLeft >= navLinks.scrollWidth - navLinks.clientWidth - 1;
    }
    navArrowUpdate = updateNavArrows;
    navLinks.addEventListener('scroll', updateNavArrows, { passive: true });
  }

  // 计算相对站点前缀：优先取 logo 的 href（logo 是权威首页链接，层级在各页均正确），
  // 回退到导航内的「首页」项，最后兜底 'index.html'。
  // 这样即使某个页面的导航「首页」链接层级被批量脚本写错，整条导航也不会全部失效。
  const logoLink = document.querySelector('a.logo');
  const homeNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
    const text = link.textContent.trim();
    return text === 'Home' || text === '首页';
  });
  const homeHref =
    (logoLink && logoLink.getAttribute('href')) ||
    (homeNavLink && homeNavLink.getAttribute('href')) ||
    'index.html';
  const prefix = homeHref.replace(/index\.html(?:[#?].*)?$/, '');
  const isZh = isZhPage;

  const chevronSVG = '<svg class="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // --- Horizontal-scroll nav: keep hover dropdowns from being clipped ---
  // When top-level items overflow, JS marks `.nav-scroll`. The dropdown is then
  // switched to position:fixed so the scroll container can't clip it.
  function placeNavDropdown(li) {
    const menu = li.querySelector('.nav-dropdown-menu');
    if (!menu) return;
    if (!navLinks || !navLinks.classList.contains('nav-scroll')) {
      clearNavDropdown(li);
      return;
    }
    const rect = li.getBoundingClientRect();
    const mw = menu.offsetWidth || 390;
    let left = rect.left;
    const minLeft = 10;
    const maxLeft = Math.max(minLeft, window.innerWidth - mw - 10);
    if (left > maxLeft) left = maxLeft;
    if (left < minLeft) left = minLeft;
    menu.style.position = 'fixed';
    menu.style.left = left + 'px';
    menu.style.right = 'auto';
    menu.style.top = rect.bottom + 'px';
    menu.style.transform = 'none';
  }
  function clearNavDropdown(li) {
    const menu = li.querySelector('.nav-dropdown-menu');
    if (!menu) return;
    menu.style.position = '';
    menu.style.left = '';
    menu.style.right = '';
    menu.style.top = '';
    menu.style.transform = '';
  }

  function buildDropdown(toggleHref, toggleLabel, kicker, items) {
    const li = document.createElement('li');
    li.className = 'nav-dropdown';
    const toggle = document.createElement('a');
    toggle.className = 'nav-dropdown-toggle';
    toggle.href = prefix + toggleHref;
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span>' + toggleLabel + '</span>' + chevronSVG;
    const menu = document.createElement('div');
    menu.className = 'nav-dropdown-menu';
    let html = kicker ? '<div class="nav-dropdown-kicker">' + kicker + '</div>' : '';
    let lastGroup = null;
    items.forEach(function(it) {
      if (it.group && it.group !== lastGroup) {
        html += '<div class="nav-dropdown-group">' + it.group + '</div>';
        lastGroup = it.group;
      }
      html += '<a href="' + prefix + it.href + '"><strong>' + it.strong + '</strong><span>' + it.span + '</span></a>';
    });
    menu.innerHTML = html;
    li.appendChild(toggle);
    li.appendChild(menu);
    li.addEventListener('mouseenter', function() { toggle.setAttribute('aria-expanded', 'true'); placeNavDropdown(li); });
    li.addEventListener('mouseleave', function() { toggle.setAttribute('aria-expanded', 'false'); clearNavDropdown(li); });
    toggle.addEventListener('focus', function() { toggle.setAttribute('aria-expanded', 'true'); placeNavDropdown(li); });
    menu.addEventListener('focusout', function(e) {
      if (!li.contains(e.relatedTarget)) { toggle.setAttribute('aria-expanded', 'false'); clearNavDropdown(li); }
    });
    return li;
  }

  const sealItems = isZh ? [
    { href: 'products/seal-connectors/categories/threaded.html', strong: '螺纹密封连接器', span: '内、外螺纹与管螺纹快封' },
    { href: 'products/seal-connectors/categories/tube-od.html', strong: '管外径密封连接器', span: '光滑圆管外径密封' },
    { href: 'products/seal-connectors/categories/tube-id.html', strong: '管内径密封连接器', span: '管口内孔密封' },
    { href: 'products/seal-connectors/categories/irregular.html', strong: '异形管密封连接器', span: '异形与非标管口密封' },
    { href: 'products/seal-connectors/categories/face-seal.html', strong: '端面密封连接器', span: '端面与平面密封' },
    { href: 'products/seal-connectors/categories/automation.html', strong: '自动化气密检测方案', span: 'G10 + G15 自动化组合' }
  ] : [
    { href: 'products/seal-connectors/categories/threaded.html', strong: 'Threaded Quick Seal Connectors', span: 'Internal, external & pipe threads' },
    { href: 'products/seal-connectors/categories/tube-od.html', strong: 'Tube OD Seal Connectors', span: 'Smooth OD sealing' },
    { href: 'products/seal-connectors/categories/tube-id.html', strong: 'Tube ID Seal Connectors', span: 'Internal bore sealing' },
    { href: 'products/seal-connectors/categories/irregular.html', strong: 'Irregular Tube Seal Connectors', span: 'Non-standard tube ports' },
    { href: 'products/seal-connectors/categories/face-seal.html', strong: 'Face Seal Connectors', span: 'Face / flat sealing' },
    { href: 'products/seal-connectors/categories/automation.html', strong: 'Automated Leak Test Solutions', span: 'G10 + G15 automation' }
  ];

  const leakItems = isZh ? [
    { href: 'products/leak-detectors/models/l520-differential-manual-regulator.html', strong: 'L520 差压检漏仪', span: '手动调压 · 高精度' },
    { href: 'products/leak-detectors/models/l530-differential-electronic-regulator.html', strong: 'L530 差压检漏仪', span: '电子调压 · 更高灵敏度' },
  ] : [
    { href: 'products/leak-detectors/models/l520-differential-manual-regulator.html', strong: 'L520 Differential Pressure', span: 'Manual regulator · high accuracy' },
    { href: 'products/leak-detectors/models/l530-differential-electronic-regulator.html', strong: 'L530 Differential Pressure', span: 'Electronic regulator · higher sensitivity' },
  ];

  const fluidItems = isZh ? [
    { href: 'products/seal-connectors/categories/liquid-cooling-male-female.html', strong: '液冷快换接头', span: 'UQD / UQDB / BMQC / MQD / C783 / C78' },
    { href: 'products/seal-connectors/categories/c-series-male-female.html', strong: 'C 系列公母头', span: '公母成对 · 颜色编码 · 大流量对接' }
  ] : [
    { href: 'products/seal-connectors/categories/liquid-cooling-male-female.html', strong: 'Liquid Cooling Couplings', span: 'UQD / UQDB / BMQC / MQD / C783 / C78' },
    { href: 'products/seal-connectors/categories/c-series-male-female.html', strong: 'C Series Male-Female', span: 'Paired couplings · colour coded' }
  ];

  // EN only：行业应用下拉保留 8 行业。ZH 资讯中心是普通导航项（直达 hub 页），无下拉。

  const productsLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
    const text = link.textContent.trim();
    return text === 'Products' || text === '产品';
  });
  const applicationsLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
    const text = link.textContent.trim();
    return text === 'Applications' || text === '行业应用' || text === '应用案例' || text === '资讯中心';
  });

  // Plain top-level nav item (single page, no dropdown) for independent product lines.
  function buildNavItem(href, label) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = prefix + href;
    a.textContent = label;
    li.appendChild(a);
    return li;
  }

  // EN product center removed — product-line dropdowns exist for the Chinese site only.
  const productsItem = productsLink ? productsLink.parentElement : null;
  const applicationsItem = applicationsLink ? applicationsLink.parentElement : null;
  const anchorItem = productsItem || applicationsItem;
  if (anchorItem && anchorItem.parentElement) {
    const parent = anchorItem.parentElement;
    const productNavItems = [];
    let sealLi = null, leakLi = null, fluidLi = null, cylinderLi = null, electricalLi = null;
    if (isZh) {
      sealLi = buildDropdown('products/seal-connectors/index.html', '快速密封连接器', '按连接类型', sealItems);
      leakLi = buildDropdown('products/leak-detectors/index.html', '气密性检漏仪', '按机型', leakItems);
      fluidLi = buildDropdown('products/seal-connectors/categories/liquid-cooling-male-female.html', '液冷和公母头', '按产品类型', fluidItems);
      cylinderLi = buildNavItem('products/seal-connectors/categories/gas-cylinder-filling.html', '气瓶充装');
      electricalLi = buildNavItem('products/seal-connectors/categories/electrical-connectors.html', '电连接器');
      productNavItems.push(sealLi, leakLi, fluidLi, cylinderLi, electricalLi);
    } else {
      // EN mirrors the ZH product-line navigation so both sites share one IA.
      sealLi = buildDropdown('products/seal-connectors/index.html', 'Quick Seal Connectors', 'By Connection Type', sealItems);
      leakLi = buildDropdown('products/leak-detectors/index.html', 'Leak Detectors', 'By Model', leakItems);
      fluidLi = buildDropdown('products/seal-connectors/categories/liquid-cooling-male-female.html', 'Liquid Cooling', 'By Product Type', fluidItems);
      cylinderLi = buildNavItem('products/seal-connectors/categories/gas-cylinder-filling.html', 'Cylinder Filling');
      electricalLi = buildNavItem('products/seal-connectors/categories/electrical-connectors.html', 'Electrical');
      productNavItems.push(sealLi, leakLi, fluidLi, cylinderLi, electricalLi);
      // EN: remove the legacy "News" top-level link (news lives in Resources).
      const newsLink = Array.from(parent.querySelectorAll('a')).find(function(link) {
        return link.textContent.trim() === 'News' && (link.getAttribute('href') || '').indexOf('news.html') !== -1;
      });
      if (newsLink) newsLink.parentElement.remove();
    }
    const appLi = isZh
      ? buildNavItem('resources/index.html', '资讯中心')
      : buildNavItem('resources/index.html', 'Resources');
    productNavItems.forEach(function(it) { parent.insertBefore(it, anchorItem); });
    if (appLi) parent.insertBefore(appLi, anchorItem);
    if (productsItem) productsItem.remove();
    if (applicationsItem) applicationsItem.remove();
    // ZH: drop the legacy standalone "新闻" top-level link — news is a channel inside the 资讯中心 hub.
    if (isZh) {
      Array.from(parent.children).forEach(function(li) {
        const a = li.querySelector('a');
        if (!a) return;
        const t = a.textContent.trim();
        const href = a.getAttribute('href') || '';
        if ((t === '新闻' || t === '资讯') && href.indexOf('news.html') !== -1) li.remove();
      });
    }
    // Highlight the active section.
    const path = window.location.pathname.replace(/\\/g, '/');
    if (sealLi && leakLi && fluidLi && cylinderLi && electricalLi) {
      if (path.indexOf('/liquid-cooling') !== -1 || path.indexOf('/male-female-quick') !== -1 ||
          path.indexOf('/c-series-male-female') !== -1) {
        fluidLi.querySelector('a').classList.add('active');
      } else if (path.indexOf('/gas-cylinder-filling') !== -1) {
        cylinderLi.querySelector('a').classList.add('active');
      } else if (path.indexOf('/electrical-connectors') !== -1) {
        electricalLi.querySelector('a').classList.add('active');
      } else if (path.indexOf('/products/seal-connectors') !== -1) {
        sealLi.querySelector('a').classList.add('active');
      } else if (path.indexOf('/products/leak-detectors') !== -1) {
        leakLi.querySelector('a').classList.add('active');
      }
    }
    if (appLi && path.indexOf('/resources') !== -1) {
      appLi.querySelector('a').classList.add('active');
    }
  }

  // Horizontal-scroll nav: only engage when the top-level items actually overflow.
  function updateNavScroll() {
    if (!navLinks) return;
    if (window.innerWidth <= 640) {
      navLinks.classList.remove('nav-scroll');
      if (navArrowUpdate) navArrowUpdate();
      return;
    }
    navLinks.classList.add('nav-scroll');
    void navLinks.offsetWidth; // force reflow so scrollWidth reflects the constrained width
    if (navLinks.scrollWidth <= navLinks.clientWidth + 2) {
      navLinks.classList.remove('nav-scroll');
    }
    if (navArrowUpdate) navArrowUpdate();
  }
  updateNavScroll();
  window.addEventListener('resize', updateNavScroll);
  window.addEventListener('load', updateNavScroll);
  if (navLinks) {
    navLinks.addEventListener('scroll', function() {
      const openLi = navLinks.querySelector('.nav-dropdown:hover') || navLinks.querySelector('.nav-dropdown:focus-within');
      if (openLi) placeNavDropdown(openLi);
    }, { passive: true });

    // Drag-to-scroll: press and drag the nav bar left/right (mouse). Touch uses
    // native horizontal swipe via touch-action:pan-x. This makes the horizontal
    // scroll obvious instead of relying on the vertical mouse wheel.
    let dragging = false, startX = 0, startLeft = 0, moved = false;
    navLinks.addEventListener('pointerdown', function(e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      if (!navLinks.classList.contains('nav-scroll')) return;
      if (navLinks.scrollWidth <= navLinks.clientWidth + 2) return;
      dragging = true; moved = false;
      startX = e.clientX; startLeft = navLinks.scrollLeft;
      navLinks.classList.add('dragging');
    });
    window.addEventListener('pointermove', function(e) {
      if (!dragging) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      navLinks.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function() {
      if (!dragging) return;
      dragging = false;
      navLinks.classList.remove('dragging');
      if (moved) {
        const suppress = function(ev) {
          ev.preventDefault(); ev.stopPropagation();
          navLinks.removeEventListener('click', suppress, true);
        };
        navLinks.addEventListener('click', suppress, true);
        setTimeout(function() { navLinks.removeEventListener('click', suppress, true); }, 60);
      }
    });
  }

  const enableLanguageSwitch = true;
  const isChinesePage = document.documentElement.lang && document.documentElement.lang.toLowerCase().indexOf('zh') === 0;
  // Chinese pages without an English counterpart (batch 2 not yet published)
  // must not offer an EN link that would 404. Marked with data-en-page.
  const enAvailable = !isChinesePage || document.documentElement.hasAttribute('data-en-page');
  const navbarContainer = document.querySelector('.site-navbar .container');
  if (enableLanguageSwitch && enAvailable && navLinks && navbarContainer && !document.querySelector('.nav-lang-switch')) {
    const homeNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
      return link.textContent.trim() === 'Home' || link.textContent.trim() === '首页';
    });
    const homeHref = homeNavLink ? homeNavLink.getAttribute('href') || 'index.html' : 'index.html';
    const rootPrefix = homeHref.replace(/index\.html(?:[#?].*)?$/, '');
    const pathParts = window.location.pathname.replace(/\\/g, '/').split('/').filter(Boolean);
    const depth = (homeHref.match(/\.\.\//g) || []).length;
    const relParts = pathParts.slice(-(depth + 1));
    const currentRelativePath = relParts.length ? relParts.join('/') : 'index.html';
    let targetHref = rootPrefix + 'zh/' + currentRelativePath;
    if (isChinesePage) {
      const zhIndex = pathParts.lastIndexOf('zh');
      const zhRelParts = zhIndex >= 0 ? pathParts.slice(zhIndex + 1) : ['index.html'];
      const zhRelativePath = zhRelParts.length ? zhRelParts.join('/') : 'index.html';
      const upToEnglishRoot = '../'.repeat(Math.max(1, zhRelParts.length));
      targetHref = upToEnglishRoot + zhRelativePath;
    }
    // Outside .nav-links / .nav-scroll-wrap: the language switch must not
    // consume width inside the horizontal scroller or sit under its arrows.
    const box = document.createElement('div');
    box.className = 'nav-lang-switch';
    const langLink = document.createElement('a');
    langLink.className = 'nav-lang-link';
    langLink.href = targetHref;
    langLink.textContent = isChinesePage ? 'EN' : '中文';
    langLink.setAttribute('aria-label', isChinesePage ? 'Switch to English' : 'Switch to Chinese');
    box.appendChild(langLink);
    const toggler = navbarContainer.querySelector('.mobile-toggle');
    if (toggler) {
      navbarContainer.insertBefore(box, toggler);
    } else {
      navbarContainer.appendChild(box);
    }
  }

  // The quote CTA was the last item inside the scroller, so the right scroll
  // arrow covered its label whenever the nav overflowed. Park it beside the
  // language switch, outside the scroller, so both are always visible.
  const quoteA = navLinks ? navLinks.querySelector('a.btn') : null;
  if (quoteA && navbarContainer) {
    const quoteBox = document.createElement('div');
    quoteBox.className = 'nav-quote-switch';
    const quoteLi = quoteA.closest('li');
    quoteBox.appendChild(quoteA);
    if (quoteLi) quoteLi.remove();
    const langBox = navbarContainer.querySelector('.nav-lang-switch');
    if (langBox) {
      navbarContainer.insertBefore(quoteBox, langBox);
    } else {
      navbarContainer.appendChild(quoteBox);
    }
  }

  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dots .dot');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    if (!slides.length || index === currentSlide || !slides[index]) return;
    const prev = slides[currentSlide];
    const next = slides[index];
    const forward = index > currentSlide;

    // Outgoing slide glides out to the opposite side (horizontal).
    prev.classList.remove('active', 'slide-in-left', 'slide-in-right');
    prev.classList.add(forward ? 'slide-out-left' : 'slide-out-right');

    // Incoming slide: snap to the entry side with no transition, then glide to center.
    next.classList.remove('active', 'slide-out-left', 'slide-out-right', 'slide-in-left', 'slide-in-right');
    next.style.transition = 'none';
    next.style.visibility = 'visible';
    next.style.opacity = '1';
    next.style.transform = forward ? 'translateX(100%)' : 'translateX(-100%)';
    void next.offsetWidth; // commit the off-screen start position

    requestAnimationFrame(function () {
      next.classList.add('active');
      next.style.transition = '';
      next.style.transform = '';
      next.style.opacity = '';
      next.style.visibility = '';
    });

    currentSlide = index;
    dots.forEach(function (d) {
      d.classList.toggle('active', Number(d.getAttribute('data-index')) === index);
    });
    clearTimeout(prev._slideOutTimer);
    prev._slideOutTimer = setTimeout(function () {
      prev.classList.remove('slide-out-left', 'slide-out-right');
    }, 620);
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  if (slides.length > 1) {
    slideInterval = setInterval(nextSlide, 7000);
    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        const idx = parseInt(this.getAttribute('data-index'), 10);
        if (Number.isNaN(idx)) return;
        goToSlide(idx);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
      });
    });

    let touchStartX = 0;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
      });
      hero.addEventListener('touchend', function(e) {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) <= 50) return;
        clearInterval(slideInterval);
        goToSlide(diff > 0 ? (currentSlide + 1) % slides.length : (currentSlide - 1 + slides.length) % slides.length);
        slideInterval = setInterval(nextSlide, 7000);
      });
    }

    // Prev/next arrow buttons
    const prevBtn = document.querySelector('.hero-prev');
    const nextBtn = document.querySelector('.hero-next');
    function manualGo(targetIndex) {
      clearInterval(slideInterval);
      goToSlide(targetIndex);
      slideInterval = setInterval(nextSlide, 7000);
    }
    if (prevBtn) prevBtn.addEventListener('click', function () {
      manualGo((currentSlide - 1 + slides.length) % slides.length);
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      manualGo((currentSlide + 1) % slides.length);
    });
  }

  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  backToTopBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 15l-6-6-6 6"/></svg>';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
    backToTopBtn.classList.toggle('visible', window.scrollY > 400);
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const fadeElements = document.querySelectorAll('.scroll-fade');
  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    fadeElements.forEach(function(el) {
      fadeObserver.observe(el);
    });
  } else {
    fadeElements.forEach(function(el) {
      el.classList.add('visible');
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const isChineseForm = document.documentElement.lang && document.documentElement.lang.toLowerCase().indexOf('zh') === 0;
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const btn = contactForm.querySelector('button[type="submit"]');
      const getValue = function(id) {
        const field = document.getElementById(id);
        return field ? field.value.trim() : '';
      };
      const getSelectedText = function(id) {
        const field = document.getElementById(id);
        if (!field || field.selectedIndex < 0) return '';
        return field.options[field.selectedIndex].text.trim();
      };

      const inquiry = {
        name: getValue('name'),
        company: getValue('company'),
        email: getValue('email'),
        phone: getValue('phone'),
        country: getValue('country'),
        interest: getSelectedText('interest'),
        application: getSelectedText('application'),
        timeline: getSelectedText('timeline'),
        details: getValue('details'),
        message: getValue('message'),
        page: window.location.href
      };

      const subject = 'IndustHub Inquiry - ' + (inquiry.company || inquiry.name || (isChineseForm ? '网站访客' : 'Website Visitor'));
      const bodyLines = isChineseForm ? [
        '来自 IndustHub 网站的新询盘',
        '',
        '姓名: ' + inquiry.name,
        '公司: ' + inquiry.company,
        '邮箱: ' + inquiry.email,
        '电话 / WhatsApp: ' + (inquiry.phone || '未填写'),
        '国家 / 地区: ' + (inquiry.country || '未填写'),
        '感兴趣的产品: ' + inquiry.interest,
        ...(inquiry.application ? ['应用方向: ' + inquiry.application] : []),
        ...(inquiry.timeline ? ['项目时间: ' + inquiry.timeline] : []),
        '技术信息: ' + (inquiry.details || '未填写'),
        '',
        '留言:',
        inquiry.message,
        '',
        '来源页面: ' + inquiry.page
      ] : [
        'New inquiry from IndustHub website',
        '',
        'Name: ' + inquiry.name,
        'Company: ' + inquiry.company,
        'Email: ' + inquiry.email,
        'Phone / WhatsApp: ' + (inquiry.phone || 'Not specified'),
        'Country / Region: ' + (inquiry.country || 'Not specified'),
        'Product interest: ' + inquiry.interest,
        ...(inquiry.application ? ['Application focus: ' + inquiry.application] : []),
        ...(inquiry.timeline ? ['Project timeline: ' + inquiry.timeline] : []),
        'Technical details: ' + (inquiry.details || 'Not specified'),
        '',
        'Message:',
        inquiry.message,
        '',
        'Source page: ' + inquiry.page
      ];
      const body = bodyLines.join('\n');
      const mailto = 'mailto:sales@industhub.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      if (btn) {
        btn.textContent = isChineseForm ? '正在准备邮件...' : 'Preparing email...';
        btn.disabled = true;
      }
      window.location.href = mailto;

      contactForm.innerHTML = '<div class="form-success active">' +
        '<div class="form-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg></div>' +
        '<h3>' + (isChineseForm ? '询盘已准备' : 'Inquiry Prepared') + '</h3>' +
        '<p>' + (isChineseForm ? '你的邮件客户端应该会打开并生成询盘内容。如果没有打开，请复制下面的询盘信息并发送到 sales@industhub.com。' : 'Your email client should open with the inquiry ready to send. If it does not open, copy the inquiry summary below and email it to sales@industhub.com.') + '</p>' +
        '<textarea class="inquiry-copy" readonly>' + body.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</textarea>' +
        '<a class="btn btn-primary btn-lg" href="' + mailto + '">' + (isChineseForm ? '再次打开邮件' : 'Open Email Again') + '</a>' +
        '</div>';
    });
  }
});

(function() {
  if (localStorage.getItem('cookieConsent')) return;
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  setTimeout(function() {
    banner.classList.add('show');
  }, 800);

  const accept = document.getElementById('cookie-accept');
  const deny = document.getElementById('cookie-deny');

  function closeBanner(value) {
    localStorage.setItem('cookieConsent', value);
    banner.classList.remove('show');
    setTimeout(function() {
      banner.remove();
    }, 400);
  }

  if (accept) accept.addEventListener('click', function() { closeBanner('accepted'); });
  if (deny) deny.addEventListener('click', function() { closeBanner('denied'); });
})();
