const containerElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPhotoElement = (photo) => {
  const photoElement = pictureTemplate.cloneNode(true);

  photoElement.dataset.pictureId = photo.id;

  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__img').alt = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

  return photoElement;
};

const renderPhotos = (photos, container) => {
  container.querySelectorAll('.picture').forEach((element) => element.remove());

  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = createPhotoElement(photo);
    fragment.appendChild(photoElement);
  });

  containerElement.appendChild(fragment);
};

export { renderPhotos };


