import {createPhotos} from './data.js';
import {renderPhotos} from './render-photos.js';
import { setGalleryListener } from './gallery.js';

const userPhotos = createPhotos();

renderPhotos(userPhotos);

setGalleryListener(userPhotos);
