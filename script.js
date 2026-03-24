/* ============================================
   ZOKA.WORKS — JavaScript v2.0
   Professional Enhancement: Scroll animations,
   nav, form, particles, counters, mouse glow,
   scroll progress, parallax
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ──────────────────────────────────────────
  // 1. SCROLL REVEAL (Intersection Observer)
  // ──────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach((el) => {
    const siblings = el.parentElement.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
    const siblingIndex = Array.from(siblings).indexOf(el);
    el.dataset.delay = siblingIndex * 120;
    revealObserver.observe(el);
  });

  // ──────────────────────────────────────────
  // 2. NAVBAR SCROLL EFFECT
  // ──────────────────────────────────────────
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ──────────────────────────────────────────
  // 3. MOBILE NAV TOGGLE
  // ──────────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ──────────────────────────────────────────
  // 4. SMOOTH SCROLL
  // ──────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });



  // ──────────────────────────────────────────
  // 6. PARTICLE CANVAS (Hero background)
  // ──────────────────────────────────────────
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    let width, height;

    const resize = () => {
      const hero = canvas.parentElement;
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      particles = [];
      const count = Math.min(Math.floor((width * height) / 14000), 70);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationFrameId);
      init();
      animate();
    });
  }

  // ──────────────────────────────────────────
  // 7. HERO ENTRANCE ANIMATION
  // ──────────────────────────────────────────
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) {
    heroH1.style.opacity = '0';
    heroH1.style.transform = 'translateY(20px)';
    heroH1.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';

    setTimeout(() => {
      heroH1.style.opacity = '1';
      heroH1.style.transform = 'translateY(0)';
    }, 100);
  }

  const heroPara = document.querySelector('.hero p');
  const heroButtons = document.querySelector('.hero-buttons');
  const heroBadge = document.querySelector('.hero-badge');
  const trustStrip = document.querySelector('.trust-strip');

  [heroBadge, heroPara, heroButtons, trustStrip].forEach((el, i) => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.8s ease ${0.5 + i * 0.2}s, transform 0.8s ease ${0.5 + i * 0.2}s`;

      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100);
    }
  });

  // ──────────────────────────────────────────
  // 8. SCROLL PROGRESS BAR
  // ──────────────────────────────────────────
  const scrollProgress = document.getElementById('scrollProgress');

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = progress + '%';
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ──────────────────────────────────────────
  // 9. MOUSE GLOW EFFECT (desktop only)
  // ──────────────────────────────────────────
  const mouseGlow = document.getElementById('mouseGlow');

  if (window.matchMedia('(min-width: 769px)').matches && mouseGlow) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let isMouseInHero = false;

    const heroSection = document.getElementById('hero');

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if mouse is in hero area for stronger glow
      const heroRect = heroSection.getBoundingClientRect();
      isMouseInHero = mouseY < heroRect.bottom;
    });

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      mouseGlow.style.left = glowX + 'px';
      mouseGlow.style.top = glowY + 'px';

      if (isMouseInHero) {
        mouseGlow.classList.add('active');
      } else {
        mouseGlow.classList.remove('active');
      }

      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }

  // ──────────────────────────────────────────
  // 10. ANIMATED STAT COUNTERS
  // ──────────────────────────────────────────
  const counterElements = document.querySelectorAll('.result-value[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const startTime = performance.now();

        const easeOut = (t) => 1 - Math.pow(1 - t, 3);

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = easeOut(progress);
          const current = Math.round(easedProgress * target);

          el.textContent = prefix + current + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      }
    });
  }, {
    threshold: 0.5
  });

  counterElements.forEach(el => counterObserver.observe(el));

  // Handle the infinity symbol (no counter animation needed)
  const symbolElements = document.querySelectorAll('.result-value[data-symbol]');
  symbolElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.8s ease';

    const symbolObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          symbolObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    symbolObserver.observe(el);
  });

  // ──────────────────────────────────────────
  // 11. PARALLAX ON HERO ELEMENTS
  // ──────────────────────────────────────────
  const heroVisual = document.querySelector('.hero-visual');
  const heroAurora = document.querySelector('.hero-aurora');

  const handleParallax = () => {
    const scrollY = window.scrollY;
    const heroHeight = document.querySelector('.hero').offsetHeight;

    if (scrollY < heroHeight) {
      const ratio = scrollY / heroHeight;

      if (heroVisual) {
        heroVisual.style.transform = `translateY(calc(-50% + ${scrollY * 0.15}px))`;
      }

      if (heroAurora) {
        heroAurora.style.transform = `translateY(${scrollY * 0.08}px)`;
      }
    }
  };

  window.addEventListener('scroll', handleParallax, { passive: true });

});
