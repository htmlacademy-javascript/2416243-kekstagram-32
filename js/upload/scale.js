import {
  imageUploadPreview,
  imageUploadScaleControlValue,
  imageUploadScaleDownButton,
  imageUploadScaleUpButton
} from '../dom-elements.js';
import {UPLOAD_IMAGE_SCALE_CONFIG} from '../constants.js';

const updateScale = (value) => {
  imageUploadScaleControlValue.value = `${value}%`;
  imageUploadPreview.style.transform = `scale(${value / 100})`;
};

const onScaleDownButtonClick = () => {
  let scaleControlValue = parseInt(imageUploadScaleControlValue.value, 10);
  if (scaleControlValue > UPLOAD_IMAGE_SCALE_CONFIG.min) {
    scaleControlValue -= UPLOAD_IMAGE_SCALE_CONFIG.step;
    updateScale(scaleControlValue);
  }
};

const onScaleUpButtonClick = () => {
  let scaleControlValue = parseInt(imageUploadScaleControlValue.value, 10);
  if (scaleControlValue < UPLOAD_IMAGE_SCALE_CONFIG.max) {
    scaleControlValue += UPLOAD_IMAGE_SCALE_CONFIG.step;
    updateScale(scaleControlValue);
  }
};

export const initializeImageScale = () => {
  imageUploadScaleUpButton.addEventListener('click', () => onScaleUpButtonClick());
  imageUploadScaleDownButton.addEventListener('click', () => onScaleDownButtonClick());
};

// export const resetImageScale = () => {
//   imageUploadScaleControlValue.value = `${UPLOAD_IMAGE_SCALE_CONFIG.defaultValue}%`;
//   imageUploadPreview.style.transform = null;
// };
