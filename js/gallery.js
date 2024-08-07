import {renderMiniatures} from './miniature.js';
import {fullscreenPhotoPopup} from './fullscreen-photo.js';

const renderGallery = (photosData) => {
  renderMiniatures(photosData);

  document.addEventListener('miniatureSelect', (event) => {
    fullscreenPhotoPopup(event.detail);
  });
};

export { renderGallery };
