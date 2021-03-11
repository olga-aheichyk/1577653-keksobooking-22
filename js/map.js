/* global L:readonly */
import {makeInteractiveElementsInactive,
  makeInteractiveElementsActive} from './util.js';

const TokyoCenter = {
  X: 35.6894,
  Y: 139.692,
};
const MAP_ZOOM = 10;
const ADDRESS_DIGITS_AFTER_DECIMAL = 5;
const MainPinParameters = {
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
  iconSize: [MainPinParameters.X, MainPinParameters.Y],
  iconAnchor: [(MainPinParameters.X) / 2, MainPinParameters.Y],
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


export {map};








