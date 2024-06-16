
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import errorImg from '../img/error.svg';

const reviewsList = document.querySelector('.reviews-list');

//------ Markup ------
function createMarkup({ author, avatar_url, review }) {
  return `
    <li class="reviews-item swiper-slide">
      <p class="reviews-text">${review}</p>
      <ul class="person-info">
        <li>
          <img src="${avatar_url}" alt="person photo" width="40" height="40">
        </li>
        <li>
          <p class="person-name">${author}</p>
        </li>
      </ul>
    </li>
  `;
}

function reviewsTemplate(arr) {
  return arr.map(createMarkup).join('');
}

//------ API ------
async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
  
  try {
    const res = await axios(BASE_URL);
    const markup = reviewsTemplate(res.data);
    reviewsList.innerHTML = markup;
  } catch (error) {
    reviewsList.classList.add('cap');
    reviewsList.innerHTML = '<p>Not found</p>';
    iziToast.error({ ...iziToastParams, message: error.message });
  }
}

//------------------ Swiper ----------------
const swiper = document.querySelector('.swiper');
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');

function initSwiper() {
  new Swiper(swiper, {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'disabled',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 1,
    spaceBetween: 32,
    breakpoints: {
      1280: {
        slidesPerView: 2,
      },
    },
    autoHeight: true,
    touchEventsTarget: 'container',
  });
}


//------------------ error ----------------
const iziToastParams = {
  iconUrl: errorImg,
  backgroundColor: '#00b068',
  messageColor: '#FFF',
  messageSize: '16px',
  position: 'topRight',
};

export default getReviews;
export { initSwiper };