const initializeBenefitsInfo = () => {
  const benefitsItems = document.querySelectorAll('.benefits-item');

  benefitsItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.12) translate(10px, -10px)';
      item.style.transition = 'transform 0.4s ease';
      item.style.zIndex = '1';
    });

    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.backgroundColor = 'transparent';
      item.style.zIndex = '0';
    });
  });
};

export default initializeBenefitsInfo;
