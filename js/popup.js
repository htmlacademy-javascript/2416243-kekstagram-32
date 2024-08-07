import {isEscapeKey} from './util.js';

let popup;
let functionOnClosing;

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

export const openPopup = (element, elementFunction = null) => {
  popup = element;
  functionOnClosing = elementFunction;
  popup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closePopupEscKeyHandler);
  document.addEventListener('click', closePopupClickOnDocument);
};

export const closePopup = () => {
  if (functionOnClosing) {
    functionOnClosing();
  }
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closePopupEscKeyHandler);
  document.removeEventListener('click', closePopupClickOnDocument);
};
