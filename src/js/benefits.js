const initializeBenefitsInfo = () => {
  const benefitsItems = document.querySelectorAll('.benefits-item');

  benefitsItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.transform = 'scale(1.2)';
      item.style.backgroundColor = '#F0F0F0';
      item.style.transition = 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)';
      item.style.zIndex = '1';
      item.style.paddingLeft = '5px';
    });

    item.addEventListener('mouseout', () => {
      item.style.transform = 'scale(1)';
      item.style.backgroundColor = 'transparent';
      item.style.zIndex = '0';
      item.style.paddingLeft = '0';
    });
  });
};

export default initializeBenefitsInfo;
