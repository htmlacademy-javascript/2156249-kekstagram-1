const bigPictureElement = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

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
const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = getCommentElement(comment);
    fragment.append(commentElement);
  });

  commentsContainerElement.append(fragment);
};

// очистка контейнера с комментарими
const removeComments = () => {
  commentsContainerElement.innerHTML = '';
};

export {renderComments, removeComments};
