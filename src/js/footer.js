const initializeActivateSocLinks = () => {
  const logoLink = document.querySelector('.footer-logo-link');
  const socLinks = document.querySelectorAll('.footer-soc-link');

  logoLink.addEventListener('mouseover', () => {
    logoLink.style.transition = 'transform 0.3s ease';
    logoLink.style.position = 'relative';
    logoLink.style.transform = 'scale(1.3) translate(65px, -10px)';
    logoLink.style.zIndex = '1';
    logoLink.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.6)';
  });

  logoLink.addEventListener('mouseout', () => {
    logoLink.style.transform = 'scale(1)';
    logoLink.style.zIndex = '0';
    logoLink.style.textShadow = 'none';
  });

  socLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.position = 'relative';
      link.style.transform = 'scale(1.4) rotate(360deg) translate(10px, -10px)';
      link.style.zIndex = '1';
      link.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.6)';
    });

    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1) rotate(0deg)';
      link.style.zIndex = '0';
      link.style.textShadow = 'none';
    });
  });
};

export default initializeActivateSocLinks;
