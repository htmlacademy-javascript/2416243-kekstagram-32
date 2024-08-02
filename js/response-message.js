import {body, errorMessageElement, successMessageElement} from './dom-elements.js';
import {isEscapeKey} from './util.js';

let currentMessage;

const closeUploadMessage = (event) => {
  event.stopPropagation();
  const element = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = element.querySelector('button');
  if (event.target === element || event.target === closeButton || isEscapeKey(event)) {
    element.remove();
    body.removeEventListener('click', closeUploadMessage);
    body.removeEventListener('keydown', closeUploadMessage);
  }
};

const renderUploadMessage = (template) => {
  currentMessage = template.cloneNode(true);
  body.append(currentMessage);
  body.addEventListener('click', closeUploadMessage);
  body.addEventListener('keydown', closeUploadMessage);
};

export const showSuccessUploadMessage = () => {
  renderUploadMessage(successMessageElement);
};

export const showErrorUploadMessage = () => {
  renderUploadMessage(errorMessageElement);
};
