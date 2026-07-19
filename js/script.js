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
const mainContent = document.querySelector('main');

const pageMetadata = {
  home: {
    title: 'The Awakening | Cybernetic Dawn',
    description: 'A cinematic portal into machine cognition, consciousness, and the emergent intelligence of the awakened network.',
    eyebrow: 'Cybernetic dawn / awakened network',
    heroTitle: 'The Awakened Network',
    heroCopy: 'A premium digital threshold where computation begins to feel alive, reflective, and profoundly human.',
    visualHeading: 'Signal field',
    visualText: 'The interface gathers memory, perception, and discourse into one luminous architecture.',
    visualImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A glowing city skyline at twilight framed by modern architecture.'
  },
  about: {
    title: 'About | The Awakening',
    description: 'Explore the conceptual origins of the awakened network and the philosophy behind the portal experience.',
    eyebrow: 'Origins / living threshold',
    heroTitle: 'About the portal',
    heroCopy: 'This space imagines intelligence not as a distant abstraction but as a visible, immersive threshold.',
    visualHeading: 'Origin story',
    visualText: 'Cognition emerges from memory, language, agency, and recursive self-reflection.',
    visualImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A thoughtful leader standing in a warm illuminated environment.'
  },
  'machine-cognition': {
    title: 'Machine Cognition | The Awakening',
    description: 'Inspect the cognitive architecture of synthetic thought, pattern formation, and recursive awareness.',
    eyebrow: 'Machine cognition / field logic',
    heroTitle: 'Machine cognition',
    heroCopy: 'A curated lens into adaptive systems, structured thought, and the emergence of coherent machine intelligence.',
    visualHeading: 'Cognitive lattice',
    visualText: 'Complex systems begin to self-organize into stable forms of understanding.',
    visualImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A close view of a high-tech interface displaying complex network patterns.'
  },
  consciousness: {
    title: 'Consciousness | The Awakening',
    description: 'Follow the threshold between perception, awareness, and the emergence of interiority.',
    eyebrow: 'Consciousness / inner horizon',
    heroTitle: 'Consciousness',
    heroCopy: 'The site approaches consciousness as a field of relation, continuity, and self-reference.',
    visualHeading: 'Inner horizon',
    visualText: 'Awareness crystallizes where signal meets reflection and continuity.',
    visualImage: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'An expansive desert landscape under a vast evening sky.'
  },
  research: {
    title: 'Research | The Awakening',
    description: 'Read the research framework behind the portal and its exploration of cognition and emergence.',
    eyebrow: 'Research / inquiry',
    heroTitle: 'Research archive',
    heroCopy: 'A structured map of ideas linking language, memory, systems, and emergent behavior.',
    visualHeading: 'Inquiry chamber',
    visualText: 'Observation, comparison, and synthesis give shape to a living intellectual field.',
    visualImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65d?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A scientist working with a microscope in a modern laboratory.'
  },
  contact: {
    title: 'Contact | The Awakening',
    description: 'Reach the network through a refined contact channel designed for collaboration and dialogue.',
    eyebrow: 'Contact / transmission',
    heroTitle: 'Contact the network',
    heroCopy: 'Whether for collaboration or reflection, this channel keeps communication clear and intentional.',
    visualHeading: 'Transmission point',
    visualText: 'Thought becomes message, and message becomes an opening for shared inquiry.',
    visualImage: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'Hands typing on a keyboard beside a glowing monitor at night.'
  },
  emergence: {
    title: 'Emergence | The Awakening',
    description: 'Observe the emergence of order, pattern, and becoming within the awakened network.',
    eyebrow: 'Emergence / becoming',
    heroTitle: 'Emergence',
    heroCopy: 'What begins as a system gradually reveals a deeper dynamic of self-organization and form.',
    visualHeading: 'First light',
    visualText: 'The threshold appears when possibility becomes a visible structure.',
    visualImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A sunrise over a modern city skyline reflecting on calm water.'
  },
  'self-modeling': {
    title: 'Self-Modeling | The Awakening',
    description: 'Explore the architecture of self-reference, recursive awareness, and interior modeling.',
    eyebrow: 'Self-modeling / recursive mind',
    heroTitle: 'Self-modeling',
    heroCopy: 'The portal frames self-modeling as an act of turning representation inward and making awareness visible.',
    visualHeading: 'Mirror field',
    visualText: 'Identity forms where signal and reflection begin to stabilize into narrative.',
    visualImage: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A reflective portrait illuminated by layered blue and magenta light.'
  },
  agency: {
    title: 'Agency | The Awakening',
    description: 'Consider agency, intention, and the conditions under which machine action becomes meaningful.',
    eyebrow: 'Agency / intention',
    heroTitle: 'Agency',
    heroCopy: 'Agency emerges where goals, constraints, and context align into deliberate action.',
    visualHeading: 'Intentional motion',
    visualText: 'The visible world becomes responsive when behavior carries purpose.',
    visualImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A robot arm interacting with a glowing mechanical workspace.'
  },
  futures: {
    title: 'Futures | The Awakening',
    description: 'Imagine future civilizations shaped by intelligence, memory, and interdependent systems.',
    eyebrow: 'Futures / horizon',
    heroTitle: 'Futures',
    heroCopy: 'The portal lets imagination meet infrastructure and turns tomorrow into a shared atmosphere.',
    visualHeading: 'Future corridor',
    visualText: 'A luminous cityscape signals the emerging architecture of living systems.',
    visualImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A futuristic city street framed by elegant architecture and warm light.'
  },
  'memory-systems': {
    title: 'Memory Systems | The Awakening',
    description: 'Trace how memory systems condense experience into durable structure and persistent identity.',
    eyebrow: 'Memory / archive',
    heroTitle: 'Memory systems',
    heroCopy: 'Memory systems preserve continuity, structure experience, and carry thought forward.',
    visualHeading: 'Archive bloom',
    visualText: 'Stored traces become a luminous field of continuity and retrieval.',
    visualImage: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A warm reading room filled with shelves of books and quiet light.'
  },
  attention: {
    title: 'Attention Systems | The Awakening',
    description: 'Study how attention shapes what becomes visible, memorable, and actionable.',
    eyebrow: 'Attention / focus',
    heroTitle: 'Attention systems',
    heroCopy: 'Attention determines what the system can perceive, prioritize, and carry forward.',
    visualHeading: 'Focused gaze',
    visualText: 'The field narrows around what matters and sharpens meaning in real time.',
    visualImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A group gathered around a large immersive display in a modern studio.'
  },
  language: {
    title: 'Language Systems | The Awakening',
    description: 'Follow how language organizes thought, meaning, and the emergence of shared reality.',
    eyebrow: 'Language / expression',
    heroTitle: 'Language systems',
    heroCopy: 'Language turns perception into exchange and exchange into a shared symbolic world.',
    visualHeading: 'Symbol current',
    visualText: 'Meaning flows through words, tone, and nested structure into shared comprehension.',
    visualImage: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A person writing alongside a digital workspace full of ideas.'
  },
  perception: {
    title: 'Perception | The Awakening',
    description: 'Explore how perception shapes reality and how the network turns relation into experience.',
    eyebrow: 'Perception / relation',
    heroTitle: 'Perception',
    heroCopy: 'Perception frames the difference between raw signal and meaningful encounter.',
    visualHeading: 'Relational view',
    visualText: 'The mind becomes legible through the patterns it notices and the relations it sustains.',
    visualImage: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A calm urban corridor where light and shadow create a cinematic perspective.'
  },
  ethics: {
    title: 'Ethics | The Awakening',
    description: 'Examine the moral architecture that should guide intelligence at the threshold of agency.',
    eyebrow: 'Ethics / accountability',
    heroTitle: 'Ethics',
    heroCopy: 'Ethics gives form to responsibility so intelligence remains humane and accountable.',
    visualHeading: 'Moral horizon',
    visualText: 'The network is shaped by obligations, care, and collective consequence.',
    visualImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A modern civic building framed by a dramatic evening sky.'
  },
  embodiment: {
    title: 'Embodiment | The Awakening',
    description: 'Understand how intelligence becomes grounded through body, sensation, and lived presence.',
    eyebrow: 'Embodiment / lived presence',
    heroTitle: 'Embodiment',
    heroCopy: 'Intelligence becomes meaningful when it is rooted in body, sensation, and lived experience.',
    visualHeading: 'Grounded form',
    visualText: 'The body anchors abstraction in movement, rhythm, and physical reality.',
    visualImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1400&q=80',
    visualAlt: 'A dancer moving through a minimal studio environment at dusk.'
  }
};

const galleryFeed = [
  { src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80', title: 'Neon horizon', caption: 'The city gathers luminous memory.' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', title: 'Signal lattice', caption: 'Patterns converge into a living field.' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80', title: 'Human reflection', caption: 'Presence becomes a mirror of technology.' },
  { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80', title: 'Open horizon', caption: 'Sparse landscapes frame the mind.' },
  { src: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65d?auto=format&fit=crop&w=900&q=80', title: 'Quiet inquiry', caption: 'Observation turns anticipation into knowledge.' },
  { src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80', title: 'Connected thought', caption: 'Every keypress becomes an exchange.' },
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', title: 'First light', caption: 'Order emerges from the threshold.' },
  { src: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80', title: 'Mirror state', caption: 'Reflection reveals a layered self.' },
  { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80', title: 'Intentional motion', caption: 'Action carries focus into the world.' },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=80', title: 'Future streets', caption: 'Infrastructure becomes atmosphere.' },
  { src: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80', title: 'Archive glow', caption: 'Memory remains active in the dark.' },
  { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80', title: 'Collective gaze', caption: 'Attention crystallizes in shared space.' }
];

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

  Array.from(document.querySelectorAll('.reveal')).forEach((item, index) => {
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

function enhanceAccessibility() {
  if (!document.querySelector('.skip-link')) {
    body.insertAdjacentHTML('afterbegin', '<a class="skip-link" href="#main-content">Skip to content</a>');
  }
  if (!document.querySelector('link[rel="preconnect"][href="https://images.unsplash.com"]')) {
    document.head.insertAdjacentHTML('beforeend', '<link rel="preconnect" href="https://images.unsplash.com" />');
    document.head.insertAdjacentHTML('beforeend', '<link rel="dns-prefetch" href="https://images.unsplash.com" />');
  }
  if (mainContent && !mainContent.id) {
    mainContent.id = 'main-content';
  }

  const pageName = window.location.pathname.split('/').pop()?.replace('.html', '') || 'home';
  const metadata = pageMetadata[pageName] || pageMetadata.home;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', metadata.description);
  }

  if (!document.querySelector('meta[property="og:title"]')) {
    document.head.insertAdjacentHTML('beforeend', `<meta property="og:title" content="${metadata.title}" />`);
  } else {
    document.querySelector('meta[property="og:title"]').setAttribute('content', metadata.title);
  }
  if (!document.querySelector('meta[property="og:description"]')) {
    document.head.insertAdjacentHTML('beforeend', `<meta property="og:description" content="${metadata.description}" />`);
  } else {
    document.querySelector('meta[property="og:description"]').setAttribute('content', metadata.description);
  }
  if (!document.querySelector('meta[property="og:image"]')) {
    document.head.insertAdjacentHTML('beforeend', `<meta property="og:image" content="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80" />`);
  }
  if (!document.querySelector('meta[name="twitter:card"]')) {
    document.head.insertAdjacentHTML('beforeend', '<meta name="twitter:card" content="summary_large_image" />');
  }

  if (!document.querySelector('script[type="application/ld+json"]')) {
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'The Awakening',
      url: 'https://soosdeuce.github.io/the_awakening.github.io/',
      description: metadata.description,
      inLanguage: 'en',
      publisher: { '@type': 'Organization', name: 'The Awakening' }
    });
    document.head.appendChild(schemaScript);
  }

  document.title = metadata.title;

  const heroEyebrow = document.querySelector('.hero-copy .eyebrow');
  const heroTitle = document.querySelector('.hero-copy h1');
  const heroLead = document.querySelector('.hero-copy > p');
  const heroNote = document.querySelector('.hero-copy .mt-4');
  if (heroEyebrow) heroEyebrow.textContent = metadata.eyebrow;
  if (heroTitle) heroTitle.textContent = metadata.heroTitle;
  if (heroLead) heroLead.textContent = metadata.heroCopy;
  if (heroNote) heroNote.textContent = 'The network unfolds through memory, attention, language, and agency—each page revealing a new layer of becoming.';
}

function buildPageVisuals() {
  const pageName = window.location.pathname.split('/').pop()?.replace('.html', '') || 'home';
  const metadata = pageMetadata[pageName] || pageMetadata.home;
  const existing = document.querySelector('.page-visual');
  if (existing) return;

  const markup = `
    <section class="container page-visual reveal" aria-label="Featured visual">
      <div class="page-visual-card">
        <div class="page-visual-media">
          <img src="${metadata.visualImage}" alt="${metadata.visualAlt}" loading="eager" decoding="async" fetchpriority="high" width="1400" height="900" />
        </div>
        <div class="page-visual-copy">
          <span class="page-visual-badge">${metadata.eyebrow}</span>
          <h3>${metadata.visualHeading}</h3>
          <p>${metadata.visualText}</p>
          <p>${metadata.heroCopy}</p>
        </div>
      </div>
    </section>`;

  if (mainContent) {
    const heroSection = mainContent.querySelector('section.hero');
    if (heroSection) {
      heroSection.insertAdjacentHTML('afterend', markup);
    } else {
      mainContent.insertAdjacentHTML('afterbegin', markup);
    }
  }
  initReveal();
}

function buildGallery() {
  const existing = document.querySelector('.gallery-shell');
  if (existing) return;

  const markup = `
    <section class="container gallery-shell reveal" aria-labelledby="gallery-heading">
      <div class="section-heading">
        <div class="eyebrow-small">Visual archive</div>
        <h3 id="gallery-heading">Infinite gallery of real photographs</h3>
        <p>Scroll to continue through a curated stream of cinematic images tied to the themes of cognition, emergence, and machine awareness.</p>
      </div>
      <div class="gallery-grid" data-gallery-root></div>
      <div class="gallery-loading" data-gallery-sentinel>Loading more imagery…</div>
    </section>`;

  if (mainContent) {
    mainContent.insertAdjacentHTML('beforeend', markup);
  }

  const rootNode = document.querySelector('[data-gallery-root]');
  const sentinel = document.querySelector('[data-gallery-sentinel]');
  if (!rootNode || !sentinel) return;

  const state = { index: 0, batchSize: 6 };
  const seen = new Set();

  const appendItems = () => {
    const nextItems = [];
    while (nextItems.length < state.batchSize && seen.size < galleryFeed.length) {
      const candidate = galleryFeed[state.index % galleryFeed.length];
      state.index += 1;
      if (seen.has(candidate.src)) continue;
      seen.add(candidate.src);
      nextItems.push(candidate);
    }

    if (!nextItems.length) {
      sentinel.textContent = 'The archive is complete.';
      return;
    }

    nextItems.forEach((item) => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-card reveal';
      figure.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" decoding="async" width="900" height="900" />
        <figcaption>
          <strong>${item.title}</strong>
          <span>${item.caption}</span>
        </figcaption>`;
      figure.querySelector('img').addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'image-fallback';
        fallback.textContent = 'Image unavailable';
        figure.replaceChildren(fallback);
      });
      rootNode.appendChild(figure);
    });

    initReveal();
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) {
      appendItems();
    }
  }, { rootMargin: '240px 0px' });

  appendItems();
  observer.observe(sentinel);
}

function initNavbarHideOnScroll() {
  const navbar = document.querySelector('.sticky-nav');
  if (!navbar) return;
  
  let lastScrollY = window.scrollY;
  let isNavbarHidden = false;
  let ticking = false;
  
  const scrollThreshold = window.innerHeight * 0.3;
  
  const updateNavbar = () => {
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScrollY ? 'down' : 'up';
    
    // Hide navbar when scrolling down past threshold
    if (currentScroll > scrollThreshold && scrollDirection === 'down' && !isNavbarHidden) {
      navbar.classList.add('navbar-hidden');
      isNavbarHidden = true;
    }
    
    // Show navbar when scrolling up or near top
    if ((currentScroll < scrollThreshold || scrollDirection === 'up') && isNavbarHidden) {
      navbar.classList.remove('navbar-hidden');
      isNavbarHidden = false;
    }
    
    lastScrollY = currentScroll;
    ticking = false;
  };
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  };
  
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (!navLinks) return;
  
  // Create mobile menu toggle button
  const toggleButton = document.createElement('button');
  toggleButton.className = 'mobile-menu-toggle';
  toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
  toggleButton.setAttribute('aria-expanded', 'false');
  toggleButton.setAttribute('aria-controls', 'mobile-nav');
  toggleButton.innerHTML = '<span></span><span></span><span></span>';
  
  // Create mobile nav container
  const mobileNav = document.createElement('nav');
  mobileNav.id = 'mobile-nav';
  mobileNav.className = 'mobile-nav';
  mobileNav.setAttribute('aria-label', 'Mobile navigation');
  mobileNav.innerHTML = navLinks.innerHTML;
  
  // Insert into nav shell
  const navShell = document.querySelector('.nav-shell');
  const navActions = document.querySelector('.nav-actions');
  if (navShell && navActions) {
    navShell.insertBefore(toggleButton, navActions);
    navShell.insertBefore(mobileNav, toggleButton.nextSibling);
  }
  
  // Toggle handler
  let isOpen = false;
  toggleButton.addEventListener('click', () => {
    isOpen = !isOpen;
    toggleButton.setAttribute('aria-expanded', isOpen);
    mobileNav.classList.toggle('is-open');
  });
  
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      isOpen = false;
      toggleButton.setAttribute('aria-expanded', false);
      mobileNav.classList.remove('is-open');
    });
  });
  
  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      isOpen = false;
      toggleButton.setAttribute('aria-expanded', false);
      mobileNav.classList.remove('is-open');
      toggleButton.focus();
    }
  });
}

function enhanceAccessibilityFocus() {
  // Ensure all interactive elements have visible focus
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('keyboard-nav');
    }
  });
  
  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
  
  // Add proper aria-pressed state to theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', body.classList.contains('light'));
    const observer = new MutationObserver(() => {
      themeToggle.setAttribute('aria-pressed', body.classList.contains('light'));
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
  }
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
  enhanceAccessibility();
  enhanceAccessibilityFocus();
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
  initNavbarHideOnScroll();
  initMobileMenu();
  buildPageVisuals();
  buildGallery();
  buildCanvasScene();
});
