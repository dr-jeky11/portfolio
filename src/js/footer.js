const initializeActivateSocLinks = () => {
  const socLinks = document.querySelectorAll('.footer-soc-link');

  socLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.position = 'relative';
      link.style.transform = 'scale(1.8) rotate(360deg)';
      link.style.zIndex = '1';
      link.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.6)';
    });

    link.addEventListener('mouseout', () => {
      link.style.transform = 'scale(1)';
      link.style.zIndex = '0';
      link.style.textShadow = 'none';
    });
  });
};

export default initializeActivateSocLinks;
