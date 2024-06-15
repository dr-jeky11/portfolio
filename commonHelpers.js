import{S,N as b,K as w,M as j,A as k,a as E}from"./assets/vendor-cdb63856.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const q=document.querySelector(".reviews-wrapper"),x=document.querySelector("[data-prev]"),T=document.querySelector("[data-next]");new S(q,{modules:[b,w,j],navigation:{nextEl:T,prevEl:x,disabledClass:"disabled"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const h=document.querySelector(".scrollToTopBtn");h.addEventListener("click",I);function I(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.style.display="block":h.style.display="none"};const N=()=>{const o=document.querySelectorAll(".switch-theme-checkbox"),s=document.querySelector("body"),c="theme",r=localStorage.getItem(c),t=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(r==="dark"||r===null&&t)&&(s.classList.add("dark"),o.forEach(e=>{e.checked=!0})),r==="light"&&(s.classList.add("light"),o.forEach(e=>{e.checked=!1}))}),o.forEach(e=>{e.addEventListener("click",()=>{e.checked===!0?(localStorage.setItem(c,"dark"),s.classList.add("dark"),s.classList.remove("light"),o.forEach(n=>{n.checked=!0})):(localStorage.setItem(c,"light"),s.classList.remove("dark"),s.classList.add("light"),o.forEach(n=>{n.checked=!1}))})})},A=()=>{const o=document.querySelector(".burger-icon"),s=document.querySelector(".close-modal"),c=document.querySelector(".modal-header"),r=()=>{c.classList.remove("is-active"),c.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{o.style.display="block",s.style.display="none"},500)};o.addEventListener("click",()=>{c.classList.add("is-active"),c.classList.remove("is-hidden"),o.style.display="none",s.style.display="block",document.body.classList.add("modal-open")}),s.addEventListener("click",r),c.addEventListener("click",e=>{e.target===c&&r()}),document.querySelectorAll(".modal-content .header-menu-link").forEach(e=>{e.addEventListener("click",r)})},B="/portfolio/assets/proj-4-x1-3ef73f4b.jpg",M="/portfolio/assets/proj-4-x2-2b7c8fa0.jpg",P="/portfolio/assets/proj-5-x1-5b3c21fd.jpg",O="/portfolio/assets/proj-5-x2-1e39277c.jpg",C="/portfolio/assets/proj-6-x1-6f8bb081.jpg",F="/portfolio/assets/proj-6-x2-aa719054.jpg",X="/portfolio/assets/proj-7-x1-73965d60.jpg",$="/portfolio/assets/proj-7-x2-4b05d8fe.jpg",z="/portfolio/assets/proj-8-x1-52d1ed11.jpg",D="/portfolio/assets/proj-8-x2-047855e1.jpg",V="/portfolio/assets/proj-9-x1-114e7f77.jpg",H="/portfolio/assets/proj-9-x2-6c703185.jpg",J="/portfolio/assets/proj-10-x1-43dcd781.jpg",K="/portfolio/assets/proj-10-x2-7381feb2.jpg",R="/portfolio/assets/icons-58591a5c.svg",_=()=>{const o=[{url:B,urlX2:M,title:"power pulse webservice"},{url:P,urlX2:O,title:"mimino website"},{url:C,urlX2:F,title:"vyshyvanka vibes Landing Page"},{url:X,urlX2:$,title:"chego jewelry website"},{url:z,urlX2:D,title:"energy flow webservice"},{url:V,urlX2:H,title:"fruitbox online store"},{url:J,urlX2:K,title:"starlight studio landing page"}],s=document.querySelector(".projects-list"),c=document.querySelector(".projects-button");let r=0;c.addEventListener("click",t);function t(){s.insertAdjacentHTML("beforeend",e(o)),r>=o.length&&(c.style.display="none");const a=document.querySelector(".projects-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a,behavior:"smooth"})}function e(n){const a=[];for(let i=r;i<r+3&&i<n.length;i++){const{url:u,urlX2:p,title:m}=n[i];a.push(`<li class="projects-list-item">
        <img
          class="projects-list-img"
          srcset="${u} 1x, ${p} 2x"
          src="${u}"
          alt="${m}"
          width="320"
        />
        <p class="projects-list-text">React, JavaScript, Node JS, Git</p>
        <div class="list-title-container">
          <h3 class="projects-list-title">${m}</h3>
          <a class="projects-list-link" href="#">
            VISIT
            <svg class="projects-list-icon" width="24" height="24">
              <use href="${R}#icon-arrow-up"></use>
            </svg>
          </a>
        </div>
      </li>`)}return r+=3,a.join("")}},G=()=>{const o=document.querySelector(".faq-list");new k(o,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"}).open(0)},W=()=>{const o=document.querySelector(".ltw-form"),s=document.querySelector(".ltw-modal-backdrop"),c=document.querySelector(".ltw-modal-close-btn"),r=document.querySelector(".ltw-modal-backdrop"),t=document.querySelector("body");o.addEventListener("submit",m),o.addEventListener("input",u),c.addEventListener("click",f);const e="https://portfolio-js.b.goit.study/api",n="/requests",a="form-data",i={email:"",comment:""};p();function u(l){const d=l.target.name;i[d]=l.target.value.trim(),localStorage.setItem(a,JSON.stringify(i))}function p(){const l=JSON.parse(localStorage.getItem(a));if(!l)return;const{email:d,comment:g}=o.elements;i.email=l.email,i.comment=l.comment,d.value=i.email,g.value=i.comment}async function m(l){if(l.preventDefault(),!i.email||!i.comment){console.log("Заповніть форму");return}const d=`${e}${n}`;try{await E.post(d,i),s.classList.remove("visually-hidden"),t.classList.add("no-scroll"),window.addEventListener("keydown",y),r.addEventListener("click",v),L()}catch(g){console.log(g.message)}}function f(){s.classList.add("visually-hidden"),t.classList.remove("no-scroll"),window.removeEventListener("keydown",y),r.removeEventListener("click",v)}function y(l){l.key==="Escape"&&f()}function v(l){l.target.querySelector(".ltw-modal-container")&&f()}function L(){localStorage.removeItem(a),o.reset()}};N();A();_();G();W();
//# sourceMappingURL=commonHelpers.js.map
