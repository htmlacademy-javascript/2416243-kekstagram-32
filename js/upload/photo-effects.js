import {UPLOAD_IMAGE_EFFECTS} from '../constants.js';
import {
  imageUploadEffectLevel,
  imageUploadEffectLevelSlider,
  imageUploadEffectLevelValue,
  imageUploadEffectList,
  imageUploadPreview
} from '../dom-elements.js';

let currentEffect = 'none';
imageUploadEffectLevel.classList.add('hidden');

noUiSlider.create(imageUploadEffectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 0,
  step: 1,
  connect: 'lower'
});

const updateSlider = ({min, max, start, step}) => {
  imageUploadEffectLevel.classList?.remove('hidden');
  imageUploadEffectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: start,
    step: step,
    connect: 'lower'
  });
};

export const resetEffects = () => {
  imageUploadEffectLevel.classList.add('hidden');
  imageUploadPreview.style = 'none';
  document.querySelector('#effect-none').checked = true;
};

const applyEffect = () => {
  const value = parseFloat(imageUploadEffectLevelSlider.noUiSlider.get());
  imageUploadEffectLevelValue.value = value;
  switch (currentEffect) {
    case 'chrome':
      imageUploadPreview.style.filter = `grayscale(${value})`;
      break;
    case 'sepia':
      imageUploadPreview.style.filter = `sepia(${value})`;
      break;
    case 'marvin':
      imageUploadPreview.style.filter = `invert(${value}%)`;
      break;
    case 'phobos':
      imageUploadPreview.style.filter = `blur(${value}px)`;
      break;
    case 'heat':
      imageUploadPreview.style.filter = `brightness(${value})`;
      break;
  }
};

imageUploadEffectLevelSlider.noUiSlider.on('update', applyEffect);

export const initializeEffectEditor = () => {
  imageUploadEffectList.addEventListener('click', (event) => {
    if (event.target.tagName === 'INPUT') {
      currentEffect = event.target.value;
      switch (event.target.value) {
        case 'none':
          resetEffects();
          break;
        case 'chrome':
          updateSlider(UPLOAD_IMAGE_EFFECTS.chrome);
          break;
        case 'sepia':
          updateSlider(UPLOAD_IMAGE_EFFECTS.sepia);
          break;
        case 'marvin':
          updateSlider(UPLOAD_IMAGE_EFFECTS.marvin);
          break;
        case 'phobos':
          updateSlider(UPLOAD_IMAGE_EFFECTS.phobos);
          break;
        case 'heat':
          updateSlider(UPLOAD_IMAGE_EFFECTS.heat);
          break;
      }
    }
  });
};
