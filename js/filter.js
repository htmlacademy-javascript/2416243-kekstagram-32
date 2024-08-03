import {debounce} from './util.js';
import {renderMiniatures} from './miniature.js';
import {imageFilters} from './dom-elements.js';

const maxRandomPictureCount = 10;
const sortFunction = {
  random: () => 0.5 - Math.random(),
  discussed: (pictureA, pictureB) => pictureA.comments.length - pictureB.comments.length
};

const debounceRenderPhoto = debounce(renderMiniatures);

const applyFilter = (event, picturesData) => {
  let newPhotos = picturesData.slice();
  switch (event.target.id.split('-')[1]) {
    case 'random':
      newPhotos = picturesData.toSorted(sortFunction.random).slice(0, maxRandomPictureCount);
      break;
    case 'discussed':
      newPhotos = picturesData.toSorted(sortFunction.discussed);
      break;
  }
  debounceRenderPhoto(newPhotos);
};

const setActiveClass = (clickedButton) => {
  if (clickedButton.classList.contains('img-filters__button--active')) {
    return;
  }
  const activeButton = imageFilters.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
  clickedButton.classList.add('img-filters__button--active');
};

export const initializeFilter = (picturesData) => {
  imageFilters.classList.remove('img-filters--inactive');

  imageFilters.addEventListener('click', (event) => {
    event.stopPropagation();
    const chosenFilter = event.target.closest('.img-filters__button');
    if (chosenFilter) {
      setActiveClass(chosenFilter);
      applyFilter(event, picturesData);
    }
  });
};
