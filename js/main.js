import './form.js';
import './form-submit.js';
import { disableFilterAndFormBeforeInitialization, initializeMap, map } from './map.js';
import { activateFormDataPostOnSubmit } from './form-submit.js';
import { getData } from './get-and-send-data.js';

import { renderPins } from './pins.js';
import { rerenderPinsOnFilterChange } from './map-filter.js';
import { showGetErrorAlert } from './util.js';


disableFilterAndFormBeforeInitialization();
initializeMap();

// const initializePinsOnMap = getData(
//   (ads) => {
//     renderPins(ads, map);
//     setMapFiltersChange(ads, map);
//   },
//   showGetErrorAlert,
// );

// initializePinsOnMap();

getData(
  (ads) => {
    renderPins(ads, map);
    rerenderPinsOnFilterChange(ads, map);
  },
  showGetErrorAlert,
);


activateFormDataPostOnSubmit()
