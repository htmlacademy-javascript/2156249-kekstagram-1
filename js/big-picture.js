
const picturesContainer = document.querySelector('.pictures');
const bigPictureElement = document.querySelector('.big-picture');
const closeElement = document.querySelector('.big-picture__cancel');

const bigPictureHandler = function (array) {
  picturesContainer.addEventListener('click', function (evt) {
    // открываю окно
    bigPictureElement.classList.remove('hidden');


    // ищу ссылку, по которой кликнула, и ее датасет
    let targetLink = evt.target.closest('a');
    console.log(targetLink);
    let targetLinkId = targetLink.getAttribute('data-picture-number');
    console.log(targetLinkId);


    //ищу в данных объект с таким же датасетом
    let requiredThumbnail = array.find(arrayElement => arrayElement.dataset === targetLinkId);
    console.log(requiredThumbnail);


    //добавляю большой картинке необходимые данные из найденного объекта
    const bigPictureImg = bigPictureElement.querySelector('img');
    bigPictureImg.src = requiredThumbnail.url;

    const likesCount = bigPictureElement.querySelector('.likes-count');
    likesCount.textContent = requiredThumbnail.likes;

    const commentsCount = bigPictureElement.querySelector('.comments-count');
    commentsCount.textContent = requiredThumbnail.comments.length;


    //отдельно создаю комментарии
    const commentsContainer = bigPictureElement.querySelector('.social__comments');
    commentsContainer.innerHTML='';
    console.log(commentsContainer);

    const commentsArray = requiredThumbnail.comments;
    console.log(commentsArray);

    const fragment = document.createDocumentFragment();

    commentsArray.forEach((commentsArrayElement) => {
      const comment = document.createElement('li');
      comment.classList.add('social__comment');

      const commentImg = document.createElement('img');
      commentImg.classList.add('social__picture');
      commentImg.src = commentsArrayElement.avatar;
      commentImg.alt = commentsArrayElement.name;
      commentImg.width = '35';
      commentImg.height = '35';
      comment.append(commentImg);

      const commentText = document.createElement('p');
      commentText.classList.add('social__text');
      commentText.textContent = commentsArrayElement.message;
      comment.append(commentText);

      fragment.append(comment);
    })

    commentsContainer.append(fragment);
    console.log(commentsContainer);


    //добавляю подпись под фотографией
    const description = bigPictureElement.querySelector('.social__caption');
    description.textContent = requiredThumbnail.description;


    //прячу блоки счётчика комментариев и загрузки новых комментариев
    const commentCount = bigPictureElement.querySelector('.social__comment-count');
    const commentsLoader = bigPictureElement.querySelector('.comments-loader');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');


    //фиксирую контейнер с фотографиями при прокрутке
    document.body.classList.add('modal-open');
  });


  //Добавляю возможность закрыть большую картинку
  closeElement.addEventListener('click', () => {
    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      bigPictureElement.classList.add('hidden');
      document.body.classList.remove('modal-open');
    }
  });
};

export { bigPictureHandler }
