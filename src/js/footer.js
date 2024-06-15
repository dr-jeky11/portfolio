const initializeActivateSocLinks = () => {
    const socLinks = document.querySelectorAll('.footer-soc-link');
  
    socLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.color = '#00b068';
        link.style.position = 'relative';
        link.style.transform = 'scale(2)' + 'rotate(360deg)';
        link.style.zIndex = '1';
        link.style.textShadow = '0 4px 8px rgba(0, 0, 0, 0.6)';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.color = '#292929';
        link.style.transform = 'scale(1)';
        link.style.zIndex = '0';
        link.style.textShadow = 'none';
      });
    });
  };
  
  export default initializeActivateSocLinks;