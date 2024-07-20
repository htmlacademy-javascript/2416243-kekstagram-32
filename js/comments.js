const commentsContainer = document.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsShownCounter = document.querySelector('.social__comment-shown-count');
const commentsTotalCounter = document.querySelector('.social__comment-total-count');
const commentsLoaderButton = document.querySelector('.social__comments-loader');

const fillComments = (commentProperties) => {
  const { avatar, name, message } = commentProperties;
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};


const renderComments = (commentsData, limitCommentShown) => {
  const commentsTotal = commentsData.length;
  const isAllCommentsShown = limitCommentShown >= commentsTotal;
  limitCommentShown = isAllCommentsShown ? commentsTotal : limitCommentShown;
  commentsContainer.innerHTML = '';
  commentsContainer.append(...commentsData.slice(0, limitCommentShown).map((commentProperties) => fillComments(commentProperties)));
  commentsShownCounter.textContent = limitCommentShown;
  commentsTotalCounter.textContent = commentsTotal;
  commentsLoaderButton.classList.toggle('hidden', isAllCommentsShown);
};

export { renderComments };
