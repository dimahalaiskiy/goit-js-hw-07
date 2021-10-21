import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGalleryEl = document.querySelector('.gallery')


function galleryMarkup() {
       return galleryItems.map(( {preview, original, description} ) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img class="gallery__image" src=${preview}
            data-source=${original}alt=${description}/></a>
        </div>`
    }).join('')
}

divGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup(galleryItems))


const onClickCurrentPhoto = document.querySelector('.gallery')

function openCurrentOriginalPhoto(e) {
    e.preventDefault()
    const modalCurrentPhoto = e.target.dataset.source
    
    const instance = basicLightbox.create(`
        <img src=${modalCurrentPhoto} width="800" height="600">
    `)
    instance.show()


    function escapeModalPhoto(e) {
        const isOpen = document.querySelector('.basicLightbox')
        if(!isOpen) {
            return
        }

        if(e.key === 'Escape') 
           return instance.close()
    }

    window.addEventListener('keyup', escapeModalPhoto)
}

onClickCurrentPhoto.addEventListener('click', openCurrentOriginalPhoto)

