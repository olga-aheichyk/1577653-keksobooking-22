import './form.js';
import './form-submit.js';
// import { renderPins } from './pins.js';
// import { map } from './map.js';
import { getData } from './get-and-send-data.js';
import { showAlert } from './util.js';
import { activateFormSubmitHandler } from './form-submit.js';
// import './map-filter.js'

// getData(renderPins, showAlert);

getData(
  (ads) => {
    console.log(ads);
  },
  showAlert,
);

// renderPins(serverData, map);


activateFormSubmitHandler();
