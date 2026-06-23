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
    return link.textContent.trim() === 'Products';
  });
  if (productsNavLink && !productsNavLink.closest('.nav-dropdown')) {
    const li = productsNavLink.parentElement;
    if (li) {
      li.classList.add('nav-dropdown');
      productsNavLink.classList.add('nav-dropdown-toggle');
      productsNavLink.setAttribute('aria-haspopup', 'true');
      productsNavLink.setAttribute('aria-expanded', 'false');
      productsNavLink.innerHTML = '<span>Products</span><svg class="nav-dropdown-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      const homeNavLink = Array.from(document.querySelectorAll('.nav-links a')).find(function(link) {
        return link.textContent.trim() === 'Home';
      });
      const homeHref = homeNavLink ? homeNavLink.getAttribute('href') || 'index.html' : 'index.html';
      const prefix = homeHref.replace(/index\.html(?:[#?].*)?$/, '');
      const base = prefix + 'products/index.html';
      const menu = document.createElement('div');
      menu.className = 'nav-dropdown-menu';
      menu.innerHTML = '<div class="nav-dropdown-kicker">Product Directory</div>' +
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

      const subject = 'IndustHub Inquiry - ' + (inquiry.company || inquiry.name || 'Website Visitor');
      const bodyLines = [
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
        btn.textContent = 'Preparing email...';
        btn.disabled = true;
      }
      window.location.href = mailto;

      contactForm.innerHTML = '<div class="form-success active">' +
        '<div class="form-success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg></div>' +
        '<h3>Inquiry Prepared</h3>' +
        '<p>Your email client should open with the inquiry ready to send. If it does not open, copy the inquiry summary below and email it to sales@industhub.com.</p>' +
        '<textarea class="inquiry-copy" readonly>' + body.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</textarea>' +
        '<a class="btn btn-primary btn-lg" href="' + mailto + '">Open Email Again</a>' +
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

