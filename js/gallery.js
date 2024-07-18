import { renderMiniatures } from './miniature.js';
import { fillPopup } from './photo-popup.js';

const renderGallery = (photosData) => {
  renderMiniatures(photosData);

  document.addEventListener('miniatureSelect', (evt) => {
    fillPopup(evt.detail);
  });
};

export { renderGallery };
