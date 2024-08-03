import {pictureContainer, pictureElement} from './dom-elements.js';

const createMiniatureClickHandler = (miniature) => (event) => {
  event.preventDefault();
  document.dispatchEvent(new CustomEvent('miniatureSelect', {detail: miniature}));
};

const createMiniature = (miniature) => {
  const { url, comments, description, likes } = miniature;
  const miniatureElement = pictureElement.cloneNode(true);

  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__img').alt = description;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;

  miniatureElement.addEventListener('click', createMiniatureClickHandler(miniature));

  return miniatureElement;
};

const renderMiniatures = (miniatures) => {
  pictureContainer.querySelectorAll('.picture').forEach((element) => element.remove());
  pictureContainer.append(...miniatures.map((miniature) => createMiniature(miniature)));
};

export { renderMiniatures };
