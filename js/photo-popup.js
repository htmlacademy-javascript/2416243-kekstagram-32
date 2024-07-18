import { isEscapeKey } from './util.js';
import { renderComments } from './comments.js';

const bigPicturePopup = document.querySelector('.big-picture');
const buttonClosePopup = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    buttonClosePopup.click();
  }
};

const openPopup = () => {
  bigPicturePopup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closePopup = () => {
  bigPicturePopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const fillPopup = (photoData) => {
  const { url, comments, description, likes } = photoData;

  bigPicturePopup.querySelector('.big-picture__img img').src = url;
  bigPicturePopup.querySelector('.big-picture__img img').alt = description;
  bigPicturePopup.querySelector('.likes-count').textContent = likes;
  bigPicturePopup.querySelector('.social__caption').textContent = description;

  renderComments(comments);
  openPopup();
};

buttonClosePopup.addEventListener('click', () => closePopup());

export { fillPopup };
