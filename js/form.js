import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const MAX_TAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Хештеги заполнены неверно';
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const bodyElement = document.querySelector('body');
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = document.querySelector('.img-upload__input');
const editModalElement = document.querySelector('.img-upload__overlay');
const hashtagInputElement = document.querySelector('.text__hashtags');
const textareaElement = document.querySelector('.text__description');
const closeButtonElement = document.querySelector('.img-upload__cancel');
const submitButtonElement = document.querySelector('.img-upload__submit');
const photoPreviewElement = uploadFormElement.querySelector('.img-upload__preview img');
const effectsPreviewElements = uploadFormElement.querySelectorAll('.effects__preview');

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_TAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagInputElement,
  validateTags,
  TAG_ERROR_TEXT,
);

const hideModal = () => {
  uploadFormElement.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  editModalElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const isTextFieldFocused = () =>
  document.activeElement === hashtagInputElement ||
  document.activeElement === textareaElement;

const isErrorMessageShown = () => Boolean(document.querySelector('.error'));

function onDocumentKeydown(evt) {
  if (isEscapeKey && !isTextFieldFocused() && !isErrorMessageShown()) {
    evt.preventDefault();
    hideModal();
  }
}

const showModal = () => {
  editModalElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = SubmitButtonText.IDLE;
};

const isValidType = (file) => {
  const fileName = file.name.toLowerCase();
  return FILE_TYPES.some((it) => fileName.endsWith(it));
};

const onFileInputChange = () => {
  const file = uploadInputElement.files[0];
  if (file && isValidType(file)) {
    photoPreviewElement.src = URL.createObjectURL(file);
    effectsPreviewElements.forEach((preview) => {
      preview.style.backgroundImage = `url('${photoPreviewElement.src}')`;
    });
  }
  showModal();
};

uploadInputElement.addEventListener('change', () => {
  onFileInputChange();
});
closeButtonElement.addEventListener('click', () => {
  hideModal();
});

const setOnFormSubmit = (callback) => {
  uploadFormElement.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await callback(new FormData(uploadFormElement));
      unblockSubmitButton();
    }
  });
};

export { setOnFormSubmit, hideModal };

