import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorImg from '../img/error.svg';

const initializeForm = () => {
  const form = document.querySelector('.ltw-form');
  const modal = document.querySelector('.ltw-modal-backdrop');
  const closeBtn = document.querySelector('.ltw-modal-close-btn');
  const backdrop = document.querySelector('.ltw-modal-backdrop');
  const body = document.querySelector('body');

  form.addEventListener('submit', sendMessage);
  form.addEventListener('input', handleInput);
  closeBtn.addEventListener('click', closeModalWindow);

  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/requests';
  const STORAGE_KEY = 'form-data';

  const formData = { email: '', comment: '' };

  dataInLocalStorage();

  function handleInput(event) {
    const key = event.target.name;
    formData[key] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }

  function dataInLocalStorage() {
    const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!userData) {
      return;
    }

    const { email, comment } = form.elements;

    formData.email = userData.email;
    formData.comment = userData.comment;
    email.value = formData.email;
    comment.value = formData.comment;
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (!formData.email || !formData.comment) {
      showToast('Please fill out the form!');
      return;
    }

    const url = `${BASE_URL}${END_POINT}`;

    try {
      await axios.post(url, formData);
      modal.classList.remove('visually-hidden');
      body.classList.add('no-scroll');
      window.addEventListener('keydown', handleEscape);
      backdrop.addEventListener('click', handleBackdrop);
      cleaningForm();
    } catch (error) {
      showToast(error.message);
    }
  }

  function closeModalWindow() {
    modal.classList.add('visually-hidden');
    body.classList.remove('no-scroll');
    window.removeEventListener('keydown', handleEscape);
    backdrop.removeEventListener('click', handleBackdrop);
    formData.email = '';
    formData.comment = '';
  }

  function handleEscape(event) {
    if (event.key !== 'Escape') {
      return;
    }
    closeModalWindow();
  }

  function handleBackdrop(event) {
    if (!event.target.querySelector('.ltw-modal-container')) {
      return;
    }
    closeModalWindow();
  }

  function cleaningForm() {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  }

  function showToast(message) {
    iziToast.show({
      iconUrl: errorImg,
      message: message,
      theme: 'dark',
      backgroundColor: '#00b068',
      messageColor: '#FFF',
      messageSize: '16px',
      position: 'topRight',
    });
  }
};

export default initializeForm;
