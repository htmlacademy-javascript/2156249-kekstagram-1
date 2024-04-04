import { isEscapeKey } from './util.js';
import { renderComments, removeComments } from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const imgElement = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');

const closeButtonElement = document.querySelector('.big-picture__cancel');

const renderBigPicture = (photo) => {
  imgElement.src = photo.url;
  descriptionElement.textContent = photo.description;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  removeComments();
  renderComments(photo.comments, true);
};

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

const openBigPicture = (photo) => {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderBigPicture(photo);
  document.addEventListener('keydown', onDocumentKeydown);
};

closeButtonElement.addEventListener('click', () => {
  closeBigPicture ();
});

export {openBigPicture};
