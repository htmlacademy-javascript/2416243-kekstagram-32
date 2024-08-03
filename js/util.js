import {DEBOUNCE_DELAY} from './constants.js';

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay = DEBOUNCE_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
