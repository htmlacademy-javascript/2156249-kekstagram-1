import { isEscapeKey } from './util.js';

const picturesContainer = document.querySelector('.pictures');

// для большой картинки
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const commentsCount = bigPictureElement.querySelector('.comments-count');
const commentsContainer = bigPictureElement.querySelector('.social__comments');
const description = bigPictureElement.querySelector('.social__caption');
const commentCount = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

// для комментариев
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const fragment = document.createDocumentFragment();

// для закрытия картинки
const closeElement = document.querySelector('.big-picture__cancel');

// создает комментарий
const createCommentElement = (commentsArrayElement) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.querySelector('.social__picture').src = commentsArrayElement.avatar;
  commentElement.querySelector('.social__picture').alt = commentsArrayElement.name;
  commentElement.querySelector('.social__text').textContent = commentsArrayElement.message;

  return commentElement;
};

// создает большую картинку
const createBigPicture = (requiredThumbnail) => {
  bigPictureImg.src = requiredThumbnail.url;
  description.textContent = requiredThumbnail.description;
  likesCount.textContent = requiredThumbnail.likes;
  commentsCount.textContent = requiredThumbnail.comments.length;

  commentsContainer.innerHTML = '';
  const commentsArray = requiredThumbnail.comments;
  commentsArray.forEach((commentsArrayElement) => {
    const commentElement = createCommentElement(commentsArrayElement);
    fragment.append(commentElement);
  });
  commentsContainer.append(fragment);
};

// открывает и закрывает большую картинку
const openBigPicture = (requiredThumbnail, array) => {
  bigPictureElement.classList.remove('hidden');

  createBigPicture(requiredThumbnail, array);

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureElement.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

//закрывает большую картинку кликом на крестик
closeElement.addEventListener('click', () => {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

const bigPictureHandler = (array) => {
  picturesContainer.addEventListener('click', (evt) => {
    // ищет ссылку, по которой произошел клик, и ее датасет
    const targetLink = evt.target.closest('.picture');
    const targetLinkId = targetLink.getAttribute('data-picture-id');

    //ищет в данных объект с таким же датасетом
    const requiredThumbnail = array.find((arrayElement) => arrayElement.id === +targetLinkId);

    // открывает и закрывает большую картинку
    openBigPicture(requiredThumbnail, array);
  });
};

export { bigPictureHandler };
