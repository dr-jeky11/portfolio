import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"

//----------------------------------

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
        <li class="reviwes-item swiper-pagination">

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


const swiper = document.querySelector('.swiper').swiper;

new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.back-btn',
    },
});





