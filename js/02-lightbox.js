import { galleryItems } from './gallery-items.js';

let markup = '';
galleryItems.forEach(({preview, original, description}) =>  
markup += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a></li>`)
;

const galleryList = document.querySelector('.gallery')
galleryList.innerHTML = markup;

galleryList.style.display = 'flex';
galleryList.style.alighnItems = 'center';
galleryList.style.justifyContent = 'center';
galleryList.style.flexWrap = 'wrap';
galleryList.style.rowGap = '10px';
galleryList.style.columnGap = '10px';
galleryList.style.marginBottom = '50px';

const galleryImages = document.querySelectorAll('img');
galleryImages.forEach(image => {image.style.width = '300px';  image.style.heigth = '200px'});



const lightbox = new SimpleLightbox('.gallery a', {overlayOpacity: 0.98, captionsData: 'alt' , captionDelay: 250});

lightbox.on('show.simplelightbox', function () {
  lightbox.refresh()
});

