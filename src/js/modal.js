const initializeModal = () => {
  const burgerIcon = document.querySelector('.burger-icon');
  const closeModal = document.querySelector('.close-modal');
  const modalHeader = document.querySelector('.modal-header');

  const closeModalFunction = () => {
    modalHeader.classList.remove('is-active');
    modalHeader.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    setTimeout(() => {
      burgerIcon.style.display = 'block';
      closeModal.style.display = 'none';
    }, 500);
  };

  burgerIcon.addEventListener('click', () => {
    modalHeader.classList.add('is-active');
    modalHeader.classList.remove('is-hidden');
    burgerIcon.style.display = 'none';
    closeModal.style.display = 'block';
    document.body.classList.add('modal-open');
  });

  closeModal.addEventListener('click', closeModalFunction);

  modalHeader.addEventListener('click', e => {
    if (e.target === modalHeader) {
      closeModalFunction();
    }
  });

  const modalLinks = document.querySelectorAll(
    '.modal-content .header-menu-link'
  );
  modalLinks.forEach(link => {
    link.addEventListener('click', closeModalFunction);
  });
};

export default initializeModal;