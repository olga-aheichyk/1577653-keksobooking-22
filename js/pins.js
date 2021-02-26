/* global L:readonly */
import {CARDS_COUNT, makeCards} from './make-cards.js';
import {createCardLayout} from './create-card-layout.js';
import {map, TOKYO_CENTER, inputAddress} from './map.js';

const MAIN_PIN_PARAMETERS = {
  x: 50,
  y: 82,
};

const AD_PIN_PARAMETERS = {
  x: 25,
  y: 41,
};

const ADDRESS_DIGITS_AFTER_DECIMAL = 5;

// Ставим главный пин на карту

const mainIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon-2x.png',
  iconSize: [MAIN_PIN_PARAMETERS.x, MAIN_PIN_PARAMETERS.y],
  iconAnchor: [(MAIN_PIN_PARAMETERS.x) / 2, MAIN_PIN_PARAMETERS.y],
});

const mainPin = L.marker({
  lat: TOKYO_CENTER.x,
  lng: TOKYO_CENTER.y,
},
{
  draggable: true,
  icon: mainIcon,
},
);

mainPin.addTo(map);

// При перемещении главного пина меняется значение поля ввода адреса

mainPin.on('moveend', (evt) => {
  inputAddress.value = `${evt.target.getLatLng().lat.toFixed(ADDRESS_DIGITS_AFTER_DECIMAL)},
  ${evt.target.getLatLng().lng.toFixed(ADDRESS_DIGITS_AFTER_DECIMAL)}`;
});

// Ставим пины моков на карту и создаем для каждого попап

const mockObjects = makeCards(CARDS_COUNT);

const createPopupCard = (object) => {
  const popupElement = createCardLayout(object);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${object.location.x}, ${object.location.y}`;

  return popupElement;
}

mockObjects.forEach((item) => {
  const icon = L.icon({
    iconUrl: 'leaflet/images/marker-icon.png',
    iconSize: [AD_PIN_PARAMETERS.x, AD_PIN_PARAMETERS.y],
    iconAnchor: [(AD_PIN_PARAMETERS.x) / 2, AD_PIN_PARAMETERS.y],
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
