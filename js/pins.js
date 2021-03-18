/* global L:readonly */
import {createCardLayout} from './create-card-layout.js';
import {PinParameter} from './map.js';
import {setHousingTypeChange} from './map-filter.js';

const PINS_ON_MAP_COUNT = 10;

/**
  * Функция создания на карте пинов объявлениЙ, при клике на которые открывается всплывающая карточка отдельного объявления
  * @param {object} map — объект, содержащий информацию об объявлении
  * @param {array} pins — массив объектов объявлений для создания пинов на карте
  */


const renderPins = function (pins, map) {
  pins.slice(0, PINS_ON_MAP_COUNT)
    .forEach((pin) => {
      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [PinParameter.X, PinParameter.Y],
        iconAnchor: [(PinParameter.X) / 2, PinParameter.Y],
      });

      const adPin = L.marker({
        lat: pin.location.lat,
        lng: pin.location.lng,
      },
      {
        icon,
      },
      );

      adPin
        .addTo(map)
        .bindPopup(createCardLayout(pin),
          {
            keepInView: true,
          },
        );

      setHousingTypeChange(pins, map, adPin);
    })



}

export { renderPins };

