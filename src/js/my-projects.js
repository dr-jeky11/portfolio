const imgArr = [{
    url: "/img/my-projects/proj-1-x1.jpg",
    urlX2: "/img/my-projects/proj-1-x2.jpg",
    title: "wallet webservice"
},
{
    url: "/img/my-projects/proj-2-x1.jpg",
    urlX2: "/img/my-projects/proj-2-x2.jpg",
    title: "Green harvest webservice"
},
{
    url: "/img/my-projects/proj-3-x1.jpg",
    urlX2: "/img/my-projects/proj-3-x2.jpg",
    title: "English Exellence webservice"
},
{
    url: "/img/my-projects/proj-4-x1.jpg",
    urlX2: "/img/my-projects/proj-4-x2.jpg",
    title: "power pulse webservice"
},
{
    url: "/img/my-projects/proj-5-x1.jpg",
    urlX2: "/img/my-projects/proj-5-x2.jpg",
    title: "mimino website"
},
{
    url: "/img/my-projects/proj-6-x1.jpg",
    urlX2: "/img/my-projects/proj-6-x2.jpg",
    title: "vyshyvanka vibes Landing Page"
},
{
    url: "/img/my-projects/proj-7-x1.jpg",
    urlX2: "/img/my-projects/proj-7-x2.jpg",
    title: "chego jewelry website"
},
{
    url: "/img/my-projects/proj-8-x1.jpg",
    urlX2: "/img/my-projects/proj-8-x2.jpg",
    title: "energy flow webservice"
},
{
    url: "/img/my-projects/proj-9-x1.jpg",
    urlX2: "/img/my-projects/proj-9-x2.jpg",
    title: "fruitbox online store"
},
{
    url: "/img/my-projects/proj-10-x1.jpg",
    urlX2: "/img/my-projects/proj-10-x2.jpg",
    title: "starlight studio landing page"
},
];

const list = document.querySelector(".projects-list");
const loadBtn = document.querySelector(".projects-button");
let loadNumber = 3;

loadBtn.addEventListener("click", hendleLoad);


function hendleLoad () {
    console.log(loadNumber);

list.insertAdjacentHTML("beforeend", renderProjectList(imgArr));
if (loadNumber > imgArr.length) {
    loadBtn.style.display = 'none';
}
const card = document.querySelector(".projects-list-item");
        const cardHeight = (card.getBoundingClientRect().height) * 2;
        window.scrollBy({
            left: 0,
            top: cardHeight,
            behavior: "smooth"
        });
}


function renderProjectList (arr) {
const renderArr = [];
for (let i = loadNumber;(i < loadNumber + 3) && (i < arr.length); i++) {
const {url, urlX2, title} = arr[i];
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
<a class="projects-list-link" href="/index.html" target="_blank" rel="noopener noreferrer"
  >VISIT
  <svg class="projects-list-icon" width="24" height="24">
    <use href="/img/icons.svg#icon-arrow-up"></use>
  </svg>
</a>
</div>
</li>`)
}
loadNumber += 3;
return renderArr.join("")
}



// function renderProjectList (arr) {
//     return arr.map(({url, urlX2, title}, i) => {
//     return `<li class="projects-list-item">
// <img
//   class="projects-list-img"
//   srcset="${url}, ${urlX2}"
//   src="${url}"
//   alt="${title}"
//   width="320"
// />
// <p class="projects-list-text">React, JavaScript, Node JS, Git</p>
// <h3 class="projects-list-title">${title}</h3>
// <a class="projects-list-link" href="../index.html"
//   >VISIT
//   <svg class="projects-list-icon" width="24" height="24">
//     <use href="./img/icons.svg#icon-arrow-up"></use>
//   </svg>
// </a>
// </li>`
// }).join("");
// }




