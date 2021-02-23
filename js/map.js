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

const TOKYO_CENTER = {
  x: 35.6894,
  y: 139.692,
};

const inputAddress = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    makeInteractiveElementsActive(adForm, 'ad-form--disabled');
    makeInteractiveElementsActive(mapFilter, 'map__filters--disabled');
    inputAddress.value = `Координаты: ${TOKYO_CENTER.x}, ${TOKYO_CENTER.y}`;
  })
  .setView({
    lat: TOKYO_CENTER.x,
    lng: TOKYO_CENTER.y,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: 'leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
});


const mainMarker = L.marker({
  lat: TOKYO_CENTER.x,
  lng: TOKYO_CENTER.y,
},
{
  draggable: true,
  icon: mainMarkerIcon,
},
);

mainMarker
  .addTo(map);

mainMarker.on('moveend', (evt) => {
  inputAddress.value = `Координаты: ${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

// marker.remove();

export {map};








