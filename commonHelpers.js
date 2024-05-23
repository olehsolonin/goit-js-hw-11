import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="44014136-e2da13f55dbc3b2e82126e922",d=t=>{const s=new URLSearchParams({key:p,q:t,image_type:"photo",per_page:9,orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(i=>{if(!i.ok)throw new Error(i.statusText);return i.json()})},m=t=>t.map(({pageURL:s,id:i,webformatURL:a,tags:e,likes:r,views:o,comments:h,downloads:u}=image)=>`<li class="box-item">
				<a class="box-link" href="${s}" target="_blank">
				 <img
				 id=${i}
					class="box-image"
					src="${a}"
					alt="${e}"
					width = "100%"
					height = "152"
				 />
				
				 </a>
				 <div class="image-characteristics">
					<div class="characteristic-item">
					  <h3 class="image-title">Likes</h3>
					  <p class="image-data">${r}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Views</h3>
					  <p class="image-data">${o}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Comments</h3>
					  <p class="image-data">${h}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Downloads</h3>
					  <p class="image-data">${u}</p>
					</div>
				 </div>
			 	</li>`).join(""),c=document.querySelector(".gallery-box-js"),g=document.querySelector(".search-form-js"),n=document.querySelector("loader-js");function y(t){t.preventDefault();const s=t.target.elements.search.value.trim();if(console.log(s),s===""){c.innerHTML="",t.target.reset(),l.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",n.classList.remove("is-hidden"),d(s).then(i=>{i.total===0&&l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),c.innerHTML=m(i.results)}).catch(i=>console.log(i)).finally(()=>{t.target.reset(),n.classList.add("is-hidden")})}g.addEventListener("submit",y);d().then(t=>{const s=m(t.hits.slice(0,9));console.log(s)}).catch(t=>{console.log(t)});
//# sourceMappingURL=commonHelpers.js.map
