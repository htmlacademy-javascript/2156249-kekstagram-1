import { renderGallery } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import './scale.js';
import './effects.js';
import { showAlert, debounce } from './util.js';
import { getData, sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { init, getFilteredPictures } from './filters.js';

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const data = await getData();
  const debouncedRenderGallery = debounce(renderGallery);
  init(data, debouncedRenderGallery);
  renderGallery(getFilteredPictures());
} catch (err) {
  showAlert(err.message);
}


