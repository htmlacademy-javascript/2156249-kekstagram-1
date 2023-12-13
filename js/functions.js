// Проверка на палиндром

const line = 'Лёша на полке клопа нашёл';

function getReverseLine (line) {
  let reverseLine = '';
  for (let i = line.length - 1; i >= 0; i--) {
    reverseLine += line[i];
  }

  return reverseLine;
}

const reverseLine = getReverseLine (line);

function checkPalindrome () {
  if (line.toLowerCase().replaceAll(' ', '') === reverseLine.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
}

const result = checkPalindrome();


// Возвращение цифр

function getNumber (string) {

  if (typeof string === 'number') {
    return Math.abs(string.toString().replace(".", ""));
  }

  const formattedString = string.replaceAll(' ', '');

  let resultString = '';
  for (let i = 0; i <= formattedString.length - 1; i++) {
    if (formattedString[i] >= 0 && formattedString[i] <= 9) {
      resultString += formattedString[i];
    }
  }
  return parseFloat(resultString);
}

console.log(getNumber('2023 год'));
console.log(getNumber('ECMAScript 2022'));
console.log(getNumber('1 кефир, 0.5 батона'));
console.log(getNumber('агент 007'));
console.log(getNumber('а я томат'));
console.log(getNumber(2023));
console.log(getNumber(-1));
console.log(getNumber(1.5));
