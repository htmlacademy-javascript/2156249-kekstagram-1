const COMMENTS_STEP = 5;

let shownCommentCount = 0;
const photoComments = [];

const bigPictureElement = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

// добавление и удаление кнопки "загрузить еще"
// const checkCommentsCount = (comments) => {
//   if (comments.length <= FIRST_COMMENTS_COUNT) {
//     commentsLoaderElement.classList.add('hidden');
//   } else {
//     commentsLoaderElement.classList.remove('hidden');
//   }
// };

// создание одного комментария
const getCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const socialPictureElement = commentElement.querySelector('.social__picture');

  socialPictureElement.src = comment.avatar;
  socialPictureElement.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

// рендер всех комментариев
const renderComments = (comments, isFirstRender) => {
  const fragment = document.createDocumentFragment();

  if (isFirstRender) {
    comments.forEach((comment) => {
      photoComments.push(comment);
    });
    shownCommentCount += COMMENTS_STEP;
    const count = Math.min(shownCommentCount, photoComments.length);
    for (let i = 0; i < count; i++) {
      const commentElement = getCommentElement(photoComments[i]);
      fragment.append(commentElement);
    }
    shownCommentCount = 0;
  } else {
    isFirstRender = false;
    shownCommentCount += COMMENTS_STEP;
    const count = Math.min(shownCommentCount, photoComments.length);
    for (let i = 0; i < count; i++) {
      const commentElement = getCommentElement(photoComments[i]);
      fragment.append(commentElement);
    }
  }

  commentsContainerElement.innerHTML = '';
  commentsContainerElement.append(fragment);
};

// очистка контейнера с комментарими
const removeComments = () => {
  commentsContainerElement.innerHTML = '';
};

export { renderComments, removeComments };
