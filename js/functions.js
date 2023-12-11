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
