/* global L:readonly */
import {makeInteractiveElementsInactive,
  makeInteractiveElementsActive} from './util.js';

const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const TOKYO_CENTER = {
  x: 35.6894,
  y: 139.692,
};
const MAP_ZOOM = 12;
const inputAddress = adForm.querySelector('#address');


makeInteractiveElementsInactive(adForm, 'ad-form--disabled');
makeInteractiveElementsInactive(mapFilter, 'map__filters--disabled');

const map = L.map('map-canvas')
  .on('load', () => {
    makeInteractiveElementsActive(adForm, 'ad-form--disabled');
    makeInteractiveElementsActive(mapFilter, 'map__filters--disabled');
    inputAddress.value = `${TOKYO_CENTER.x}, ${TOKYO_CENTER.y}`;
  })
  .setView({
    lat: TOKYO_CENTER.x,
    lng: TOKYO_CENTER.y,
  }, MAP_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  })
  .addTo(map);

// marker.remove();

export {map, TOKYO_CENTER, inputAddress};








