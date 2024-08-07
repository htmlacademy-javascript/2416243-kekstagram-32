import {
  errorGettingMessageElement,
  errorSendingMessageElement,
  pageBody,
  successSendingMessageElement
} from './dom-elements.js';
import {isEscapeKey} from './util.js';
import {ALERT_SHOW_TIME} from './constants.js';

let currentMessage;

const closeUploadMessage = (event) => {
  event.stopPropagation();
  const element = document.querySelector('.success') || document.querySelector('.error');
  const closeButton = element.querySelector('button');
  if (event.target === element || event.target === closeButton || isEscapeKey(event)) {
    element.remove();
    pageBody.removeEventListener('click', closeUploadMessage);
    pageBody.removeEventListener('keydown', closeUploadMessage);
  }
};

const renderResponseMessage = (template) => {
  currentMessage = template.cloneNode(true);
  pageBody.append(currentMessage);
  pageBody.addEventListener('click', closeUploadMessage);
  pageBody.addEventListener('keydown', closeUploadMessage);
};

export const showSuccessUploadMessage = () => {
  renderResponseMessage(successSendingMessageElement);
};

export const showErrorUploadMessage = () => {
  renderResponseMessage(errorSendingMessageElement);
};

export const showServerErrorMessage = (message) => {
  const errorTemplate = errorGettingMessageElement.cloneNode(true);

  if (message) {
    errorTemplate.querySelector('.data-error__title').textContent = message;
  }

  pageBody.append(errorTemplate);

  setTimeout(() => {
    errorTemplate.remove();
  }, ALERT_SHOW_TIME);
};
