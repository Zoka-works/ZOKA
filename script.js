/* ============================================
   ZOKA.WORKS — Script v3.0
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────
  // 1. SCROLL REVEAL (multi-class, stagger)
  // ──────────────────────────────────────
  const allReveal = document.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-scale');

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0);
      setTimeout(() => el.classList.add('visible'), delay);
      revealObs.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  allReveal.forEach(el => revealObs.observe(el));


  // ──────────────────────────────────────
  // 2. HERO ENTRANCE (staggered)
  // ──────────────────────────────────────
  const heroRevealEls = document.querySelectorAll('.reveal-fade');
  heroRevealEls.forEach(el => {
    const delay = parseInt(el.dataset.delay || 0);
    setTimeout(() => el.classList.add('visible'), delay + 200);
  });


  // ──────────────────────────────────────
  // 3. NAVBAR SCROLL + ACTIVE LINKS
  // ──────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const onScroll = () => {
    // Scrolled class
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Scroll progress
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = window.scrollY / docH * 100;
    document.getElementById('scrollProgress').style.width = pct + '%';

    // Active link highlight
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });

    // Parallax blobs
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero && scrollY < hero.offsetHeight * 1.5) {
      const b1 = document.querySelector('.blob-1');
      const b2 = document.querySelector('.blob-2');
      if (b1) b1.style.transform = `translateY(${scrollY * 0.12}px)`;
      if (b2) b2.style.transform = `translateY(${-scrollY * 0.08}px)`;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once


  // ──────────────────────────────────────
  // 4. HAMBURGER MENU
  // ──────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinksEl = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksEl.classList.toggle('active');
    document.body.style.overflow = navLinksEl.classList.contains('active') ? 'hidden' : '';
  });

  navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinksEl.classList.remove('active');
      document.body.style.overflow = '';
    });
  });


  // ──────────────────────────────────────
  // 5. SMOOTH SCROLL
  // ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  // ──────────────────────────────────────
  // 6. PARTICLE CANVAS
  // ──────────────────────────────────────
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [], raf, W, H;

    const resize = () => {
      W = canvas.width  = canvas.parentElement.offsetWidth;
      H = canvas.height = canvas.parentElement.offsetHeight;
    };

    class P {
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.4 + 0.4;
        this.vx = (Math.random() - 0.5) * 0.28;
        this.vy = (Math.random() - 0.5) * 0.28;
        this.a = Math.random() * 0.25 + 0.06;
      }
      constructor() { this.reset(); }
      step() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${this.a})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      const n = Math.min(Math.floor(W * H / 14000), 65);
      for (let i = 0; i < n; i++) particles.push(new P());
    };

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${(1 - d/130) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.step(); p.draw(); });
      connect();
      raf = requestAnimationFrame(loop);
    };

    init(); loop();
    window.addEventListener('resize', () => { cancelAnimationFrame(raf); init(); loop(); });
  }


  // ──────────────────────────────────────
  // 7. ANIMATED COUNTERS
  // ──────────────────────────────────────
  const counterEls = document.querySelectorAll('[data-count]');

  const countObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const start = performance.now();
      const easeOut = t => 1 - Math.pow(1 - t, 3);
      const tick = now => {
        const p = Math.min((now - start) / duration, 1);
        const val = Math.round(easeOut(p) * target);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counterEls.forEach(el => countObs.observe(el));


  // ──────────────────────────────────────
  // 8. MOUSE GLOW (desktop)
  // ──────────────────────────────────────
  const glow = document.getElementById('mouseGlow');
  if (glow && window.matchMedia('(min-width: 769px)').matches) {
    let mx = 0, my = 0, gx = 0, gy = 0;
    const hero = document.getElementById('hero');

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    const animGlow = () => {
      gx += (mx - gx) * 0.07;
      gy += (my - gy) * 0.07;
      glow.style.left = gx + 'px';
      glow.style.top  = gy + 'px';
      const inHero = hero && my < hero.getBoundingClientRect().bottom + 100;
      glow.classList.toggle('active', inHero);
      requestAnimationFrame(animGlow);
    };
    animGlow();
  }


  // ──────────────────────────────────────
  // 9. SERVICE TAB TOGGLE
  // ──────────────────────────────────────
  const tabs = document.querySelectorAll('.service-tab');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => {
        p.classList.remove('active');
        p.style.animation = '';
      });
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      if (target) {
        target.classList.add('active');
        target.style.animation = 'tabIn 0.4s cubic-bezier(0.16,1,0.3,1) both';
        // Re-trigger reveals inside new panel
        target.querySelectorAll('.reveal, .reveal-fade').forEach(el => {
          el.classList.remove('visible');
          setTimeout(() => revealObs.observe(el), 10);
        });
      }
    });
  });


  // ──────────────────────────────────────
  // 10. CARD TILT (subtle 3D, desktop)
  // ──────────────────────────────────────
  if (window.matchMedia('(min-width: 769px)').matches) {
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `translateY(-4px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.35s, box-shadow 0.35s';
      });
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease, border-color 0.35s, box-shadow 0.35s';
      });
    });
  }


  // (marquee is handled in HTML/CSS directly)

});

// ──────────────────────────────────────
// CSS INJECTION: Tab animation keyframe
// ──────────────────────────────────────
const style = document.createElement('style');
style.textContent = `
  @keyframes tabIn {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .nav-link.active {
    color: var(--text-1) !important;
    background: rgba(255,255,255,0.07) !important;
  }
`;
document.head.appendChild(style);
