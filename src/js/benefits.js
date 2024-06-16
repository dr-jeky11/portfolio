import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const initializeBenefitsInfo = () => {
  const benefitsList = document.querySelector('.benefits-list');
  benefitsList.addEventListener('click', () => {
    iziToast.info({
      theme: 'dark',
      message:
        'Offer me a project right now and get all the benefits and even more!',
      backgroundColor: '#00b068',
      messageColor: '#FFF',
      messageSize: '40px',
      position: 'center',
      maxWidth: 320,
    });
  });
};

export default initializeBenefitsInfo;
