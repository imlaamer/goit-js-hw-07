import { galleryItems } from './gallery-items.js';


let markup = '';
galleryItems.forEach(({preview, original, description}) =>  
markup += `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`)
;

const galleryList = document.querySelector('.gallery');
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


galleryList.addEventListener('click', openModal);

function openModal(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') return; 

let url  = event.target.dataset.source;

const instance = basicLightbox.create(`<div class="modal"><img src='${url}' width="800" height="600"></img></div>`,
 {
onShow: (instance) => {
    if (event.target.nodeName !== 'IMG') {
        return; 
    }
instance.element('.modal').addEventListener('click',  closeModal);
window.addEventListener('keydown', closeModal) 
},
onClose: () => {
 window.removeEventListener('keydown',closeModal)
}});

instance.show();

function closeModal({code, target}) {
    if(code === 'Escape' || target.nodeName === 'IMG')
    instance.close()
