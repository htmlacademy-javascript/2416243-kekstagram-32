import {renderMiniatures} from './miniature.js';
import {fillPopup} from './fullscreen-photo.js';

const renderGallery = (photosData) => {
  renderMiniatures(photosData);

  document.addEventListener('miniatureSelect', (event) => {
    fillPopup(event.detail);
  });
};

export { renderGallery };
