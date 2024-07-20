import {isEscapeKey} from './util.js';
import {renderComments} from './comments.js';
import {COMMENT_LOAD_STEP} from './constants.js';

const bigPicturePopup = document.querySelector('.big-picture');
const buttonClosePopup = document.querySelector('.big-picture__cancel');
const commentsLoaderButton = document.querySelector('.social__comments-loader');
let limitComment = COMMENT_LOAD_STEP;
let commentsLoader;

const changeMaxCommentClickHandler = (comments) => {
  limitComment += COMMENT_LOAD_STEP;
  renderComments(comments, limitComment);
};

const closePopupEscKeyHandler = (event) => {
  if (isEscapeKey(event)) {
    // eslint-disable-next-line no-use-before-define
    closePopup();
  }
};

const closePopupClickHandler = () => {
  // eslint-disable-next-line no-use-before-define
  closePopup();
};

const openPopup = (comments) => {
  commentsLoader = () => changeMaxCommentClickHandler(comments);
  bigPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closePopupEscKeyHandler);
  buttonClosePopup.addEventListener('click', closePopupClickHandler);
  commentsLoaderButton.addEventListener('click', commentsLoader);
};

const closePopup = () => {
  bigPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closePopupEscKeyHandler);
  buttonClosePopup.removeEventListener('click', closePopupClickHandler);
  commentsLoaderButton.removeEventListener('click', commentsLoader);
};

const fillPopup = (photoData) => {
  const { url, comments, description, likes } = photoData;

  bigPicturePopup.querySelector('.big-picture__img img').src = url;
  bigPicturePopup.querySelector('.big-picture__img img').alt = description;
  bigPicturePopup.querySelector('.likes-count').textContent = likes;
  bigPicturePopup.querySelector('.social__caption').textContent = description;

  limitComment = COMMENT_LOAD_STEP;
  renderComments(comments, limitComment);
  openPopup(comments);
};

export { fillPopup };
