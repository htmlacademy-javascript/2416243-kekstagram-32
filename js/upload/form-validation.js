import {MAX_COMMENT_LENGTH, MAX_HASHTAG_ITEM, MAX_HASHTAG_LENGTH} from '../constants.js';
import {imageUploadForm, imageUploadFormDescription, imageUploadFormHashtag} from '../dom-elements.js';

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

pristine.addValidator(
  imageUploadFormHashtag, (value) =>
    value.trim() === '' ||
    value
      .split(/\s+/)
      .every((hashtag) => hashtag[0] === '#'), 'Все хэш-теги должены начинаться с символа #', 6, true
);

pristine.addValidator(
  imageUploadFormHashtag, (value) =>
    value.trim() === '' ||
    value
      .split(/\s+/)
      .every((hashtag) => /^#[a-zа-я0-9]+$/i
        .test(hashtag)), 'Хэш-тег может состоять только из букв и чисел', 4, true
);

pristine.addValidator(
  imageUploadFormHashtag, (value) =>
    value.trim() === '' ||
    value
      .split(/\s+/)
      .every((hashtag) => hashtag !== '#'), 'Хеш-тег не может состоять только из символа #', 5, true
);

pristine.addValidator(
  imageUploadFormHashtag, (value) =>
    value.trim() === '' ||
    value
      .split(/\s+/)
      .every((hashtag) => hashtag
        .length <= MAX_HASHTAG_LENGTH), `Длина хэш-тега не может превышать ${MAX_HASHTAG_LENGTH} символов`, 2, true
);

pristine.addValidator(
  imageUploadFormHashtag, (value) =>
    value.trim() === '' ||
    value
      .split(/\s+/).length <= MAX_HASHTAG_ITEM, `Количество хэш-тегов не может быть больше ${MAX_HASHTAG_ITEM}`, 3, true
);

pristine.addValidator(imageUploadFormHashtag, (value) => {
  const lowerCaseHashtags = value.split(/\s+/).map((hashtag) => hashtag.toLowerCase());
  return new Set(lowerCaseHashtags).size === lowerCaseHashtags.length;
}, 'Все хэш-теги должны быть уникальными', 1, true);

pristine.addValidator(
  imageUploadFormDescription, (value) => value
    .length <= MAX_COMMENT_LENGTH, `Длина комментария не может составлять больше ${MAX_COMMENT_LENGTH} символов`, 1, true
);

const validateUploadForm = () => {
  pristine.validate();
};

export { validateUploadForm };
