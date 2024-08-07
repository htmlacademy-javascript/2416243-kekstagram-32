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
    step: 1,
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

export const PHOTO_FILE_TYPE = 'image/jpg, image/png, image/gif, image/jpeg';

export const DEBOUNCE_DELAY = 500;

export const ALERT_SHOW_TIME = 500;
