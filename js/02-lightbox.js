import { galleryItems } from "./gallery-items.js";

let markup = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markup += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" width="300" heigth="200"/>
        </a>
      </li>`)
);

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  overlayOpacity: 0.98,
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", function () {
  lightbox.refresh();
});
