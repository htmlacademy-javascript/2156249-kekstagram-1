import { setGalleryListener } from './gallery.js';
import { setOnFormSubmit, hideModal } from './form.js';
import './scale.js';
import './effects.js';
import { showAlert } from './util.js';
import { getData, sendData } from './api.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

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
  setGalleryListener(data);
} catch (err) {
  showAlert(err.message);
}


