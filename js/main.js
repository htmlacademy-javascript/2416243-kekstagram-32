import { generatePhotosData } from './data.js';
import { getMiniature } from './miniature.js';

const photosData = generatePhotosData();

/* eslint-disable */
console.log(photosData);
/* eslint-enable */
getMiniature(photosData);
