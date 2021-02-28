/* global L:readonly */
import {createCardLayout} from './create-card-layout.js';

const AdPinParameters = {
  X: 25,
  Y: 41,
};

const createPopupCard = (object) => {
  const popupElement = createCardLayout(object);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${object.location.x}, ${object.location.y}`;

  return popupElement;
}

const renderPins = function (map, array) {
  array.forEach((item) => {
    const icon = L.icon({
      iconUrl: 'leaflet/images/marker-icon.png',
      iconSize: [AdPinParameters.X, AdPinParameters.Y],
      iconAnchor: [(AdPinParameters.X) / 2, AdPinParameters.Y],
    });

    const adPin = L.marker({
      lat: item.location.x,
      lng: item.location.y,
    },
    {
      icon,
    },
    );

    adPin
      .addTo(map)
      .bindPopup(createPopupCard(item),
        {
          keepInView: true,
        },
      );
  })
}

export {renderPins};

