import initializeThemeSwitcher from './js/theme-switcher.js';
import initializeModal from './js/modal.js';
import initializeProjects from './js/my-projects.js';
import initializeAccordion from './js/faq.js';
import initializeForm from './js/work-together.js';
import initializeScrollToTop from './js/scroll-to-top.js';
import initializeActivateSocLinks from './js/footer.js'
import getReviews, { initSwiper } from './js/reviews.js';

initializeThemeSwitcher();
initializeModal();
initializeProjects();
initializeAccordion();
initializeForm();
initializeActivateSocLinks();
initializeScrollToTop();

document.addEventListener('DOMContentLoaded', async () => {
  await getReviews();
  initSwiper();
});