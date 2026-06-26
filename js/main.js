// IndustHub - English static site interactions
document.addEventListener('DOMContentLoaded', function() {
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

  const productsNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
    const text = link.textContent.trim();
    return text === 'Products' || text === '产品';
  });
  if (productsNavLink && !productsNavLink.closest('.nav-dropdown')) {
    const li = productsNavLink.parentElement;
    if (li) {
      const isChineseNav = document.documentElement.lang && document.documentElement.lang.toLowerCase().indexOf('zh') === 0;
      li.classList.add('nav-dropdown');
      productsNavLink.classList.add('nav-dropdown-toggle');
      productsNavLink.setAttribute('aria-haspopup', 'true');
      productsNavLink.setAttribute('aria-expanded', 'false');
      productsNavLink.innerHTML = '<span>' + (isChineseNav ? '产品' : 'Products') + '</span><svg class="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const homeNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
        const text = link.textContent.trim();
        return text === 'Home' || text === '首页';
      });
      const homeHref = homeNavLink ? homeNavLink.getAttribute('href') || 'index.html' : 'index.html';
      const prefix = homeHref.replace(/index\.html(?:[#?].*)?$/, '');
      const base = prefix + 'products/index.html';
      const menu = document.createElement('div');
      menu.className = 'nav-dropdown-menu';
      menu.innerHTML = isChineseNav ? '<div class="nav-dropdown-kicker">产品目录</div>' +
        '<a href="' + base + '"><strong>全部产品</strong><span>浏览完整产品中心</span></a>' +
        '<a href="' + prefix + 'products/seal-connectors/index.html"><strong>快速密封连接器</strong><span>螺纹、管口、充注、抽真空、液冷</span></a>' +
        '<a href="' + prefix + 'products/leak-detectors/index.html"><strong>检漏仪系统</strong><span>L320、L330、L520、L530 标准机型</span></a>' +
        '<a href="' + prefix + 'products/seal-connectors/categories/liquid-cooling.html"><strong>液冷接头</strong><span>冷却回路和维护连接方案</span></a>' +
        '<a href="' + prefix + 'contact.html"><strong>喷码 / 标识询盘</strong><span>为后续设备线预留入口</span></a>' :
        '<div class="nav-dropdown-kicker">Product Directory</div>' +
        '<a href="' + base + '"><strong>All Products</strong><span>Browse the full product center</span></a>' +
        '<a href="' + prefix + 'products/seal-connectors/index.html"><strong>Quick Seal Connectors</strong><span>Threads, tubes, filling, evacuation, cooling</span></a>' +
        '<a href="' + prefix + 'products/leak-detectors/index.html"><strong>Leak Detection Systems</strong><span>L320, L330, L520, L530 leak testers</span></a>' +
        '<a href="' + prefix + 'products/seal-connectors/categories/liquid-cooling.html"><strong>Liquid Cooling Connectors</strong><span>Cooling loop and service connectors</span></a>' +
        '<a href="' + prefix + 'contact.html"><strong>Coding / Marking Inquiry</strong><span>Reserved route for future equipment lines</span></a>';
      li.appendChild(menu);
      li.addEventListener('mouseenter', function() { productsNavLink.setAttribute('aria-expanded', 'true'); });
      li.addEventListener('mouseleave', function() { productsNavLink.setAttribute('aria-expanded', 'false'); });
      productsNavLink.addEventListener('focus', function() { productsNavLink.setAttribute('aria-expanded', 'true'); });
      menu.addEventListener('focusout', function(e) {
        if (!li.contains(e.relatedTarget)) productsNavLink.setAttribute('aria-expanded', 'false');
      });
    }
  }

  if (navLinks && !navLinks.querySelector('.nav-lang-link')) {
    const homeNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
      return link.textContent.trim() === 'Home' || link.textContent.trim() === '首页';
    });
    const isChinesePage = document.documentElement.lang && document.documentElement.lang.toLowerCase().indexOf('zh') === 0;
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
    const li = document.createElement('li');
    const langLink = document.createElement('a');
    langLink.className = 'nav-lang-link';
    langLink.href = targetHref;
    langLink.textContent = isChinesePage ? 'EN' : '中文';
    li.appendChild(langLink);
    const quoteItem = navLinks.querySelector('.btn') ? navLinks.querySelector('.btn').closest('li') : null;
    if (quoteItem) {
      navLinks.insertBefore(li, quoteItem);
    } else {
      navLinks.appendChild(li);
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
    if (!slides.length) return;
    slides[currentSlide].classList.remove('active');
    if (dots.length && dots[currentSlide]) dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    if (dots.length && dots[currentSlide]) dots[currentSlide].classList.add('active');
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
        '应用方向: ' + (inquiry.application || '未填写'),
        '项目时间: ' + (inquiry.timeline || '未填写'),
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
        'Application focus: ' + (inquiry.application || 'Not specified'),
        'Project timeline: ' + (inquiry.timeline || 'Not specified'),
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

