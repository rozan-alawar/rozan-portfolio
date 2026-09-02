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
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';
      });
    });
  }
});

// Photo View Toggle Helper (Studio Dark Cutout vs Workspace Original)
let currentPhotoIsDark = true;
function togglePortraitView() {
  const img = document.getElementById('about-portrait-img');
  if (!img) return;
  
  currentPhotoIsDark = !currentPhotoIsDark;
  img.style.transform = 'scale(0.96)';
  img.style.opacity = '0.5';

  setTimeout(() => {
    img.src = currentPhotoIsDark ? 'assets/images/user_portrait_dark.jpg' : 'assets/images/user_portrait_original.jpg';
    img.style.transform = 'scale(1)';
    img.style.opacity = '1';
  }, 200);
}

