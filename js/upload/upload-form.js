import {
  imageUploadForm,
  imageUploadFormSubmitButton,
  imageUploadInput,
  imageUploadPreview,
  uploadPopup,
  uploadPopupCloseButton
} from '../dom-elements.js';
import {closePopupClickHandler, openPopup} from '../popup.js';
import {resetUploadForm, validateUploadForm} from './form-validation.js';
import {initializeImageScale, resetImageScale} from './scale.js';
import {initializeEffectEditor, resetEffects} from './photo-effects.js';
import {postRequest} from '../api.js';
import {showErrorUploadMessage, showSuccessUploadMessage} from '../response-message.js';
import {PHOTO_FILE_TYPE} from '../constants.js';

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
  imageUploadInput.setAttribute('accept', PHOTO_FILE_TYPE);
  imageUploadForm.addEventListener('change', ()=> {
    const file = imageUploadInput.files[0];
    imageUploadPreview.src = URL.createObjectURL(file);
    imageUploadPreview.style.width = '100%';
    openPopup(uploadPopup);
    initializeImageScale();
    initializeEffectEditor();
  });

  imageUploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateUploadForm()) {
      const data = new FormData(imageUploadForm);
      blockSubmitButton();
      postRequest(data)
        .then(() => {
          showSuccessUploadMessage();
        })
        .catch(() => {
          showErrorUploadMessage();
        })
        .finally(unblockSubmitButton);
    }
  });
};

const closeImageUploadEditingForm = () => {
  closePopupClickHandler();
  resetUploadFormSetting();
};

uploadPopupCloseButton.addEventListener('click', closeImageUploadEditingForm);

export { initializeUploadForm };
