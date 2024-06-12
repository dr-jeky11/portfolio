(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p=[{url:"./img/my-projects/proj-1-x1.jpg",urlX2:"./img/my-projects/proj-1-x2.jpg",title:"wallet webservice"},{url:"./img/my-projects/proj-2-x1.jpg",urlX2:"./img/my-projects/proj-2-x2.jpg",title:"Green harvest webservice"},{url:"./img/my-projects/proj-3-x1.jpg",urlX2:"./img/my-projects/proj-3-x2.jpg",title:"English Exellence webservice"},{url:"./img/my-projects/proj-4-x1.jpg",urlX2:"./img/my-projects/proj-4-x2.jpg",title:"power pulse webservice"},{url:"./img/my-projects/proj-5-x1.jpg",urlX2:"./img/my-projects/proj-5-x2.jpg",title:"mimino website"},{url:"./img/my-projects/proj-6-x1.jpg",urlX2:"./img/my-projects/proj-6-x2.jpg",title:"vyshyvanka vibes Landing Page"},{url:"./img/my-projects/proj-7-x1.jpg",urlX2:"./img/my-projects/proj-7-x2.jpg",title:"chego jewelry website"},{url:"./img/my-projects/proj-8-x1.jpg",urlX2:"./img/my-projects/proj-8-x2.jpg",title:"energy flow webservice"},{url:"./img/my-projects/proj-9-x1.jpg",urlX2:"./img/my-projects/proj-9-x2.jpg",title:"fruitbox online store"},{url:"./img/my-projects/proj-10-x1.jpg",urlX2:"./img/my-projects/proj-10-x2.jpg",title:"starlight studio landing page"}],j=document.querySelector(".projects-list"),n=document.querySelector(".projects-button");let s=3;n.addEventListener("click",g);function g(){console.log(s),j.insertAdjacentHTML("beforeend",u(p)),s>p.length&&(n.style.display="none");const r=document.querySelector(".projects-list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:r,behavior:"smooth"})}function u(l){const r=[];for(let o=s;o<s+3&&o<l.length;o++){const{url:i,urlX2:e,title:t}=l[o];r.push(`<li class="projects-list-item">
<img
  class="projects-list-img"
  srcset="${i}, ${e}"
  src="${i}"
  alt="${t}"
  width="320"
/>
<p class="projects-list-text">React, JavaScript, Node JS, Git</p>
<h3 class="projects-list-title">${t}</h3>
<a class="projects-list-link" href="../index.html" target="_blank" rel="noopener noreferrer"
  >VISIT
  <svg class="projects-list-icon" width="24" height="24">
    <use href="./img/icons.svg#icon-arrow-up"></use>
  </svg>
</a>
</li>`)}return s+=3,r.join("")}
//# sourceMappingURL=commonHelpers.js.map
