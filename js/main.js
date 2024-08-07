import {renderGallery} from './gallery.js';
import {initializeUploadForm} from './upload/upload-form.js';
import {getRequest} from './api.js';
import {showServerErrorMessage} from './response-message.js';
import {initializeFilter} from './filter.js';

getRequest()
  .then((photosData) => {
    initializeFilter(photosData);
    renderGallery(photosData);
  })
  .catch((error) => showServerErrorMessage(error.message));
initializeUploadForm();
