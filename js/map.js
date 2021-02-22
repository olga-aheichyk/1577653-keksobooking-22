const makeInteractiveElementsInactive = function (object, className) {
  object.classList.add(className);

  object.querySelectorAll('input').forEach(item => {item.setAttribute('disabled', 'disabled')});
  object.querySelectorAll('select').forEach(item => {item.setAttribute('disabled', 'disabled')});
  object.querySelectorAll('textarea').forEach(item => {item.setAttribute('disabled', 'disabled')});

  return object;
}

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');

makeInteractiveElementsInactive(adForm, 'ad-form--disabled');
makeInteractiveElementsInactive(mapFilter, 'map__filters--disabled');

const makeInteractiveElementsActive = function (object, className) {
  object.classList.remove(className);

  object.querySelectorAll('input').forEach(item => {item.removeAttribute ('disabled')});
  object.querySelectorAll('select').forEach(item => {item.removeAttribute('disabled')});
  object.querySelectorAll('textarea').forEach(item => {item.removeAttribute('disabled')});

  return object;
}

const map = L.map('map-canvas')
  .on('load', () => {
    makeInteractiveElementsActive(adForm, 'ad-form--disabled');
    makeInteractiveElementsActive(mapFilter, 'map__filters--disabled');
  })
  .setView({
    lat: 35.6894,
    lng: 139.692,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },)
  .addTo(map);

const markerIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [13, 41],
});


const marker = L.marker(
  {
    lat: 35.78769,
    lng: 139.73997,
  },
  {
    draggable: true,
    icon: markerIcon,
  },
);

marker.on('moveend', (evt) => {
  const point = {xAddressValue: evt.target.getLatLng().lat,
  yAddressValue: evt.target.getLatLng().lng};
  return point;
});

const createPopupCard = (point) => {
  const popupElement = createCardLayout(mockObjects[0]);
  popupElement.querySelector('.popup__text--address').textContent = `Координаты: ${point.x}, ${point.y}`;

  return popupElement;
}

marker
.addTo(map)
.bindPopup(
  createPopupCard(point),
{
  keepInView: true,
},
);


// marker.remove();








