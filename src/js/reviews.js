export default getReviews;

import axios from 'axios';

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard } from 'swiper/modules';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

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
                <li>  ${author} </li>
            </ul>
        </li>
     `
}

function reviewsTamplate(arr) {
    return arr.map(createMarkup).join('');
}


//------ API ------
async function getReviews() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
  
  await axios(BASE_URL)
      .then(res => {
        const markup = reviewsTamplate(res.data);
        reviewsList.innerHTML = markup;
        })
        .catch(error => {
          reviewsList.classList.add('cap');
          reviewsList.innerHTML = '<p>Not found</p>';
          iziToast.error({ ...iziToastParams, message: error.message });
        })
}







//------------------ Swiper ----------------
const swiper = document.querySelector('.swiper');
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');

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
  touchEventsTarget: 'container',
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1280: {
      slidesPerView: 2,
    },
    onlyInViewPort: true,
    autoHeight: true,
  },
});


//------------------ error ----------------

const iziToastParams = {
    iconUrl: './img/error.svg',
    backgroundColor: '#00b068',
    messageColor: '#FFF',
    messageSize: '16px',
    position: 'topRight',
}


