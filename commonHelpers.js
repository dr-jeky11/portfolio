import{A as x,a as I}from"./assets/vendor-6f42c08a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const f=document.querySelector(".burger-icon"),h=document.querySelector(".close-modal"),l=document.querySelector(".modal-header"),y=()=>{l.classList.remove("is-active"),l.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{f.style.display="block",h.style.display="none"},500)};f.addEventListener("click",()=>{l.classList.add("is-active"),l.classList.remove("is-hidden"),f.style.display="none",h.style.display="block",document.body.classList.add("modal-open")});h.addEventListener("click",y);l.addEventListener("click",e=>{e.target===l&&y()});const A=document.querySelectorAll(".modal-content .header-menu-link");A.forEach(e=>{e.addEventListener("click",y)});const a=document.querySelectorAll(".switch-theme-checkbox");document.querySelector(".switch-theme-wrapper");const i=document.querySelector("body"),g="theme",p=localStorage.getItem(g),N=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(p==="dark"||p===null&&N)&&(i.classList.add("dark"),a.forEach(e=>{e.checked=!0})),p==="light"&&(i.classList.add("light"),a.forEach(e=>{e.checked=!1}))});a.forEach(e=>{e.addEventListener("click",()=>{if(e.checked===!0){localStorage.setItem(g,"dark"),i.classList.add("dark"),i.classList.remove("light"),a.forEach(t=>{t.checked=!0});return}else{localStorage.setItem(g,"light"),i.classList.remove("dark"),i.classList.add("light"),a.forEach(t=>{t.checked=!1});return}})});const O="/portfolio/assets/proj-4-x1-3ef73f4b.jpg",T="/portfolio/assets/proj-4-x2-2b7c8fa0.jpg",C="/portfolio/assets/proj-5-x1-5b3c21fd.jpg",M="/portfolio/assets/proj-5-x2-1e39277c.jpg",X="/portfolio/assets/proj-6-x1-6f8bb081.jpg",$="/portfolio/assets/proj-6-x2-aa719054.jpg",F="/portfolio/assets/proj-7-x1-73965d60.jpg",P="/portfolio/assets/proj-7-x2-4b05d8fe.jpg",B="/portfolio/assets/proj-8-x1-52d1ed11.jpg",D="/portfolio/assets/proj-8-x2-047855e1.jpg",J="/portfolio/assets/proj-9-x1-114e7f77.jpg",R="/portfolio/assets/proj-9-x2-6c703185.jpg",H="/portfolio/assets/proj-10-x1-43dcd781.jpg",_="/portfolio/assets/proj-10-x2-7381feb2.jpg",S=[{url:O,urlX2:T,title:"power pulse webservice"},{url:C,urlX2:M,title:"mimino website"},{url:X,urlX2:$,title:"vyshyvanka vibes Landing Page"},{url:F,urlX2:P,title:"chego jewelry website"},{url:B,urlX2:D,title:"energy flow webservice"},{url:J,urlX2:R,title:"fruitbox online store"},{url:H,urlX2:_,title:"starlight studio landing page"}],G=document.querySelector(".projects-list"),j=document.querySelector(".projects-button");let d=0;j.addEventListener("click",K);function K(){G.insertAdjacentHTML("beforeend",U(S)),d>S.length&&(j.style.display="none");const t=document.querySelector(".projects-list-item").getBoundingClientRect().height*2;window.scrollBy({left:0,top:t,behavior:"smooth"})}function U(e){const t=[];for(let r=d;r<d+3&&r<e.length;r++){const{url:n,urlX2:o,title:s}=e[r];t.push(`<li class="projects-list-item">
<img
  class="projects-list-img"
  srcset="${n} 1x, ${o} 2x"
  src="${n}"
  alt="${s}"
  width="320"
/>
<p class="projects-list-text">React, JavaScript, Node JS, Git</p>
<div class="list-title-container">
<h3 class="projects-list-title">${s}</h3>
<a class="projects-list-link" href="#"
  >VISIT
  <svg class="projects-list-icon" width="24" height="24">
    <use href="/img/icons.svg#icon-arrow-up"></use>
  </svg>
</a>
</div>
</li>`)}return d+=3,t.join("")}const V=document.querySelector(".faq-list"),W=new x(V,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"});W.open(0);const u=document.querySelector(".ltw-form"),b=document.querySelector(".ltw-modal-backdrop"),Y=document.querySelector(".ltw-modal-close-btn"),k=document.querySelector(".ltw-modal-backdrop"),w=document.querySelector("body");u.addEventListener("submit",te);u.addEventListener("input",Z);Y.addEventListener("click",L);const z="https://portfolio-js.b.goit.study/api",Q="/requests",v="form-data",c={email:"",comment:""};ee();function Z(e){const t=e.target.name;c[t]=e.target.value.trim(),localStorage.setItem(v,JSON.stringify(c))}function ee(){const e=JSON.parse(localStorage.getItem(v));if(!e)return;const{email:t,comment:r}=u.elements;c.email=e.email,c.comment=e.comment,t.value=c.email,r.value=c.comment}async function te(e){if(e.preventDefault(),!c.email||!c.comment){console.log("Заповніть форму");return}const t=`${z}${Q}`;try{await I.post(t,c),b.classList.remove("visually-hidden"),w.classList.add("no-scroll"),window.addEventListener("keydown",E),k.addEventListener("click",q),oe()}catch(r){console.log(r.message)}}function L(){b.classList.add("visually-hidden"),w.classList.remove("no-scroll"),window.removeEventListener("keydown",E),k.removeEventListener("click",q)}function E(e){e.key==="Escape"&&L()}function q(e){e.target.querySelector(".ltw-modal-container")&&L()}function oe(){localStorage.removeItem(v),u.reset()}
//# sourceMappingURL=commonHelpers.js.map
