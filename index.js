import{a as c,S as l,i}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function u(s){const n=`https://pixabay.com/api/?key=49484019-11a5d61f6cd196bafa2004bf7&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`,r=document.querySelector(".loader");r&&r.classList.add("active");try{return(await c.get(n)).data}catch(e){return console.error(e),{hits:[]}}finally{r&&r.classList.remove("active")}}function f(s){const t=document.querySelector(".gallery");if(t.innerHTML="",s.length===0){t.innerHTML="<p>No images found. Try another search.</p>";return}const n=s.map(r=>`
        <li class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}">
                <div class="info">
                    <p>❤️ ${r.likes}  👁️ ${r.views}  💬 ${r.comments}  ⬇️ ${r.downloads}</p>
                </div>
            </a>
        </li>
    `).join("");t.innerHTML=n,new l(".gallery a").refresh()}document.querySelector("#search-form").addEventListener("submit",async s=>{s.preventDefault(),console.log("submit"),console.log(s);const t=s.target.elements[0].value.trim();if(!t){i.warning({title:"Warning",message:"Enter a search term!"});return}document.querySelector(".gallery").innerHTML='<div class="loader"></div>';const{hits:n}=await u(t);n.length===0?i.error({title:"Error",message:"No images found!"}):f(n)});
//# sourceMappingURL=index.js.map
