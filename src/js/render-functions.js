import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(img => `
        <a href="${img.largeImageURL}" class="gallery-item">
            <img src="${img.webformatURL}" alt="${img.tags}">
            <div class="info">
                <p>❤️ ${img.likes}  👁️ ${img.views}  💬 ${img.comments}  ⬇️ ${img.downloads}</p>
            </div>
        </a>
    `).join('');
    
    new SimpleLightbox('.gallery a').refresh();
}