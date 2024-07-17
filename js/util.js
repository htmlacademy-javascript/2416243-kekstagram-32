function getRandomInteger(min, max) {
  return Math.round(Math.random() * Math.abs(max - min) + min);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getRandomArrayElement, isEscapeKey };
