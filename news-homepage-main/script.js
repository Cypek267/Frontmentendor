// =====================
//  MOBILE MENU
// =====================

const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose  = document.getElementById('menuClose');
const overlay    = document.getElementById('overlay');

function openMenu() {
  mobileMenu.classList.add('is-open');
  overlay.classList.add('is-visible');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  overlay.classList.remove('is-visible');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});

// Close menu if window resizes to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    closeMenu();
  }
});

// =====================
//  ACTIVE NAV LINK
// =====================

const navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});