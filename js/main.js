import './form.js';
import './form-submit.js';
import { renderPins } from './pins.js';
import { getData } from './get-and-send-data.js';
import { showAlert } from './util.js';
import { formSubmitHandler } from './form-submit.js';

getData(renderPins, showAlert);

formSubmitHandler();
