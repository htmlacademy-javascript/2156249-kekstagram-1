import { openBigPicture } from './big-picture.js';
import { renderPhotos } from './render-photos.js';

const galleryContainerElement = document.querySelector('.pictures');

const setGalleryListener = (photos) => {
  galleryContainerElement.addEventListener('click', (evt) => {
    // ищет ссылку, по которой произошел клик, и ее датасет
    const pictureElement = evt.target.closest('.picture');
    if (!pictureElement) {
      return;
    }

    evt.preventDefault();
    const pictureId = pictureElement.getAttribute('data-picture-id');

    //ищет в данных объект с таким же датасетом
    const targetPhoto = photos.find((photo) => photo.id === +pictureId);

    // открывает и закрывает большую картинку
    openBigPicture(targetPhoto);
  });

  renderPhotos(photos, galleryContainerElement);
};

export { setGalleryListener };
