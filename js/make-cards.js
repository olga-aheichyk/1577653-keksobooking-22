import {getRandomInteger, getRandomFloatingPointNumber,
  getRandomElementFromArray, makeRandomArray} from './util.js';

const TYPE = [{'palace': 'Дворец'}, {'flat': 'Квартира'}, {'house': 'Дом'}, {'bungalow': 'Бунгало'}];
const CHECKIN_OUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

const CARDS_COUNT = 10;

/**
 * Функция генерации объекта тестовой карточки объявления
 * @return {object} — объект карточки объявления
 */
const createCard = function () {
  const xRandomValue = getRandomFloatingPointNumber(35.65000, 35.70000, 5);
  const yRandomValue = getRandomFloatingPointNumber(139.70000, 139.80000, 5);
  return {
    avatar: `img/avatars/user0${getRandomInteger(1, 8)}.png`,
    offer: {
      title: 'Суперпредложение',
      address: `${xRandomValue}, ${yRandomValue}`,
      price: getRandomInteger(1, 1000),
      type: getRandomElementFromArray(TYPE),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 20),
      checkin: getRandomElementFromArray(CHECKIN_OUT),
      checkout: getRandomElementFromArray(CHECKIN_OUT),
      features: makeRandomArray(FEATURES),
      description: 'Уютное жильё',
      photos: makeRandomArray(PHOTOS),
    },
    location: {
      x: xRandomValue,
      y: yRandomValue,
    },
  }
}

/**
 * Функция генерации моков (тестовые данные, для того, что бы написать основную логику приложения)
 * @param {number} CARDS_COUNT — количество объектов карточек в массиве
 * @return {array} — тестовый массив объектов карточек объявлений
 */
const makeCards = function(count) {
  let cards = new Array(count);

  for (let i = 0; i < count; i++) {
    const card = createCard();
    cards[i] = card;
  }
  // способ из лекции
  // const cards = new Array(CARDS_COUNT).fill(null).map(() => createCard());

  return cards;
}

export {CARDS_COUNT, makeCards};
