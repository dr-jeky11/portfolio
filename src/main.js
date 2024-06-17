import initializeThemeSwitcher from './js/theme-switcher.js';
import initializeModal from './js/modal.js';
import initializeBenefitsInfo from './js/benefits.js';
import initializeProjects from './js/my-projects.js';
import initializeAccordion from './js/faq.js';
import initializeForm from './js/work-together.js';
import initializeScrollToTop from './js/scroll-to-top.js';
import initializeActivateSocLinks from './js/footer.js'
import getReviews, { initSwiper } from './js/reviews.js';
import AOS from 'aos';

import 'aos/dist/aos.css';

initializeThemeSwitcher();
initializeModal();
initializeProjects();
initializeBenefitsInfo();
initializeAccordion();
initializeForm();
initializeActivateSocLinks();
initializeScrollToTop();
AOS.init();

document.addEventListener('DOMContentLoaded', async () => {
  await getReviews();
  initSwiper();
});

