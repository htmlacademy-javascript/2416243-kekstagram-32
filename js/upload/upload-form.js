import {
  effectsPreview,
  imageUploadForm,
  imageUploadFormSubmitButton,
  imageUploadInput,
  imageUploadPreview,
  uploadPopup,
  uploadPopupCloseButton
} from '../dom-elements.js';
import {closePopup, openPopup} from '../popup.js';
import {resetValidationUploadForm, validateUploadForm} from './form-validation.js';
import {initializeImageScale, resetImageScale} from './scale-photo.js';
import {initializeEffectEditor, resetEffects} from './photo-effects.js';
import {postRequest} from '../api.js';
import {showErrorUploadMessage, showSuccessUploadMessage} from '../response-message.js';
import {PHOTO_FILE_TYPE} from '../constants.js';

const resetUploadFormSetting = () => {
  resetImageScale();
  resetValidationUploadForm();
  resetEffects();
  imageUploadForm.reset();
  imageUploadInput.value = '';
};

const setSubmitButtonDisabled = (isDisabled) => {
  imageUploadFormSubmitButton.disabled = isDisabled;
  imageUploadFormSubmitButton.textContent = isDisabled ? 'Отправляю...' : 'Опубликовать';
};

export const initializeUploadForm = () => {
  imageUploadInput.setAttribute('accept', PHOTO_FILE_TYPE);
  imageUploadForm.addEventListener('change', ()=> {
    const file = imageUploadInput.files[0];
    imageUploadPreview.src = URL.createObjectURL(file);
    effectsPreview.forEach((preview) => {
      preview.style.backgroundImage = `url(${imageUploadPreview.src})`;
    });
    openPopup(uploadPopup, resetUploadFormSetting);
    initializeImageScale();
    initializeEffectEditor();
  });

  imageUploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateUploadForm()) {
      const data = new FormData(imageUploadForm);
      setSubmitButtonDisabled(true);
      postRequest(data)
        .then(() => {
          showSuccessUploadMessage();
          closePopup();
        })
        .catch(() => {
          showErrorUploadMessage();
        })
        .finally(() => {
          setSubmitButtonDisabled(false);
        });
    }
  });
};

uploadPopupCloseButton.addEventListener('click', closePopup);
