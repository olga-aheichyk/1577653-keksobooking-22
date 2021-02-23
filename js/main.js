import {CARDS_COUNT, makeCards} from './make-cards.js';
import {createCardLayout} from './create-card-layout.js';
import './map.js';
import {map} from './map.js';

const mockObjects = makeCards(CARDS_COUNT);

const createPopupCard = (object) => {
  const popupElement = createCardLayout(object);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${object.location.x}, ${object.location.y}`;

  return popupElement;
}

for (let i = 0; i < mockObjects.length; i++) {
  const mockObject = mockObjects[i];

  const icon = L.icon({
    iconUrl: 'leaflet/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [13, 41],
  });

  const marker = L.marker({
    lat: mockObject.location.x,
    lng: mockObject.location.y,
  },
  {
    icon,
  },
  );

  marker
    .addTo(map)
    .bindPopup(createPopupCard(mockObject));
}




