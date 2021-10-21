import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector('.gallery')


function galleryMarkup() {
       return galleryItems.map(( {preview, original, description} ) => {
        return `<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} title=${description}/>
      </a>`
    }).join('')
}

divGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems))

const onClickCurrentPhoto = document.querySelector('.gallery__image')


function openCurrentOriginalPhoto(e) {
    e.preventDefault()
    let gallery = new SimpleLightbox('.gallery a');
    gallery.on('show.simplelightbox', function () {})
    gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
    });
}


onClickCurrentPhoto.addEventListener('click', openCurrentOriginalPhoto)