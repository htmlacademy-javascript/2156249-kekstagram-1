// Для фотографии

const DESCRIPTIONS = [
  'Отличное фото!',
  'Ужасное фото!',
  'Ну неплохо',
  'Так себе',
  'Ты красотка :)'
];

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

const getRandomInfiniteNumber = () => {
  const numReserve = [];
  while (numReserve.length < 12) {
    var randomNumber = Math.ceil(Math.random() * 1000);
    let found = false;
    for (let i = 0; i < numReserve.length; i++) {
      if (numReserve[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) {
      numReserve[numReserve.length] = randomNumber;
    }
  }
  return randomNumber;
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const messageNumber = getRandomInteger(1, 2);

//Основная функция

const createPhoto = () => {
  const createComment = () => ({
    id: getRandomInfiniteNumber(),
    avatar: 'img/avatar-' + '' + getRandomInteger(1, 6) + '.svg',
    message: Array.from({length: messageNumber}, () => getRandomArrayElement(MESSAGES)).join(' '),
    name: getRandomArrayElement(NAMES)
  });

  return {
    id: getRandomInteger(1, 25),
    url: 'photos/' + '' + getRandomInteger(1, 25) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComment()
  };
};

const severalPhotos = Array.from({length: 25}, createPhoto);

console.log(severalPhotos);
