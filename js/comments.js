import {
  commentElement,
  commentsContainer,
  commentsLoaderButton,
  commentsShownCounter,
  commentsTotalCounter
} from './dom-elements.js';
import {COMMENT_LOAD_STEP} from './constants.js';

let currentCommentsData;
let totalComments;

const createComment = (commentProperties) => commentProperties.map((properties) => {
  const { avatar, name, message } = properties;
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
});

const onCommentsLoaderButtonClick = () => {
  commentsContainer.append(...createComment(currentCommentsData.splice(0, COMMENT_LOAD_STEP)));
  commentsShownCounter.textContent = totalComments - currentCommentsData.length;
  commentsLoaderButton.classList.toggle('hidden', !currentCommentsData.length);
};

export const renderComments = (commentsData) => {
  currentCommentsData = [...commentsData];
  totalComments = commentsData.length;
  commentsTotalCounter.textContent = totalComments;
  commentsContainer.replaceChildren();
  commentsLoaderButton.click();
};

commentsLoaderButton.addEventListener('click', onCommentsLoaderButtonClick);
