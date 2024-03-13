import { isEscapeKey } from "./util.js";

const bodyElement = document.querySelector(`body`);
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('#upload-file');
const editModalElement = document.querySelector('.img-upload__overlay');
const hashtagInputElement = document.querySelector('.text__hashtags');
const textareaElement = document.querySelector('.text__description');
const closeButtonElement = document.querySelector('.img-upload__cancel');

const hideModal = () => {
  uploadFormElement.reset();
  editModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagInputElement ||
  document.activeElement === textareaElement;

function onDocumentKeydown(evt) {
  if (isEscapeKey && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const showModal = () => {
  editModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadInputElement.addEventListener('change', () => {
  showModal();
});

closeButtonElement.addEventListener('click', () => {
  hideModal();
});




