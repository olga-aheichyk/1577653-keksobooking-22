/* global L:readonly */
import {createCardLayout} from './create-card-layout.js';
import {PinParameter} from './map.js'

/**
  * Функция создания на карте пинов объявлениЙ, при клике на которые открывается всплывающая карточка отдельного объявления
  * @param {object} map — объект, содержащий информацию об объявлении
  * @param {array} pins — массив объектов объявлений для создания пинов на карте
  */
const renderPins = function (pins, map) {
  pins.forEach((pin) => {
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
  })
}

export { renderPins };

