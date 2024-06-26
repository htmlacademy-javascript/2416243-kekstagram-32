const PHOTOS_COUNT = {
  min: 1,
  max: 25
};

const LIKES_COUNT = {
  min: 15,
  max: 200
};

const COMMENTS_COUNT = {
  min: 0,
  max: 30
};

const AVATAR_NUMBER = {
  min: 1,
  max: 6
};

const NAMES = [
  'Михаил',
  'София',
  'Александр',
  'Анна',
  'Максим',
  'Мария',
  'Артем',
  'Ева',
  'Макр',
  'Виктория',
  'Лев',
  'Полина'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Не подходи ко мне, я обиделась.',
  'Поднимаю настроение мини–фотосессией.',
  'Фото, заряженное на позитив.',
  'Теплые воспоминания в холодное время года.',
  'У природы нет плохой погоды.',
  'Добби свободен.',
  'Мой кот',
  'Yummy–yummy.',
  'Наша чайная церемония.'
];

function getRandomInteger(min, max) {
  return Math.round(Math.random() * Math.abs(max - min) + min);
}

const createId = () => {
  let id = 1;
  return () => id++;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const commentsId = createId();

const createPhotoComment = () => {
  const id = commentsId();
  const avatar = `img/avatar-${ getRandomInteger(AVATAR_NUMBER.min, AVATAR_NUMBER.max) }.svg`;
  const message = getRandomArrayElement(MESSAGES);
  const name = getRandomArrayElement(NAMES);

  return {
    id: id,
    avatar: avatar,
    message: message,
    name: name,
  };
};

const createPhotoData = (_, index) => {
  const id = index + 1;
  const url = `photo/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const like = getRandomInteger(LIKES_COUNT.min, LIKES_COUNT.max);
  const comments = Array.from({length: getRandomInteger(COMMENTS_COUNT.min, COMMENTS_COUNT.max)}, createPhotoComment);

  return {
    id: id,
    url: url,
    description: description,
    likes: like,
    comments: comments,
  };
};

const photosData = () => Array.from({length: PHOTOS_COUNT.max}, createPhotoData);

photosData();
