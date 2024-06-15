import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const initializeAccordion = () => {
  const faqList = document.querySelector('.faq-list');
  
  const accordion = new Accordion(faqList, {
    duration: 250,
    showMultiple: false,
    elementClass: 'faq-item',
    triggerClass: 'faq-btn',
    panelClass: 'faq-text',
    activeClass: 'active',
  });

  accordion.open(0);
};

export default initializeAccordion;