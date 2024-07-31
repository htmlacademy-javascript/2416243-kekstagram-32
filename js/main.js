import {renderGallery} from './gallery.js';
import {initializeUploadForm} from './upload/upload-form.js';
import {getRequest} from './api.js';
import {showErrorUploadMessage} from './response-message.js';

getRequest()
  .then((photosData) => {
    renderGallery(photosData);
  })
  .catch(() => showErrorUploadMessage());
initializeUploadForm();
