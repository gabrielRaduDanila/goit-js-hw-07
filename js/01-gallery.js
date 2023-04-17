import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const displayGallery = galleryItems
  .map((image) => {
    return `
  <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
  `;
  })
  .join('');

gallery.innerHTML = displayGallery;

const clickHandler = (e) => {
  e.preventDefault();
  const content = document.createElement('div');
  const image = document.createElement('img');
  image.src = `${e.target.dataset.source}`;
  content.appendChild(image);
  const instance = basicLightbox.create(content);
  instance.show();
  gallery.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  });
};

gallery.addEventListener('click', clickHandler);
