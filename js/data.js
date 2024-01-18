import {getRandomInteger, getRandomArrayElement} from './util.js';

// Для фотографии

const DESCRIPTIONS = [
  'Отличное фото!',
  'Ужасное фото!',
  'Ну неплохо',
  'Так себе',
  'Ты красотка :)'
];

const PHOTOS_AMOUNT = 25;

// Для комментария

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Борис',
  'Валерия',
  'Гена',
  'Даша',
  'Елена',
  'Женя',
  'Захар',
];

//Создаем комментарий

const createComment = () => {
  const messageAmount = getRandomInteger(1, 2);

  return {
    id: Math.ceil(Math.random() * 1000),
    avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
    message: Array.from({length: messageAmount}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: getRandomArrayElement(NAMES)
  };
};

//Создаем фото

const createPhoto = (id) => ({
  id: id,
  url: `photos/${ id }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComment()
});

const createPhotos = () => Array.from({length: PHOTOS_AMOUNT}, (item, index) => createPhoto(index + 1));

export {createPhotos};
