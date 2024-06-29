function getRandomInteger(min, max) {
  return Math.round(Math.random() * Math.abs(max - min) + min);
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomArrayElement };
