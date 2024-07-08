const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');


const createMiniature = (miniature) => {
  const { url, comments, description, likes } = miniature;
  const miniatureElement = pictureTemplate.cloneNode(true);

  miniatureElement.querySelector('.picture__img').src = url;
  miniatureElement.querySelector('.picture__img').alt = description;
  miniatureElement.querySelector('.picture__likes').textContent = likes;
  miniatureElement.querySelector('.picture__comments').textContent = comments.length;

  return miniatureElement;
};

const renderMiniatures = (miniatures) => {
  pictureContainer.append(...miniatures.map((miniature) => createMiniature(miniature)));
};

export { renderMiniatures };
