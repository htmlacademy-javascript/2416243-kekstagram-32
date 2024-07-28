import {imageUploadForm, uploadPopup, uploadPopupCloseButton} from '../dom-elements.js';
import {openPopup} from '../popup.js';
import {validateUploadForm} from './form-validation.js';
import {initializeImageScale} from './scale.js';
import {initializeEffectEditor} from './photo-effects.js';

const initializeUploadForm = () => {
  imageUploadForm.addEventListener('change', ()=> {
    openPopup(uploadPopup, uploadPopupCloseButton);
    initializeImageScale();
    initializeEffectEditor();
  });

  imageUploadForm.addEventListener('submit', (event) => {
    if (!validateUploadForm()) {
      event.preventDefault();
    }
  });
};

export { initializeUploadForm };
