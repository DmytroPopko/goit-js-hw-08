import { galleryItems } from './gallery-items.js';
import simplelightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function makeGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const cardsMarkup = createGallery(galleryItems);

  galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
  new simplelightbox('.gallery a');

  function createGallery(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
        `;
      })
      .join('');
  }
}

makeGallery();
