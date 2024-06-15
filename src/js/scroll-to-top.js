const initializeScrollToTop = () => {
  const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

  function scrToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToTopBtn.addEventListener("click", scrToTop);

  function onScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  window.onscroll = onScroll;
};

export default initializeScrollToTop;