import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector('.gallery')

function galleryMarkup() {
       return galleryItems.map(( {preview, original, description} ) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" loading="lazy" src=${preview} alt=${description} title=${description}/>
      </a>`
    }).join('')
}

divGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems))

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {})
