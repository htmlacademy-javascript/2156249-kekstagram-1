import { isEscapeKey } from './util.js';
import { renderComments, removeComments } from './comments.js';

// для большой картинки
const bigPictureElement = document.querySelector('.big-picture');
const imgElement = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

// для закрытия картинки
const closeButtonElement = document.querySelector('.big-picture__cancel');

// создает большую картинку
const renderBigPicture = (photo) => {
  imgElement.src = photo.url;
  descriptionElement.textContent = photo.description;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  removeComments();
  renderComments(photo.comments);
};

// закрывает большую картинку
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

// открывает и закрывает большую картинку
const openBigPicture = (photo) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderBigPicture(photo);
  document.addEventListener('keydown', onDocumentKeydown);
  commentCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
};

//закрывает большую картинку кликом на крестик
closeButtonElement.addEventListener('click', () => {
  closeBigPicture ();
});

export {openBigPicture};
