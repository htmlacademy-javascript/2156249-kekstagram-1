import {createPhotos} from './data.js';
import {renderPhotos} from './render-photos.js';
import {bigPictureHandler} from './big-picture.js';

const userPhotos = createPhotos();

renderPhotos(userPhotos);

bigPictureHandler(userPhotos);
