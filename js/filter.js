import {debounce} from './util.js';
import {renderMiniatures} from './miniature.js';
import {imageFilters} from './dom-elements.js';

const maxRandomPictureCount = 10;
const photoFilter = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed'
};
const sortFunction = {
  random: () => 0.5 - Math.random(),
  discussed: (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length
};

const debounceRenderPhoto = debounce(renderMiniatures);

const applyFilter = (filter, picturesData) => {
  switch (filter) {
    case photoFilter.random:
      return debounceRenderPhoto(picturesData.toSorted(sortFunction.random).slice(0, maxRandomPictureCount));
    case photoFilter.discussed:
      return debounceRenderPhoto(picturesData.toSorted(sortFunction.discussed));
    case photoFilter.default:
      return debounceRenderPhoto(picturesData);
  }
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
      applyFilter(chosenFilter.id, picturesData);
    }
  });
};
