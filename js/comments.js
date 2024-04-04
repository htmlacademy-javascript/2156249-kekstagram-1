const COMMENTS_STEP = 5;

let shownCommentCount = 0;
let photoComments = [];

const bigPictureElement = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');

const checkCommentsCount = () => {
  if (photoComments.length <= shownCommentCount) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
};

const getCommentElement = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  const socialPictureElement = commentElement.querySelector('.social__picture');

  socialPictureElement.src = comment.avatar;
  socialPictureElement.alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;

  return commentElement;
};

const renderComments = (comments, isFirstRender) => {
  if (isFirstRender) {
    shownCommentCount = 0;
    photoComments = comments;
  }

  const count = Math.min(shownCommentCount + COMMENTS_STEP, photoComments.length);

  const fragment = document.createDocumentFragment();

  for (let i = shownCommentCount; i < count; i++) {
    const commentElement = getCommentElement(photoComments[i]);
    fragment.append(commentElement);
  }

  commentsContainerElement.append(fragment);

  shownCommentCount = count;
  commentCountElement.innerHTML = `${shownCommentCount} из <span class="comments-count">${photoComments.length}</span> комментариев`;
  checkCommentsCount();
};

commentsLoaderElement.addEventListener('click', () => {
  renderComments(photoComments);
});

const removeComments = () => {
  commentsContainerElement.innerHTML = '';
};

export { renderComments, removeComments };
