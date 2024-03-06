const FIRST_COMMENTS_COUNT = 5;
const COMMENTS_STEP = 5;

const bigPictureElement = document.querySelector('.big-picture');
const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');

// добавление и удаление кнопки "загрузить еще"
const addDeleteLoaderElement = (comments) => {
  if (comments.length <= FIRST_COMMENTS_COUNT) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
};

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
const renderFirstComments = (comments) => {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < FIRST_COMMENTS_COUNT; i++) {
    const commentElement = getCommentElement(comments[i]); // когда в comments меньше 5 элементов - не работает :(
    fragment.append(commentElement);
  }

  commentsContainerElement.append(fragment);
};

const loadMoreComments = (comments) => {
  let moreCommentsCount = 5;
  commentsLoaderElement.addEventListener('click', () => {
    moreCommentsCount += COMMENTS_STEP;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < moreCommentsCount; i++) {
      const commentElement = getCommentElement(comments[i]); // когда в comments меньше 5 элементов - не работает :(
      fragment.append(commentElement);
    }

    commentsContainerElement.innerHTML = '';
    commentsContainerElement.append(fragment);
  });
};


// очистка контейнера с комментарими
const removeComments = () => {
  commentsContainerElement.innerHTML = '';
};

export { renderFirstComments, removeComments, addDeleteLoaderElement, loadMoreComments };
