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

// Дополнительные функции

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const createComment = () => {
  const messageAmount = getRandomInteger(1, 2);

  return {
    id: Math.ceil(Math.random() * 1000),
    avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
    message: Array.from({length: messageAmount}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: getRandomArrayElement(NAMES)
  };
};

//Основная функция

const createPhoto = (id) => ({
  id: id,
  url: `photos/${ id }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComment()
});

const photos = Array.from({length: PHOTOS_AMOUNT}, (item, index) => createPhoto(index + 1));

// eslint-disable-next-line no-console
console.log(photos);
