/* global L:readonly */
import {makeInteractiveElementsInactive,
  makeInteractiveElementsActive,
  TokyoCenter} from './util.js';


const MAP_ZOOM = 9;
const ADDRESS_DIGITS_AFTER_DECIMAL = 5;
const PinParameter = {
  X: 51,
  Y: 51,
};

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
makeInteractiveElementsInactive(adForm, 'ad-form--disabled');
makeInteractiveElementsInactive(mapFilter, 'map__filters--disabled');

const inputAddress = adForm.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    makeInteractiveElementsActive(adForm, 'ad-form--disabled');
    makeInteractiveElementsActive(mapFilter, 'map__filters--disabled');
    inputAddress.value = `${TokyoCenter.X}, ${TokyoCenter.Y}`;
  })
  .setView({
    lat: TokyoCenter.X,
    lng: TokyoCenter.Y,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

// Ставим главный пин на карту

const mainIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [PinParameter.X, PinParameter.Y],
  iconAnchor: [(PinParameter.X) / 2, PinParameter.Y],
});

const mainPin = L.marker({
  lat: TokyoCenter.X,
  lng: TokyoCenter.Y,
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


export { map,
  TokyoCenter,
  PinParameter };








