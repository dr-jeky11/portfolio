document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuOpenBtn = document.querySelector('.mobile-menu-open');
  const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
  const backdrop = document.querySelector('.backdrop');
  const mobileMenuNavLinks = document.querySelectorAll('.mobile-menu-nav a');

  function openMobileMenu() {
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    backdrop.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }

  mobileMenuOpenBtn.addEventListener('click', openMobileMenu);
  mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

  mobileMenuNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileMenu);
  });

  shopNowLink.addEventListener('click', function (event) {
    const targetSectionId = shopNowLink.getAttribute('href');
    const targetSection = document.querySelector(targetSectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
      event.preventDefault();
    }
  });
});

window.onload = function () {
  const discountSpan = document.querySelector('.up-to-40');
  discountSpan.classList.add('pulse');
};

// switcher

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

const themeCheckbox = document.querySelector('.switch-theme-checkbox');

themeCheckbox.addEventListener('change', toggleTheme);

const savedTheme = localStorage.getItem('theme') || 'light';
document.body.setAttribute('data-theme', savedTheme);

themeCheckbox.checked = savedTheme === 'dark';
