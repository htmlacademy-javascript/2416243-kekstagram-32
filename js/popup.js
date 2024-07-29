import {isEscapeKey} from './util.js';

let popup;
let closeButton;

const closePopupEscKeyHandler = (event) => {
  if (isEscapeKey(event) && !event.target.type?.startsWith('text')) {
    // eslint-disable-next-line no-use-before-define
    closePopup();
  }
};

const closePopupClickOnDocument = (event) => {
  if (event.target === popup) {
    // eslint-disable-next-line no-use-before-define
    closePopup();
  }
};

const closePopupClickHandler = () => {
  // eslint-disable-next-line no-use-before-define
  closePopup();
};

const openPopup = (element, button) => {
  popup = element;
  closeButton = button;
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closePopupEscKeyHandler);
  document.addEventListener('click', closePopupClickOnDocument);
  closeButton.addEventListener('click', closePopupClickHandler);
};

const closePopup = () => {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closePopupEscKeyHandler);
  document.removeEventListener('click', closePopupClickOnDocument);
};

export { openPopup, closePopup };
