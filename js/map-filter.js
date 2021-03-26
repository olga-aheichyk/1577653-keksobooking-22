/* global _:readonly */
import { renderPins, removePins } from './pins.js';

const HousingPriceToRange = {
  MIDDLE: {
    min: 10000,
    max: 50000,
  },
  LOW: {
    min: 0,
    max: 10000,
  },
  HIGH: {
    min: 50000,
    max: 1000000,
  },
  ANY: {
    min: 0,
    max: 1000000,
  },
};

const RERENDER_DELAY = 500;
const mapFiltersForm = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
let filterPins = [];


/**
 * Функция проверки объявления по выбранному пользователем критерию типа жилья
 * @param {object} object - объект объявления, полученный с сервера
 * @return {boolean}
 */
const isSuitableHousingTypeOption = (object) => {
  return housingType.value === 'any' ||  object.offer.type === housingType.value;
};

/**
 * Функция проверки объявления по выбранному пользователем критерию цены за ночь
 * @param {object} object - объект объявления, полученный с сервера
 * @return {boolean}
 */
const isSuitableHousingPriceOption = (object) => {
  const filterPriceMin = (HousingPriceToRange[housingPrice.value.toUpperCase()].min);
  const filterPriceMax = (HousingPriceToRange[housingPrice.value.toUpperCase()].max);

  return object.offer.price >= filterPriceMin && object.offer.price < filterPriceMax;
};

/**
 * Функция проверки объявления по выбранному пользователем критерию количества комнат
 * @param {object} object - объект объявления, полученный с сервера
 * @return {boolean}
 */
const isSuitableHousingRoomsOption = (object) => {
  return housingRooms.value === 'any' || object.offer.rooms === +housingRooms.value;
};

/**
 * Функция проверки объявления по выбранному пользователем критерию количества гостей
 * @param {object} object - объект объявления, полученный с сервера
 * @return {boolean}
 */
const isSuitableHousingGuestsOption = (object) => {
  return housingGuests.value === 'any' || object.offer.guests >= +housingGuests.value;
};

/**
 * Функция проверки объявления по выбранным пользователем критериям удобств
 * @param {array} checkedFeatures - массив удобств, выбранных пользователем
 * @param {object} object - объект объявления, полученный с сервера
 * @return {boolean}
 */
const areHousingFeaturesSuitable = (checkedFeatures, object) => {
  const adFeatures = object.offer.features;
  return checkedFeatures.every((checkedFeature) => {
    return adFeatures.includes(checkedFeature.value);
  });
};

/**
 * Функция перерисовки пинов объявлений на карте при изменении значений фильтра
 * @param {array} pins - массив объектов объявлений для создания пинов на карте
 * @param {object} map - интерактивная карта
 */
const rerenderPinsOnFilterChange = (pins, map) => {

  mapFiltersForm.addEventListener('change', _.debounce(() => {
    removePins();
    filterPins = [];
    const checkedHousingFeatures = Array.from(document.querySelectorAll('.map__checkbox:checked'));

    pins.forEach((pin) => {
      if (isSuitableHousingTypeOption(pin)
        && isSuitableHousingPriceOption(pin)
        && isSuitableHousingRoomsOption(pin)
        && isSuitableHousingGuestsOption(pin)
        && areHousingFeaturesSuitable(checkedHousingFeatures, pin)
      )
      {
        filterPins.push(pin);
      }
    })

    renderPins(filterPins, map);
  }, RERENDER_DELAY))
}

export { rerenderPinsOnFilterChange }
