import { openBigPicture } from './big-picture.js';
import { renderPhotos } from './render-photos.js';

const picturesContainer = document.querySelector('.pictures');

let pictures = [];
const onContainerClick = (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (!pictureElement) {
    return;
  }
  evt.preventDefault();
  const pictureId = pictureElement.getAttribute('data-picture-id');
  const targetPhoto = pictures.find((item) => item.id === +pictureId);
  openBigPicture(targetPhoto);
};

const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPhotos(pictures, picturesContainer);
  picturesContainer.addEventListener('click', onContainerClick);
};

export { renderGallery };
