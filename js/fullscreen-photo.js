import {initializeCommentBlock, renderComments} from './comments.js';
import {bigPicturePopup, buttonClosePopup} from './dom-elements.js';
import {openPopup} from './popup.js';

const fillPopup = (photoData) => {
  const { url, comments, description, likes } = photoData;

  bigPicturePopup.querySelector('.big-picture__img img').src = url;
  bigPicturePopup.querySelector('.big-picture__img img').alt = description;
  bigPicturePopup.querySelector('.likes-count').textContent = likes;
  bigPicturePopup.querySelector('.social__caption').textContent = description;

  initializeCommentBlock(comments);
  renderComments(comments);
  openPopup(bigPicturePopup, buttonClosePopup);
};

export { fillPopup };
