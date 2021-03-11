/* global L:readonly */
import {createCardLayout} from './create-card-layout.js';

const AdPinParameters = {
  X: 51,
  Y: 51,
};

/**
  * Функция создания всплывающей карточки объявления
  * @param {object} object — объект, содержащий информацию об объявлении
  * @param {object} popupElement — DOM-элемент всплывающей карточки объявления
  */
const createPopupCard = (object) => {
  const popupElement = createCardLayout(object);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${object.location.lat}, ${object.location.lng}`;

  return popupElement;
}

/**
  * Функция создания на карте пинов объявлениЙ, при клике на которые открывается всплывающая карточка отдельного объявления
  * @param {object} map — объект, содержащий информацию об объявлении
  * @param {array} pins — массив объектов объявлений для создания пинов на карте
  */
const renderPins = function (map, pins) {
  pins.forEach((pin) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [AdPinParameters.X, AdPinParameters.Y],
      iconAnchor: [(AdPinParameters.X) / 2, AdPinParameters.Y],
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
      .bindPopup(createPopupCard(pin),
        {
          keepInView: true,
        },
      );
  })
}

export {renderPins};

