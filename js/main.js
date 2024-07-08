import { generatePhotosData } from './data.js';
import { renderMiniatures } from './miniature.js';

const photosData = generatePhotosData();

renderMiniatures(photosData);
