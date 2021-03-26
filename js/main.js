import './form.js';
import './form-submit.js';
import { disableFilterAndFormBeforeInitialization, initializeMap } from './map.js';
import { activateFormDataPostOnSubmit } from './form-submit.js';
import { initializePinsOnMap } from './get-and-send-data.js';



disableFilterAndFormBeforeInitialization();
initializeMap();

initializePinsOnMap();

activateFormDataPostOnSubmit();
