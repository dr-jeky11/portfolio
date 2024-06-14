import axios from 'axios';

const form = document.querySelector('.ltw-form');
const modal = document.querySelector('.ltw-modal-backdrop');
const closeBtn = document.querySelector('.ltw-modal-close-btn');
const backdrop = document.querySelector('.ltw-modal-backdrop');
const body = document.querySelector('body');

form.addEventListener('submit', sendMessage);
form.addEventListener('input', hendleInput);
closeBtn.addEventListener('click', closeModalWindow);

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POINT = '/requests';
const STORAGE_KEY = 'form-data';

const formData = { email: '', comment: '' };

dataInLocalStorage();

function hendleInput(event) {
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
    console.log('Заповніть форму');
    return;
  }

  const url = `${BASE_URL}${END_POINT}`;

  try {
    await axios.post(url, formData);
    modal.classList.remove('visually-hidden');
    body.classList.add('no-scroll');
    window.addEventListener('keydown', hendleEscape);
    backdrop.addEventListener('click', hendleBackdrop);
    cleaningForm();
  } catch (error) {
    console.log(error.message);
  }
}

function closeModalWindow() {
  modal.classList.add('visually-hidden');
  body.classList.remove('no-scroll');
  window.removeEventListener('keydown', hendleEscape);
  backdrop.removeEventListener('click', hendleBackdrop);
}

function hendleEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModalWindow();
}

function hendleBackdrop(event) {
  if (!event.target.querySelector('.ltw-modal-container')) {
    return;
  }
  closeModalWindow();
}

function cleaningForm() {
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
