const initializeBenefitsInfo = () => {
  const benefitsItems = document.querySelectorAll('.benefits-item');

  benefitsItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.12) translate(10px, -10px)';
      item.style.transition = 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)';
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
