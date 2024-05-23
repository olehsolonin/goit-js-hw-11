import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",p="44014136-e2da13f55dbc3b2e82126e922",g=s=>{const i=new URLSearchParams({key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${i}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})},y=s=>s.map(({largeImageURL:i,id:t,webformatURL:a,tags:e,likes:r,views:o,comments:h,downloads:m})=>`<li class="box-item">
			<a class="box-link" href="${i}">
			  <img
				 id="${t}"
				 class="box-image"
				 src="${a}"
				 alt="${e}"
				 width="100%"
				 height="152"
			  />
			</a>
			<div class="image-characteristics">
			  <div class="characteristic-item">
				 <h3 class="image-title">Likes</h3>
				 <p class="image-data">${r}</p>
			  </div>
			  <div class="characteristic-item">
				 <h3 class="image-title">Views</h3>
				 <p class="image-data">${o}</p>
			  </div>
			  <div class="characteristic-item">
				 <h3 class="image-title">Comments</h3>
				 <p class="image-data">${h}</p>
			  </div>
			  <div class="characteristic-item">
				 <h3 class="image-title">Downloads</h3>
				 <p class="image-data">${m}</p>
			  </div>
			</div>
		 </li>`).join(""),c=document.querySelector(".gallery-box-js"),b=document.querySelector(".search-form-js"),d=document.querySelector(".loader-js");let n;const L=()=>{n?n.refresh():n=new u(".box-link",{captions:!0,captionsData:"alt",captionDelay:250})};function v(s){s.preventDefault();const i=s.target.elements.search.value.trim();if(i===""){c.innerHTML="",s.target.reset(),l.show({message:"Input field can not be empty",position:"topRight",timeout:2e3,color:"red"});return}c.innerHTML="",d.classList.remove("is-hidden"),g(i).then(t=>(t.total===0&&l.show({message:"Sorry, there are no images for this query",position:"topRight",timeout:2e3,color:"red"}),t)).then(t=>{const a=y(t.hits.slice(0,9));c.insertAdjacentHTML("afterbegin",a),L()}).catch(t=>console.log(t)).finally(()=>{s.target.reset(),d.classList.add("is-hidden")})}b.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
