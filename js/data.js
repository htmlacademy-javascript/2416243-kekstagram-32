import { GENERATOR, COMMENT_DATA } from './constants.js';
import { getRandomInteger, getRandomArrayElement } from './util.js';

const createId = () => {
  let id = 1;
  return () => id++;
};

const commentsId = createId();

const createPhotoComment = () => {
  const id = commentsId();
  const avatar = `img/avatar-${ getRandomInteger(GENERATOR.AVATAR_ID.min, GENERATOR.AVATAR_ID.max) }.svg`;
  const message = getRandomArrayElement(COMMENT_DATA.MESSAGES);
  const name = getRandomArrayElement(COMMENT_DATA.NAMES);

  return {
    id: id,
    avatar: avatar,
    message: message,
    name: name,
  };
};

const createPhotoData = (_, index) => {
  const id = index + 1;
  const url = `photos/${ id }.jpg`;
  const description = getRandomArrayElement(COMMENT_DATA.DESCRIPTIONS);
  const like = getRandomInteger(GENERATOR.LIKES_COUNT.min, GENERATOR.LIKES_COUNT.max);
  const comments = Array.from({length: getRandomInteger(GENERATOR.COMMENTS_COUNT.min, GENERATOR.COMMENTS_COUNT.max)}, createPhotoComment);

  return {
    id: id,
    url: url,
    description: description,
    likes: like,
    comments: comments,
  };
};

const generatePhotosData = () => Array.from({length: GENERATOR.PHOTOS_COUNT.max}, createPhotoData);

export { generatePhotosData };
