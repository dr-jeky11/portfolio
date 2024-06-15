const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", scrToTop);

function scrToTop() {
     window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};