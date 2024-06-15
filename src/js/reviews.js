import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const reviewsWrapper = document.querySelector('.reviews-wrapper');
const prevBtn = document.querySelector('[data-prev]');
const nextBtn = document.querySelector('[data-next]');

//------------------ API and Markup ----------------

async function getReviews() {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
    const params = new URLSearchParams({
        _page: 1,
        _limit: 2
    })

    const url = await axios `${BASE_URL}?${params}`;
    return url.data;
}


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


async function renderReviews() {
    const reviews = await getReviews();
    const markup = reviews.map(createMarkup).join('');
    swiperList.innerHTML = markup;
}


//------------------ Swiper ----------------

new Swiper(reviewsWrapper, {
  modules: [Navigation, Keyboard, Mousewheel],
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn,
    disabledClass: 'disabled',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: true,
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