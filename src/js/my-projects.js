import imgFourS from '../img/my-projects/proj-4-x1.jpg';
import imgFourL from '../img/my-projects/proj-4-x2.jpg';
import imgFiveS from '../img/my-projects/proj-5-x1.jpg';
import imgFiveL from '../img/my-projects/proj-5-x2.jpg';
import imgSixS from '../img/my-projects/proj-6-x1.jpg';
import imgSixL from '../img/my-projects/proj-6-x2.jpg';
import imgSevenS from '../img/my-projects/proj-7-x1.jpg';
import imgSevenL from '../img/my-projects/proj-7-x2.jpg';
import imgEigthS from '../img/my-projects/proj-8-x1.jpg';
import imgEigthL from '../img/my-projects/proj-8-x2.jpg';
import imgNineS from '../img/my-projects/proj-9-x1.jpg';
import imgNineL from '../img/my-projects/proj-9-x2.jpg';
import imgTenS from '../img/my-projects/proj-10-x1.jpg';
import imgTenL from '../img/my-projects/proj-10-x2.jpg';

import svgIcon from '../img/icons.svg';

const initializeProjects = () => {
  const imgArr = [
    {
      url: imgFourS,
      urlX2: imgFourL,
      title: "power pulse webservice"
    },
    {
      url: imgFiveS,
      urlX2: imgFiveL,
      title: "mimino website"
    },
    {
      url: imgSixS,
      urlX2: imgSixL,
      title: "vyshyvanka vibes Landing Page"
    },
    {
      url: imgSevenS,
      urlX2: imgSevenL,
      title: "chego jewelry website"
    },
    {
      url: imgEigthS,
      urlX2: imgEigthL,
      title: "energy flow webservice"
    },
    {
      url: imgNineS,
      urlX2: imgNineL,
      title: "fruitbox online store"
    },
    {
      url: imgTenS,
      urlX2: imgTenL,
      title: "starlight studio landing page"
    },
  ];

  const list = document.querySelector(".projects-list");
  const loadBtn = document.querySelector(".projects-button");
  let loadNumber = 0;

  loadBtn.addEventListener("click", handleLoad);

  function handleLoad() {
    list.insertAdjacentHTML("beforeend", renderProjectList(imgArr));
    if (loadNumber >= imgArr.length) {
      loadBtn.style.display = 'none';
    }
    const card = document.querySelector(".projects-list-item");
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight,
      behavior: "smooth"
    });
  }

  function renderProjectList(arr) {
    const renderArr = [];
    for (let i = loadNumber; (i < loadNumber + 3) && (i < arr.length); i++) {
      const { url, urlX2, title } = arr[i];
      renderArr.push(`<li class="projects-list-item">
        <img
          class="projects-list-img"
          srcset="${url} 1x, ${urlX2} 2x"
          src="${url}"
          alt="${title}"
          width="320"
        />
        <p class="projects-list-text">React, JavaScript, Node JS, Git</p>
        <div class="list-title-container">
          <h3 class="projects-list-title">${title}</h3>
          <a class="projects-list-link" href="#">
            VISIT
            <svg class="projects-list-icon" width="24" height="24">
              <use href="${svgIcon}#icon-arrow-up"></use>
            </svg>
          </a>
        </div>
      </li>`);
    }
    loadNumber += 3;
    return renderArr.join("");
  }
};

export default initializeProjects;

