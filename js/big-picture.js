import { isEscapeKey } from './util.js';
import { renderFirstComments, removeComments, addDeleteLoaderElement, loadMoreComments } from './comments.js';

// для большой картинки
const bigPictureElement = document.querySelector('.big-picture');
const imgElement = bigPictureElement.querySelector('img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const commentsCountElement = bigPictureElement.querySelector('.comments-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');


// для закрытия картинки
const closeButtonElement = document.querySelector('.big-picture__cancel');

// создает большую картинку
const renderBigPicture = (photo) => {
  imgElement.src = photo.url;
  descriptionElement.textContent = photo.description;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;
  addDeleteLoaderElement(photo.comments);
  removeComments();
  renderFirstComments(photo.comments); // когда в comments меньше 5 элементов - не работает :(
  loadMoreComments(photo.comments); //загружает только кратное 5 числодополнительных комментариев
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
};

//закрывает большую картинку кликом на крестик
closeButtonElement.addEventListener('click', () => {
  closeBigPicture ();
});

export {openBigPicture};
