export const createGalleryItemMarkup = (images) => {

	return images.map(
		({ pageURL, id, webformatURL, tags, likes, views, comments, downloads } = image) =>
			`<li class="box-item">
				<a class="box-link" href="${pageURL}" target="_blank">
				 <img
				 id=${id}
					class="box-image"
					src="${webformatURL}"
					alt="${tags}"
					width = "100%"
					height = "152"
				 />
				
				 </a>
				 <div class="image-characteristics">
					<div class="characteristic-item">
					  <h3 class="image-title">Likes</h3>
					  <p class="image-data">${likes}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Views</h3>
					  <p class="image-data">${views}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Comments</h3>
					  <p class="image-data">${comments}</p>
					</div>
					<div class="characteristics-item">
					  <h3 class="image-title">Downloads</h3>
					  <p class="image-data">${downloads}</p>
					</div>
				 </div>
			 	</li>`
	)
		.join('');
}