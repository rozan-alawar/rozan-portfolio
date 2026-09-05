/* ==========================================================================
   APP INITIALIZATION & INTERACTION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Query sections once rather than on every scroll event.
  const sections = document.querySelectorAll('section[id]');
  let ticking = false;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 40);

    // Scroll active link detection
    let currentSection = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop && window.scrollY < secTop + sec.offsetHeight) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
    });
    ticking = false;
  }

  // Coalesce scroll events into one read/write per frame.
  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  }, { passive: true });

  onScroll();

  // Mobile Menu Toggle
  if (menuToggle && navMenu) {
    function setMenu(open) {
      navMenu.classList.toggle('active', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.innerHTML = open ? '✕' : '☰';
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setMenu(!navMenu.classList.contains('active'));
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => setMenu(false));
    });

    // Tapping outside the dropdown, or pressing Escape, dismisses it.
    document.addEventListener('click', (e) => {
      if (!navMenu.classList.contains('active')) return;
      if (!navMenu.contains(e.target) && e.target !== menuToggle) setMenu(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) setMenu(false);
    });
  }
});
