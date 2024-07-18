import { generatePhotosData } from './data.js';
import { renderGallery } from './gallery.js';

const photosData = generatePhotosData();

renderGallery(photosData);
