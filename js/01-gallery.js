import { galleryItems } from "./gallery-items.js";

let markup = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markup += `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" width="300" heigth="200"/>
        </a>
      </li>`)
);

const galleryList = document.querySelector(".gallery");
galleryList.innerHTML = markup;

galleryList.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  let url = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<div class="modal"><img src='${url}' width="800" height="600"></img></div>`,
    {
      onShow: (instance) => {
        instance.element(".modal").addEventListener("click", closeModal);
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();

  function closeModal({ code, target }) {
    if (code === "Escape" || target.nodeName === "IMG") instance.close();
  }
}