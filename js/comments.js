const commentsContainer = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

commentsCounter.classList.add('hidden');
commentsLoader.classList.add('hidden');

const fillComments = (commentProperties) => {
  const { avatar, name, message } = commentProperties;
  const comment = commentTemplate.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (commentsData) => {
  commentsContainer.replaceChildren(...commentsData.map((commentProperties) => fillComments(commentProperties)));
};

export { renderComments };
