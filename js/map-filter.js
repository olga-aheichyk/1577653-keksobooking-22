/*
1. поменять getData,
const ADS_ON_MAP_COUNT = 10,
работаем с response.json() - sort, slice, filter

2. Фильтр тип жилья
<select name="housing-type" id="housing-type" class="map__filter">
  <option value="any" selected>Любой тип жилья</option>
  <option value="palace">Дворец</option>
  <option value="flat">Квартира</option>
  <option value="house">Дом</option>
  <option value="bungalow">Бунгало</option>
</select>

const housingType = document.querySelector('#housing-type');
const selectedHousingTypeOption = document.querySelector('#housing-type option[selected]');

housingType.addEventListener('change', function (evt) {
  ads.filter((ad) => {
    if (selectedHousingTypeOption.value !== 'any') {
      ad.offer.type === selectedHousingTypeOption.value;
    }
    console.log()
  })

  закрыть открытый балун с объявлением???
})


const getAdRank = function (ad) {
  const selectedHousingTypeOption = document.querySelector('#housing-type option[selected]');;

  let rank = 0;

  if (selectedHousingTypeOption.value !== 'any') {
    if (ad.offer.type === selectedHousingTypeOption.value) {
    rank += 1;
    }
  }
  return rank;
}

const sortAds = (adA, adB) => {
  const rankA = getAdRank(adA);
  const rankB = getAdRank(adB);

  return adB - adA;
}

ads.slice()
.sort(sortAds)
.slice(0, ADS_ON_MAP_COUNT)
.forEach(({author, offer, location}) => {})


Перед перерисовкой новых пинов нужно удалить старые:
adPin.remove()
.addTo(map)

const setHousingTypeChange = (cb) => {

  document.querySelector('#housing-type').addEventListener('change', (evt) => {

    evt.target.value ???;

    cb();
  });
};

*/

import {renderPins} from './pins.js'


const housingType = document.querySelector('#housing-type');
let filterPins = [];

const setHousingTypeChange = function (pins, map, adPin) {
  housingType.addEventListener('change', function (evt) {
    if (evt.target.value !== 'any') {
      adPin.remove();
      filterPins = [];
      for (let i=0; i < pins.length; i++) {
        if (pins[i].offer.type === evt.target.value) {
          filterPins.push(pins[i]);
        }
      }
      renderPins(filterPins, map);
    }
    else {
      renderPins(pins, map);
    }
  })
}

export {setHousingTypeChange}
