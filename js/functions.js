// Проверка на палиндром

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(' ', '');

  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }

  return tempString === reverseString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');


// Возвращение цифр

const getNumber = (string) => {

  if (typeof string === 'number') {
    return Math.abs(string.toString().replace('.', ''));
  }

  const formattedString = string.replaceAll(' ', '');

  let resultString = '';
  for (let i = 0; i <= formattedString.length - 1; i++) {
    if (formattedString[i] >= 0 && formattedString[i] <= 9) {
      resultString += formattedString[i];
    }
  }
  return parseFloat(resultString);
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);


// Наращивание строки

const getString = (basicString, stringLength, extraString) => {
  const symbolsToAdd = stringLength - basicString.length;

  if (symbolsToAdd <= 0) {
    return basicString;
  }

  return extraString.slice(0, symbolsToAdd % extraString.length) + extraString.repeat(symbolsToAdd / extraString.length) + basicString;
};

getString('1', 2, '0');
getString('1', 4, '0');
getString('q', 4, 'werty');
getString('q', 4, 'we');
getString('qwerty', 4, '0');


// Проверка длины строки

const isLongOrNot = (string, maxLength) => string.length <= maxLength;

isLongOrNot ('проверяемая строка', 20);
isLongOrNot ('проверяемая строка', 18);
isLongOrNot ('проверяемая строка', 10);
