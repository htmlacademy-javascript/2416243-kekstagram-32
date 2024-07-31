import {imageUploadForm, imageUploadFormSubmitButton, uploadPopup, uploadPopupCloseButton} from '../dom-elements.js';
import {closePopupClickHandler, openPopup} from '../popup.js';
import {resetUploadForm, validateUploadForm} from './form-validation.js';
import {initializeImageScale, resetImageScale} from './scale.js';
import {initializeEffectEditor, resetEffects} from './photo-effects.js';
import {postRequest} from '../api.js';
import {showErrorUploadMessage, showSuccessUploadMessage} from '../response-message.js';

const resetUploadFormSetting = () => {
  resetImageScale();
  resetUploadForm();
  imageUploadForm.reset();
  resetEffects();
};

const blockSubmitButton = () => {
  imageUploadFormSubmitButton.disabled = true;
  imageUploadFormSubmitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  imageUploadFormSubmitButton.disabled = false;
  imageUploadFormSubmitButton.textContent = 'Опубликовать';
};

const initializeUploadForm = () => {
  imageUploadForm.addEventListener('change', ()=> {
    openPopup(uploadPopup, uploadPopupCloseButton);
    initializeImageScale();
    initializeEffectEditor();
  });

  imageUploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateUploadForm()) {
      const data = new FormData(imageUploadForm);
      blockSubmitButton();
      postRequest(data).then(() => {
        unblockSubmitButton();
        showSuccessUploadMessage();
      }).catch(() => {
        unblockSubmitButton();
        showErrorUploadMessage();
      });
    }
  });
};

const closeImageUploadEditingForm = () => {
  closePopupClickHandler();
  resetUploadFormSetting();
};

uploadPopupCloseButton.addEventListener('click', closeImageUploadEditingForm);

export { initializeUploadForm };
