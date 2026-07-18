const root = document.documentElement;
const body = document.body;
const loader = document.querySelector('.loader');
const progressBar = document.querySelector('.progress-bar');
const cursorGlow = document.querySelector('.cursor-glow');
const canvas = document.querySelector('.neural-canvas');
const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const toggleTheme = document.querySelector('.theme-toggle');
const heroTyping = document.querySelector('.typing');
const reveals = Array.from(document.querySelectorAll('.reveal'));
const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
const counters = Array.from(document.querySelectorAll('[data-counter]'));
const faqItems = Array.from(document.querySelectorAll('.faq-item'));
const form = document.querySelector('.contact-form');
const progressLabel = document.querySelector('.reading-progress');

const themeState = localStorage.getItem('awakening-theme') || 'dark';
body.classList.toggle('light', themeState === 'light');

function setTheme(mode) {
  body.classList.toggle('light', mode === 'light');
  localStorage.setItem('awakening-theme', mode);
  toggleTheme.textContent = mode === 'light' ? '☀' : '☾';
}
if (toggleTheme) {
  toggleTheme.addEventListener('click', () => setTheme(body.classList.contains('light') ? 'dark' : 'light'));
}
setTheme(themeState);

function initLoader() {
  window.addEventListener('load', () => {
    window.setTimeout(() => loader?.classList.add('is-hidden'), 540);
  });
}

function initProgressBar() {
  let latestScroll = window.scrollY;
  const update = () => {
    latestScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, (latestScroll / height) * 100) : 0;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (progressLabel) progressLabel.textContent = `${Math.round(percent)}%`;
    ticking = false;
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  });
  update();
}

function initCursorGlow() {
  if (!cursorGlow) return;
  window.addEventListener('pointermove', (event) => {
    cursorGlow.animate({ left: `${event.clientX}px`, top: `${event.clientY}px` }, { duration: 300, fill: 'forwards' });
    cursorGlow.style.opacity = '1';
  });
  window.addEventListener('pointerleave', () => {
    cursorGlow.style.opacity = '0';
  });
}

function initTyping() {
  if (!heroTyping) return;
  const words = ['cognition', 'consciousness', 'emergence', 'synthetic thought'];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  const type = () => {
    const current = words[wordIndex];
    heroTyping.textContent = current.slice(0, charIndex);
    if (!deleting && charIndex < current.length) {
      charIndex += 1;
    } else if (!deleting && charIndex === current.length) {
      deleting = true;
      window.setTimeout(type, 1200);
      return;
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
    } else {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
    window.setTimeout(type, deleting ? 45 : 90);
  };
  type();
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -12% 0px' });

  reveals.forEach((item, index) => {
    if (!item.dataset.revealDelay) {
      const delay = Math.min(index * 60, 320);
      item.style.setProperty('--reveal-delay', `${delay}ms`);
    }
    observer.observe(item);
  });
}

function initParallax() {
  if (!parallaxItems.length) return;

  let latestScroll = window.scrollY;
  let ticking = false;

  const update = () => {
    parallaxItems.forEach((item) => {
      const factor = Number(item.dataset.parallaxFactor || item.dataset.parallax || 0.08);
      const direction = item.dataset.parallaxDirection || 'vertical';
      const eased = latestScroll * factor;
      if (direction === 'horizontal') {
        item.style.setProperty('--parallax-x', `${eased.toFixed(2)}px`);
        item.style.setProperty('--parallax-y', '0px');
      } else {
        item.style.setProperty('--parallax-x', '0px');
        item.style.setProperty('--parallax-y', `${eased.toFixed(2)}px`);
      }
    });
    ticking = false;
  };

  const onScroll = () => {
    latestScroll = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const target = Number(entry.target.dataset.counter || 0);
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const current = Math.floor(target * progress);
        entry.target.textContent = `${current}${entry.target.dataset.suffix || ''}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.8 });
  counters.forEach((counter) => observer.observe(counter));
}

function initFaq() {
  faqItems.forEach((item) => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach((entry) => entry.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });
}

function validateForm() {
  if (!form) return;
  const status = form.querySelector('.form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const email = data.get('email')?.toString() || '';
    const message = data.get('message')?.toString() || '';
    if (!email.includes('@') || message.trim().length < 12) {
      status.textContent = 'A valid address and a longer note are required before transmission.';
      return;
    }
    status.textContent = 'Transmission accepted. The network will acknowledge your intent shortly.';
    form.reset();
  });
}

function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function initPageTransition() {
  document.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (!target || target.target === '_blank' || target.getAttribute('href')?.startsWith('#')) return;
    const href = target.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;
    event.preventDefault();
    body.classList.add('page-transitioning');
    window.setTimeout(() => {
      window.location.href = href;
    }, 320);
  });
}

function buildCanvasScene() {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let hue = 180;

  const resize = () => {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(90, Math.floor((window.innerWidth + window.innerHeight) / 35)) }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.5 + 0.6,
    }));
  };

  const animate = () => {
    ctx.fillStyle = 'rgba(3, 6, 17, 0.16)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    hue = (hue + 0.08) % 360;

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
      if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

      ctx.beginPath();
      ctx.fillStyle = `hsla(${hue}, 90%, 72%, 0.7)`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(115,247,255,${1 - dist / 140})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animate);
  };

  resize();
  animate();
  window.addEventListener('resize', resize);
}

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initProgressBar();
  initCursorGlow();
  initTyping();
  initReveal();
  initParallax();
  initCounters();
  initFaq();
  validateForm();
  initActiveNav();
  initPageTransition();
  buildCanvasScene();
});
