import {createPhotos} from './data.js';

const picturesSection = document.querySelector('.pictures');
const picturesSectionFragment = document.createDocumentFragment();

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPhotos = createPhotos();

userPhotos.forEach((photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.message;
  picturesSectionFragment.appendChild(pictureElement);
});

picturesSection.appendChild(picturesSectionFragment);
