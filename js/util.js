// Создаем случайное целое число из диапозона

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получаем случайный элемент массива

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

// Определяем нажатие на клавишу Escape

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, getRandomArrayElement, isEscapeKey};
