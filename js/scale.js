const Scale = {
  STEP: 25,
  MIM: 25,
  MAX: 100,
  DEFAULT: 100
};

const scaleInputElement = document.querySelector('.scale__control--value');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const imageElement = document.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - Scale.STEP;

  if (newValue < Scale.MIN) {
    newValue = Scale.MIN;
  }

  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + Scale.STEP;

  if (newValue > Scale.MAX) {
    newValue = Scale.MAX;
  }

  scaleImage(newValue);
};

const resetScale = () => scaleImage(Scale.DEFAULT);

smallerButtonElement.addEventListener('click', onSmallerButtonClick);
biggerButtonElement.addEventListener('click', onBiggerButtonClick);

export { resetScale };
