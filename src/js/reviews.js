import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

const reviewsWrapper = document.querySelector('.reviews-wrapper');

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


function createMarkup({ _id, author, avatar_url, review }) {
    return `
        <li class="reviwes-item swiper-slide">

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

const swiper = new Swiper(reviewsWrapper, {
    slidesPerView: window.innerWidth < 1280 ? 1 : 2,
    spaceBetween: 32,
    
});


window.addEventListener('resize', updateSwiper);
function updateSwiper() {
    const screenWidth = window.innerWidth;
    const slidesCount = screenWidth < 1280 ? 1 : 2;
    swiper.params.slidesPerView = slidesCount;
    swiper.update();
}
updateSwiper();

reviewsWrapper.addEventListener('click', wrapperNavi);
function wrapperNavi(e){
    const target = e.target;

    if(target.closest('[data-next]')) {
      swiper.slideNext();
    } else if(target.closest('[data-prev]')) {
      swiper.slidePrev();
    }
  return console.log(swiper);;
}



// snapIndex показує на якому слайді відображається елемент