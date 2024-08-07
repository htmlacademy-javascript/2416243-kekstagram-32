import {renderGallery} from './gallery.js';
import {initializeUploadForm} from './upload/upload-form.js';
import {getRequest} from './api.js';
import {showServerErrorMessage} from './response-message.js';
import {initializeFilter} from './filter.js';

getRequest()
  .then((photosData) => {
    renderGallery(photosData);
    initializeFilter(photosData);
  })
  .catch((error) => showServerErrorMessage(error.message));
initializeUploadForm();
