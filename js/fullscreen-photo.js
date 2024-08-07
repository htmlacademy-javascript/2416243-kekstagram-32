import {bigPicturePopup, fullscreenPhotoClosePopupButton} from './dom-elements.js';
import {renderComments} from './comments.js';
import {closePopup, openPopup} from './popup.js';

export const fullscreenPhotoPopup = (photoData) => {
  const { url, comments, description, likes } = photoData;

  bigPicturePopup.querySelector('.big-picture__img img').src = url;
  bigPicturePopup.querySelector('.big-picture__img img').alt = description;
  bigPicturePopup.querySelector('.likes-count').textContent = likes;
  bigPicturePopup.querySelector('.social__caption').textContent = description;

  renderComments(comments);
  openPopup(bigPicturePopup);
};

fullscreenPhotoClosePopupButton.addEventListener('click', closePopup);
