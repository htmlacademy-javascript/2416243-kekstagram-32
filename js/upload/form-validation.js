import {MAX_COMMENT_LENGTH, MAX_HASHTAG_ITEM, MAX_HASHTAG_LENGTH} from '../constants.js';
import {imageUploadForm, imageUploadFormDescription, imageUploadFormHashtag} from '../dom-elements.js';

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const errorMessage = {
  HASHTAG_COUNT: `Количество хэш-тегов не может быть больше ${MAX_HASHTAG_ITEM}`,
  DUPLICATE_HASHTAGS: 'Все хэш-теги должны быть уникальными',
  HASHTAG_LENGTH: `Длина хэш-тега не может превышать ${MAX_HASHTAG_LENGTH} символов`,
  HASHTAG_MAKEUP: 'Хэш-тег может состоять только из букв и чисел',
  HASHTAG_START_SYMBOL: 'Все хэш-теги должены начинаться с символа #',
  HASHTAG_START_NOT_ONLY_SYMBOL: 'Хеш-тег не может состоять только из символа #',
  COMMENT_LENGTH: `Длина хэш-тега не может превышать ${MAX_HASHTAG_LENGTH} символов`
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const validateHashtagCount = (value) => normalizeTags(value).length <= MAX_HASHTAG_ITEM;

const validateHashtagDuplicate = (value) => {
  const lowerCaseHashtags = normalizeTags(value).map((hashtag) => hashtag.toLowerCase());
  return new Set(lowerCaseHashtags).size === lowerCaseHashtags.length;
};

const validateHashtagLength = (value) =>
  normalizeTags(value).every((hashtag) => hashtag.length <= MAX_HASHTAG_LENGTH);

const validateHashtagMakeup = (value) =>
  normalizeTags(value).every((hashtag) => /^#[a-zа-яё0-9]+$/i.test(hashtag));

const validateHashtagStartSymbol = (value) =>
  normalizeTags(value).every((hashtag) => hashtag[0] === '#');

const validateHashtagStartNotOnlySymbol = (value) =>
  normalizeTags(value).every((hashtag) => hashtag !== '#');

const validateCommentLength = (value) => value.length <= MAX_COMMENT_LENGTH;

pristine.addValidator(imageUploadFormHashtag, validateHashtagStartSymbol, errorMessage.HASHTAG_START_SYMBOL, 6, true);
pristine.addValidator(imageUploadFormHashtag, validateHashtagStartNotOnlySymbol, errorMessage.HASHTAG_START_NOT_ONLY_SYMBOL, 5, true);
pristine.addValidator(imageUploadFormHashtag, validateHashtagMakeup, errorMessage.HASHTAG_MAKEUP, 4, true);
pristine.addValidator(imageUploadFormHashtag, validateHashtagLength, errorMessage.HASHTAG_LENGTH, 2, true);
pristine.addValidator(imageUploadFormHashtag, validateHashtagCount, errorMessage.HASHTAG_COUNT, 3, true);
pristine.addValidator(imageUploadFormHashtag, validateHashtagDuplicate, errorMessage.DUPLICATE_HASHTAGS, 1, true);
pristine.addValidator(imageUploadFormDescription, validateCommentLength, errorMessage.COMMENT_LENGTH, 1, true);

const validateUploadForm = () => pristine.validate();

const resetValidationUploadForm = () => pristine.reset();

export { validateUploadForm, resetValidationUploadForm };
