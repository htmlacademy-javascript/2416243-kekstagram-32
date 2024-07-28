import {generatePhotosData} from './data.js';
import {renderGallery} from './gallery.js';
import {initializeUploadForm} from './upload/upload-form.js';

const photosData = generatePhotosData();

renderGallery(photosData);
initializeUploadForm();
