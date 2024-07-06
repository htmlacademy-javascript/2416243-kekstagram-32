const getMiniature = (miniatures) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const pictureContainer = document.querySelector('.pictures');
  const miniatureFragment = document.createDocumentFragment();

  miniatures.forEach(({ url, comments, description, likes }) => {
    const miniatureElement = pictureTemplate.cloneNode(true);

    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__img').alt = description;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments.length;

    miniatureFragment.appendChild(miniatureElement);
  });
  pictureContainer.appendChild(miniatureFragment);
};

export { getMiniature };
