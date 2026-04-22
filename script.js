/* ============================================================
   Birthday Webpage — Ma'am Farwa Zainab
   Wished by: Asif Nawaz
   JavaScript: script.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. GENERATE FALLING PETALS DYNAMICALLY
  ---------------------------------------------------------- */
  const petalConfigs = [
    { left: '4%',  width: '13px', height: '17px', duration: '7s',   delay: '0s',    bg: 'radial-gradient(#ffd6e7, #e88aab)' },
    { left: '14%', width: '20px', height: '25px', duration: '9s',   delay: '1.5s',  bg: null },
    { left: '24%', width: '12px', height: '16px', duration: '6s',   delay: '3s',    bg: 'radial-gradient(#fce4ec, #f48fb1)' },
    { left: '37%', width: '16px', height: '20px', duration: '8s',   delay: '0.8s',  bg: null },
    { left: '50%', width: '22px', height: '27px', duration: '10s',  delay: '2s',    bg: 'radial-gradient(#ffd6e7, #d4637a)' },
    { left: '63%', width: '14px', height: '18px', duration: '7s',   delay: '4s',    bg: null },
    { left: '74%', width: '18px', height: '22px', duration: '9s',   delay: '1s',    bg: 'radial-gradient(#fce4ec, #e57395)' },
    { left: '84%', width: '20px', height: '24px', duration: '8s',   delay: '3.5s',  bg: null },
    { left: '92%', width: '11px', height: '15px', duration: '6s',   delay: '0.3s',  bg: 'radial-gradient(#ffd6e7, #e88aab)' },
    { left: '44%', width: '16px', height: '20px', duration: '11s',  delay: '5s',    bg: null },
    { left: '58%', width: '14px', height: '18px', duration: '8.5s', delay: '2.8s',  bg: 'radial-gradient(#fde8ee, #f06292)' },
    { left: '8%',  width: '19px', height: '23px', duration: '10s',  delay: '6s',    bg: null },
  ];

  const petalsWrap = document.getElementById('petalsWrap');

  if (petalsWrap) {
    petalConfigs.forEach(function (cfg) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.left            = cfg.left;
      petal.style.width           = cfg.width;
      petal.style.height          = cfg.height;
      petal.style.animationDuration = cfg.duration;
      petal.style.animationDelay  = cfg.delay;
      if (cfg.bg) petal.style.background = cfg.bg;
      petalsWrap.appendChild(petal);
    });
  }

  /* ----------------------------------------------------------
     2. CANDLE CLICK — BLOW OUT / RELIGHT
  ---------------------------------------------------------- */
  const flames = document.querySelectorAll('.flame');

  flames.forEach(function (flame) {
    flame.addEventListener('click', function () {
      const isOut = flame.style.opacity === '0';
      if (isOut) {
        // Relight
        flame.style.opacity  = '1';
        flame.style.boxShadow = '0 0 8px 3px rgba(255,165,0,.45)';
        flame.style.animationPlayState = 'running';
      } else {
        // Blow out
        flame.style.opacity   = '0';
        flame.style.boxShadow = 'none';
        flame.style.animationPlayState = 'paused';
        showToast('🌬️ Blow out! Make a wish!');
      }

      // Check if all candles are out
      const allOut = Array.from(flames).every(function (f) {
        return f.style.opacity === '0';
      });
      if (allOut) {
        setTimeout(function () {
          showToast('🎉 Happy Birthday, Ma\'am Farwa Zainab! 🎂');
          launchConfetti();
        }, 400);
      }
    });
  });

  /* ----------------------------------------------------------
     3. TOAST NOTIFICATION
  ---------------------------------------------------------- */
  function showToast(message) {
    // Remove any existing toast
    const existing = document.getElementById('bdToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'bdToast';
    Object.assign(toast.style, {
      position:        'fixed',
      bottom:          '30px',
      left:            '50%',
      transform:       'translateX(-50%)',
      background:      '#c0395a',
      color:           '#fff',
      padding:         '12px 28px',
      borderRadius:    '50px',
      fontFamily:      "'Playfair Display', serif",
      fontSize:        '1rem',
      boxShadow:       '0 4px 20px rgba(0,0,0,.18)',
      zIndex:          '9999',
      opacity:         '0',
      transition:      'opacity .4s ease',
      whiteSpace:      'nowrap',
      pointerEvents:   'none',
    });
    toast.textContent = message;
    document.body.appendChild(toast);

    // Fade in
    requestAnimationFrame(function () {
      toast.style.opacity = '1';
    });

    // Fade out after 3s
    setTimeout(function () {
      toast.style.opacity = '0';
      setTimeout(function () { toast.remove(); }, 500);
    }, 3000);
  }

  /* ----------------------------------------------------------
     4. CONFETTI BURST (CSS-only particles via JS)
  ---------------------------------------------------------- */
  function launchConfetti() {
    const colors = ['#c0395a', '#c9a84c', '#f4afc5', '#ffd6e7', '#e8c060', '#f48fb1'];
    const container = document.createElement('div');
    container.id = 'confettiContainer';
    Object.assign(container.style, {
      position:      'fixed',
      inset:         '0',
      pointerEvents: 'none',
      zIndex:        '9998',
      overflow:      'hidden',
    });
    document.body.appendChild(container);

    for (let i = 0; i < 80; i++) {
      const dot = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size  = (Math.random() * 8 + 5) + 'px';
      const left  = (Math.random() * 100) + 'vw';
      const delay = (Math.random() * 1.2) + 's';
      const dur   = (Math.random() * 1.5 + 1.5) + 's';

      Object.assign(dot.style, {
        position:         'absolute',
        top:              '-20px',
        left:             left,
        width:            size,
        height:           size,
        borderRadius:     Math.random() > 0.5 ? '50%' : '2px',
        background:       color,
        animation:        'confettiFall ' + dur + ' ' + delay + ' ease forwards',
        opacity:          '1',
      });
      container.appendChild(dot);
    }

    // Inject confettiFall keyframe once
    if (!document.getElementById('confettiStyle')) {
      const style = document.createElement('style');
      style.id = 'confettiStyle';
      style.textContent = `
        @keyframes confettiFall {
          0%   { transform: translateY(0)    rotate(0deg);   opacity: 1; }
          100% { transform: translateY(105vh) rotate(720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    // Clean up after animation
    setTimeout(function () { container.remove(); }, 5000);
  }

  /* ----------------------------------------------------------
     5. SCROLL-TRIGGERED FADE-IN for cards & sections
  ---------------------------------------------------------- */
  const observables = document.querySelectorAll('.card, .bless, .thankyou, .best, .from-box, footer');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observables.forEach(function (el) {
      // Start hidden for scroll reveal (CSS animation handles first load)
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     6. GREETING HINT on page load
  ---------------------------------------------------------- */
  window.addEventListener('load', function () {
    setTimeout(function () {
      showToast('🕯️ Click a candle to make a wish!');
    }, 2000);
  });

})();
