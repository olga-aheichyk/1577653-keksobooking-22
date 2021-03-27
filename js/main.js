import './form-setting.js';

import {
  disableFilterAndFormBeforeInitialization,
  initializeMap
} from './map.js';

import { initializePinsOnMap } from './get-and-send-data.js';
import { activateFormDataPostOnSubmit } from './form-submit.js';


disableFilterAndFormBeforeInitialization();
initializeMap();

initializePinsOnMap();

activateFormDataPostOnSubmit();
