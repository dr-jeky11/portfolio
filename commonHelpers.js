import{A as j}from"./assets/vendor-8f98089f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const p=document.querySelector(".burger-icon"),f=document.querySelector(".close-modal"),c=document.querySelector(".modal-header"),g=()=>{c.classList.remove("is-active"),c.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{p.style.display="block",f.style.display="none"},500)};p.addEventListener("click",()=>{c.classList.add("is-active"),c.classList.remove("is-hidden"),p.style.display="none",f.style.display="block",document.body.classList.add("modal-open")});f.addEventListener("click",g);c.addEventListener("click",t=>{t.target===c&&g()});const L=document.querySelectorAll(".modal-content .header-menu-link");L.forEach(t=>{t.addEventListener("click",g)});const n=document.querySelectorAll(".switch-theme-checkbox");document.querySelector(".switch-theme-wrapper");const i=document.querySelector("body"),m="theme",u=localStorage.getItem(m),v=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(u==="dark"||u===null&&v)&&(i.classList.add("dark"),n.forEach(t=>{t.checked=!0})),u==="light"&&(i.classList.add("light"),n.forEach(t=>{t.checked=!1}))});n.forEach(t=>{t.addEventListener("click",()=>{if(t.checked===!0){localStorage.setItem(m,"dark"),i.classList.add("dark"),i.classList.remove("light"),n.forEach(s=>{s.checked=!0});return}else{localStorage.setItem(m,"light"),i.classList.remove("dark"),i.classList.add("light"),n.forEach(s=>{s.checked=!1});return}})});const b="/portfolio/assets/proj-4-x1-3ef73f4b.jpg",S="/portfolio/assets/proj-4-x2-2b7c8fa0.jpg",x="/portfolio/assets/proj-5-x1-202341fc.jpg",k="/portfolio/assets/proj-5-x2-c9c484aa.jpg",w="/portfolio/assets/proj-6-x1-6f8bb081.jpg",q="/portfolio/assets/proj-6-x2-aa719054.jpg",E="/portfolio/assets/proj-7-x1-73965d60.jpg",A="/portfolio/assets/proj-7-x2-4b05d8fe.jpg",C="/portfolio/assets/proj-8-x1-52d1ed11.jpg",X="/portfolio/assets/proj-8-x2-047855e1.jpg",I="/portfolio/assets/proj-9-x1-114e7f77.jpg",N="/portfolio/assets/proj-9-x2-6c703185.jpg",T="/portfolio/assets/proj-10-x1-43dcd781.jpg",F="/portfolio/assets/proj-10-x2-7381feb2.jpg",h=[{url:b,urlX2:S,title:"power pulse webservice"},{url:x,urlX2:k,title:"mimino website"},{url:w,urlX2:q,title:"vyshyvanka vibes Landing Page"},{url:E,urlX2:A,title:"chego jewelry website"},{url:C,urlX2:X,title:"energy flow webservice"},{url:I,urlX2:N,title:"fruitbox online store"},{url:T,urlX2:F,title:"starlight studio landing page"}],M=document.querySelector(".projects-list"),y=document.querySelector(".projects-button");let a=0;y.addEventListener("click",O);function O(){M.insertAdjacentHTML("beforeend",P(h)),a>h.length&&(y.style.display="none");const s=document.querySelector(".projects-list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:s,behavior:"smooth"})}function P(t){const s=[];for(let r=a;r<a+3&&r<t.length;r++){const{url:l,urlX2:e,title:o}=t[r];s.push(`<li class="projects-list-item">
<img
  class="projects-list-img"
  srcset="${l} 1x, ${e} 2x"
  src="${l}"
  alt="${o}"
  width="320"
/>
<p class="projects-list-text">React, JavaScript, Node JS, Git</p>
<div class="list-title-container">
<h3 class="projects-list-title">${o}</h3>
<a class="projects-list-link" href="#"
  >VISIT
  <svg class="projects-list-icon" width="24" height="24">
    <use href="/img/icons.svg#icon-arrow-up"></use>
  </svg>
</a>
</div>
</li>`)}return a+=3,s.join("")}const $=document.querySelector(".faq-list"),B=new j($,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"});B.open(0);
//# sourceMappingURL=commonHelpers.js.map
