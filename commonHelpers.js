import{A,S as O,a as P}from"./assets/vendor-e6c22cea.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const g=document.querySelector(".burger-icon"),y=document.querySelector(".close-modal"),n=document.querySelector(".modal-header"),v=()=>{n.classList.remove("is-active"),n.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{g.style.display="block",y.style.display="none"},500)};g.addEventListener("click",()=>{n.classList.add("is-active"),n.classList.remove("is-hidden"),g.style.display="none",y.style.display="block",document.body.classList.add("modal-open")});y.addEventListener("click",v);n.addEventListener("click",e=>{e.target===n&&v()});const C=document.querySelectorAll(".modal-content .header-menu-link");C.forEach(e=>{e.addEventListener("click",v)});const a=document.querySelectorAll(".switch-theme-checkbox");document.querySelector(".switch-theme-wrapper");const i=document.querySelector("body"),h="theme",f=localStorage.getItem(h),T=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(f==="dark"||f===null&&T)&&(i.classList.add("dark"),a.forEach(e=>{e.checked=!0})),f==="light"&&(i.classList.add("light"),a.forEach(e=>{e.checked=!1}))});a.forEach(e=>{e.addEventListener("click",()=>{if(e.checked===!0){localStorage.setItem(h,"dark"),i.classList.add("dark"),i.classList.remove("light"),a.forEach(t=>{t.checked=!0});return}else{localStorage.setItem(h,"light"),i.classList.remove("dark"),i.classList.add("light"),a.forEach(t=>{t.checked=!1});return}})});const $="/portfolio/assets/proj-4-x1-3ef73f4b.jpg",M="/portfolio/assets/proj-4-x2-2b7c8fa0.jpg",X="/portfolio/assets/proj-5-x1-5b3c21fd.jpg",B="/portfolio/assets/proj-5-x2-1e39277c.jpg",F="/portfolio/assets/proj-6-x1-6f8bb081.jpg",W="/portfolio/assets/proj-6-x2-aa719054.jpg",D="/portfolio/assets/proj-7-x1-73965d60.jpg",J="/portfolio/assets/proj-7-x2-4b05d8fe.jpg",R="/portfolio/assets/proj-8-x1-52d1ed11.jpg",H="/portfolio/assets/proj-8-x2-047855e1.jpg",V="/portfolio/assets/proj-9-x1-114e7f77.jpg",_="/portfolio/assets/proj-9-x2-6c703185.jpg",G="/portfolio/assets/proj-10-x1-43dcd781.jpg",K="/portfolio/assets/proj-10-x2-7381feb2.jpg",z="/portfolio/assets/icons-58591a5c.svg",S=[{url:$,urlX2:M,title:"power pulse webservice"},{url:X,urlX2:B,title:"mimino website"},{url:F,urlX2:W,title:"vyshyvanka vibes Landing Page"},{url:D,urlX2:J,title:"chego jewelry website"},{url:R,urlX2:H,title:"energy flow webservice"},{url:V,urlX2:_,title:"fruitbox online store"},{url:G,urlX2:K,title:"starlight studio landing page"}],U=document.querySelector(".projects-list"),j=document.querySelector(".projects-button");let u=0;j.addEventListener("click",Y);function Y(){U.insertAdjacentHTML("beforeend",Q(S)),u>S.length&&(j.style.display="none");const t=document.querySelector(".projects-list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}function Q(e){const t=[];for(let r=u;r<u+3&&r<e.length;r++){const{url:l,urlX2:o,title:s}=e[r];t.push(`<li class="projects-list-item">
<img
  class="projects-list-img"
  srcset="${l} 1x, ${o} 2x"
  src="${l}"
  alt="${s}"
  width="320"
/>
<p class="projects-list-text">React, JavaScript, Node JS, Git</p>
<div class="list-title-container">
<h3 class="projects-list-title">${s}</h3>
<a class="projects-list-link" href="#"
  >VISIT
  <svg class="projects-list-icon" width="24" height="24">
    <use href="${z}#icon-arrow-up"></use>
  </svg>
</a>
</div>
</li>`)}return u+=3,t.join("")}const Z=document.querySelector(".faq-list"),ee=new A(Z,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"});ee.open(0);const b=document.querySelector(".reviews-wrapper"),d=new O(b,{slidesPerView:window.innerWidth<1280?1:2,spaceBetween:32});window.addEventListener("resize",k);function k(){const t=window.innerWidth<1280?1:2;d.params.slidesPerView=t,d.update()}k();b.addEventListener("click",te);function te(e){const t=e.target;return t.closest("[data-next]")?d.slideNext():t.closest("[data-prev]")&&d.slidePrev(),console.log(d)}const m=document.querySelector(".ltw-form"),E=document.querySelector(".ltw-modal-backdrop"),oe=document.querySelector(".ltw-modal-close-btn"),x=document.querySelector(".ltw-modal-backdrop"),q=document.querySelector("body");m.addEventListener("submit",ne);m.addEventListener("input",ce);oe.addEventListener("click",w);const se="https://portfolio-js.b.goit.study/api",re="/requests",L="form-data",c={email:"",comment:""};ie();function ce(e){const t=e.target.name;c[t]=e.target.value.trim(),localStorage.setItem(L,JSON.stringify(c))}function ie(){const e=JSON.parse(localStorage.getItem(L));if(!e)return;const{email:t,comment:r}=m.elements;c.email=e.email,c.comment=e.comment,t.value=c.email,r.value=c.comment}async function ne(e){if(e.preventDefault(),!c.email||!c.comment){console.log("Заповніть форму");return}const t=`${se}${re}`;try{await P.post(t,c),E.classList.remove("visually-hidden"),q.classList.add("no-scroll"),window.addEventListener("keydown",I),x.addEventListener("click",N),le()}catch(r){console.log(r.message)}}function w(){E.classList.add("visually-hidden"),q.classList.remove("no-scroll"),window.removeEventListener("keydown",I),x.removeEventListener("click",N)}function I(e){e.key==="Escape"&&w()}function N(e){e.target.querySelector(".ltw-modal-container")&&w()}function le(){localStorage.removeItem(L),m.reset()}
//# sourceMappingURL=commonHelpers.js.map
