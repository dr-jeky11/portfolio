import{S as L,N as b,K as w,M as j,A as E,i as v,a as x}from"./assets/vendor-6ad58f6f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const k=document.querySelector(".reviews-wrapper"),q=document.querySelector("[data-prev]"),T=document.querySelector("[data-next]");new L(k,{modules:[b,w,j],navigation:{nextEl:T,prevEl:q,disabledClass:"disabled"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:"container",slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2},onlyInViewPort:!0,autoHeight:!0}});const I=()=>{const o=document.querySelectorAll(".switch-theme-checkbox"),e=document.querySelector("body"),r="theme",i=localStorage.getItem(r),s=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(i==="dark"||i===null&&s)&&(e.classList.add("dark"),o.forEach(t=>{t.checked=!0})),i==="light"&&(e.classList.add("light"),o.forEach(t=>{t.checked=!1}))}),o.forEach(t=>{t.addEventListener("click",()=>{t.checked===!0?(localStorage.setItem(r,"dark"),e.classList.add("dark"),e.classList.remove("light"),o.forEach(n=>{n.checked=!0})):(localStorage.setItem(r,"light"),e.classList.remove("dark"),e.classList.add("light"),o.forEach(n=>{n.checked=!1}))})})},A=()=>{const o=document.querySelector(".burger-icon"),e=document.querySelector(".close-modal"),r=document.querySelector(".modal-header"),i=()=>{r.classList.remove("is-active"),r.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{o.style.display="block",e.style.display="none"},500)};o.addEventListener("click",()=>{r.classList.add("is-active"),r.classList.remove("is-hidden"),o.style.display="none",e.style.display="block",document.body.classList.add("modal-open")}),e.addEventListener("click",i),r.addEventListener("click",t=>{t.target===r&&i()}),document.querySelectorAll(".modal-content .header-menu-link").forEach(t=>{t.addEventListener("click",i)})},F="/portfolio/assets/proj-4-x1-3ef73f4b.jpg",C="/portfolio/assets/proj-4-x2-2b7c8fa0.jpg",N="/portfolio/assets/proj-5-x1-5b3c21fd.jpg",z="/portfolio/assets/proj-5-x2-1e39277c.jpg",P="/portfolio/assets/proj-6-x1-6f8bb081.jpg",B="/portfolio/assets/proj-6-x2-aa719054.jpg",M="/portfolio/assets/proj-7-x1-73965d60.jpg",O="/portfolio/assets/proj-7-x2-4b05d8fe.jpg",$="/portfolio/assets/proj-8-x1-52d1ed11.jpg",X="/portfolio/assets/proj-8-x2-047855e1.jpg",R="/portfolio/assets/proj-9-x1-114e7f77.jpg",D="/portfolio/assets/proj-9-x2-6c703185.jpg",V="/portfolio/assets/proj-10-x1-43dcd781.jpg",H="/portfolio/assets/proj-10-x2-7381feb2.jpg",J="/portfolio/assets/icons-58591a5c.svg",K=()=>{const o=[{url:F,urlX2:C,title:"power pulse webservice"},{url:N,urlX2:z,title:"mimino website"},{url:P,urlX2:B,title:"vyshyvanka vibes Landing Page"},{url:M,urlX2:O,title:"chego jewelry website"},{url:$,urlX2:X,title:"energy flow webservice"},{url:R,urlX2:D,title:"fruitbox online store"},{url:V,urlX2:H,title:"starlight studio landing page"}],e=document.querySelector(".projects-list"),r=document.querySelector(".projects-button");let i=0;r.addEventListener("click",s);function s(){e.insertAdjacentHTML("beforeend",t(o)),i>=o.length&&(r.style.display="none");const a=document.querySelector(".projects-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a,behavior:"smooth"})}function t(n){const a=[];for(let c=i;c<i+3&&c<n.length;c++){const{url:u,urlX2:p,title:m}=n[c];a.push(`<li class="projects-list-item">
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
              <use href="${J}#icon-arrow-up"></use>
            </svg>
          </a>
        </div>
      </li>`)}return i+=3,a.join("")}},U=()=>{const o=document.querySelector(".faq-list");new E(o,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"}).open(0)},_=()=>{const o=document.querySelector(".ltw-form"),e=document.querySelector(".ltw-modal-backdrop"),r=document.querySelector(".ltw-modal-close-btn"),i=document.querySelector(".ltw-modal-backdrop"),s=document.querySelector("body");o.addEventListener("submit",m),o.addEventListener("input",u),r.addEventListener("click",g);const t="https://portfolio-js.b.goit.study/api",n="/requests",a="form-data",c={email:"",comment:""};p();function u(l){const d=l.target.name;c[d]=l.target.value.trim(),localStorage.setItem(a,JSON.stringify(c))}function p(){const l=JSON.parse(localStorage.getItem(a));if(!l)return;const{email:d,comment:f}=o.elements;c.email=l.email,c.comment=l.comment,d.value=c.email,f.value=c.comment}async function m(l){if(l.preventDefault(),!c.email||!c.comment){v.show({iconUrl:"./img/error.svg",message:"Please fill out the form!",backgroundColor:"#00b068",messageColor:"#FFF",messageSize:"16px",position:"topRight"});return}const d=`${t}${n}`;try{await x.post(d,c),e.classList.remove("visually-hidden"),s.classList.add("no-scroll"),window.addEventListener("keydown",h),i.addEventListener("click",y),S()}catch(f){v.show({iconUrl:"./img/error.svg",message:`${f.message}`,backgroundColor:"#00b068",messageColor:"#FFF",messageSize:"16px",position:"topRight"})}}function g(){e.classList.add("visually-hidden"),s.classList.remove("no-scroll"),window.removeEventListener("keydown",h),i.removeEventListener("click",y),c.email="",c.comment=""}function h(l){l.key==="Escape"&&g()}function y(l){l.target.querySelector(".ltw-modal-container")&&g()}function S(){localStorage.removeItem(a),o.reset()}},G=()=>{const o=document.querySelector(".scrollToTopBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}o.addEventListener("click",e);function r(){document.body.scrollTop>20||document.documentElement.scrollTop>20?o.style.display="block":o.style.display="none"}window.onscroll=r},W=()=>{document.querySelectorAll(".footer-soc-link").forEach(e=>{e.addEventListener("mouseover",()=>{e.style.color="#00b068",e.style.position="relative",e.style.transform="scale(2)rotate(360deg)",e.style.zIndex="1",e.style.textShadow="0 4px 8px rgba(0, 0, 0, 0.6)"}),e.addEventListener("mouseout",()=>{e.style.color="#292929",e.style.transform="scale(1)",e.style.zIndex="0",e.style.textShadow="none"})})};I();A();K();U();_();W();G();
//# sourceMappingURL=commonHelpers.js.map