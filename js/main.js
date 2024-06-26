const GENERATOR = {
  PHOTOS_COUNT: {
    min: 1,
    max: 25
  },
  LIKES_COUNT: {
    min: 15,
    max: 200
  },
  COMMENTS_COUNT: {
    min: 0,
    max: 30
  },
  AVATAR_ID: {
    min: 1,
    max: 6
  }
};

const TEMPLATE_DATA = {
  NAMES: [
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
  ],
  MESSAGES: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ],
  DESCRIPTIONS: [
    'Не подходи ко мне, я обиделась.',
    'Поднимаю настроение мини–фотосессией.',
    'Фото, заряженное на позитив.',
    'Теплые воспоминания в холодное время года.',
    'У природы нет плохой погоды.',
    'Добби свободен.',
    'Мой кот',
    'Yummy–yummy.',
    'Наша чайная церемония.'
  ]
};

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
  const avatar = `img/avatar-${ getRandomInteger(GENERATOR.AVATAR_ID.min, GENERATOR.AVATAR_ID.max) }.svg`;
  const message = getRandomArrayElement(TEMPLATE_DATA.MESSAGES);
  const name = getRandomArrayElement(TEMPLATE_DATA.NAMES);

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
  const description = getRandomArrayElement(TEMPLATE_DATA.DESCRIPTIONS);
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

const photosData = () => Array.from({length: GENERATOR.PHOTOS_COUNT.max}, createPhotoData);

console.log(photosData());
