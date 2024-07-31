export const GENERATOR = {
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

export const COMMENT_DATA = {
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
    '',
    'Виды отеля',
    'Go to the beach',
    'Пляж и лазурное море',
    'Красивые виды',
    'Веселая еда',
    'Машина Бэтмана',
    'Завтрак в Китае',
    'Yummy–yummy',
    'Отдых на пляже',
    'Минимализм в обуви',
    'Золотой песок',
    'Новая машина',
    'Вкусный обед',
    'Кото-суши',
    'Робо-буты',
    'Полет нормальный',
    'Впервые на концерте',
    'Ретро выставка',
    'Ночная подсветка :)',
    'Спокойствие',
    'Первая попытка приготовить ужин',
    'Любовный закат',
    'Привет, Себасчиан. А где русалочка?',
    'Самый лучшая пятница',
    'Кажется нас сейчас съедят'
  ]
};

export const COMMENT_LOAD_STEP = 5;

export const MAX_COMMENT_LENGTH = 140;

export const MAX_HASHTAG_LENGTH = 20;

export const MAX_HASHTAG_ITEM = 5;

export const UPLOAD_IMAGE_SCALE_CONFIG = {
  min: 25,
  max: 100,
  step: 25,
  defaultValue: 100
};

export const UPLOAD_IMAGE_EFFECTS = {
  'chrome': {
    min: 0,
    max: 1,
    step: 0.1,
    start: 1
  },
  'sepia': {
    min: 0,
    max: 1,
    step: 0.1,
    start: 1
  },
  'marvin': {
    min: 0,
    max: 100,
    step: 0.1,
    start: 100
  },
  'phobos': {
    min: 0,
    max: 3,
    step: 0.1,
    start: 3
  },
  'heat': {
    min: 1,
    max: 3,
    step: 0.1,
    start: 3
  }
};

export const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';

export const ROUTES = {
  'getData': '/data',
  'postData': '/'
};

export const METHODS = {
  'POST': 'post',
  'GET': 'get'
};
