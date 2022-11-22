import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const items = galleryItems
  .map((item) => {
    return `
    <div class"gallery__item>
        <a class"gallery__link" href="#">
            <img class="gallery__image"
            data-source="${item.original}"
            src="${item.preview}"
            alt="${item.description}"
            />
        </a>
      </div>
      `;
  })
  .join("");

gallery.innerHTML = items;

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();
});
