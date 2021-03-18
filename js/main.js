import './form.js';
import './form-submit.js';
import { renderPins } from './pins.js';
import { getData } from './get-and-send-data.js';
import { showAlert } from './util.js';
import { activateFormSubmitHandler } from './form-submit.js';
import './map-filter.js'

getData(renderPins, showAlert);

activateFormSubmitHandler();
