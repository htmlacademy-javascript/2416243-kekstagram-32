import {
  commentElement,
  commentsContainer,
  commentsLoaderButton,
  commentsShownCounter,
  commentsTotalCounter
} from './dom-elements.js';
import {COMMENT_LOAD_STEP} from './constants.js';

let limitCommentShown;
let commentsLoader;

const fillComments = (commentProperties) => {
  const { avatar, name, message } = commentProperties;
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (commentsData) => {
  const commentsTotal = commentsData.length;
  const isAllCommentsShown = limitCommentShown >= commentsTotal;

  commentsContainer.innerHTML = '';
  commentsLoaderButton.classList.toggle('hidden', isAllCommentsShown);
  commentsTotalCounter.textContent = commentsTotal;
  limitCommentShown = isAllCommentsShown ? commentsTotal : limitCommentShown;
  commentsShownCounter.textContent = limitCommentShown;

  const commentsDataLimited = commentsData.slice(0, limitCommentShown);
  const commentCards = commentsDataLimited.map((commentProperties) => fillComments(commentProperties));
  commentsContainer.append(...commentCards);
};

const changeMaxCommentClickHandler = (comments) => {
  limitCommentShown += COMMENT_LOAD_STEP;
  renderComments(comments);
};

const initializeCommentBlock = (comments) => {
  limitCommentShown = COMMENT_LOAD_STEP;
  commentsLoader = () => changeMaxCommentClickHandler(comments);
  commentsLoaderButton.addEventListener('click', commentsLoader);
};

export { renderComments,initializeCommentBlock };
