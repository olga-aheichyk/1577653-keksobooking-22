'use strict';
/**
 * Функция получения случайного целого числа из диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @return {number|false} — случайное число
 */
const getRandomInteger = function (min, max) {
  if (max >= min && min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNumber = Math.random() * (max - min + 1) + min;
    return Math.floor(randomNumber);
  }

  return 'Error! Можно использовать только числа больше либо равные 0. \n Первое число не может быть больше второго.';
}

/**
 * Функция получения случайного числа с плавающей точкой из диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} floatingPointsCount — количество знаков после запятой
 * @return {number|false} — случайное число
 */
const getRandomFloatingPointNumber = function(min, max, floatingPointsCount = 2) {
  if (max >= min && min >= 0) {
    let randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(floatingPointsCount));
  }

  return 'Error! Можно использовать только числа больше либо равные 0. \n Первое число не может быть больше второго.';
}

/*
Нужно получить массив из 10 случайно сгенерированных объектов:
const cardsData = [{},{}, ... {}] - ?
const CARDS_COUNT = 10;

const makeCards = function(CARDS_COUNT) {
  ...
  return cards;
}

{} - структура:
  1. const author = {
    avatar: img/avatars/user{{xx}}.png,
  }
  * {{xx}} - случайное число от 01 до 08;

  2. const offer = {
    title: 'Суперпредложение',
    address: {{location.x}}, {{location.y}},
    price: {{x - любое положительное число}},
    type: random['palace', 'flat', 'house', 'bungalow'],
    rooms: {{x - любое положительное число}},
    guests: {{x - любое положительное число}},
    checkin: random['12:00', '13:00', '14:00'],
    checkout: random['12:00', '13:00', '14:00'],
    features: random, some ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: 'Уютное жильё',
    photos: random, some ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
  }

  3. const location = {
    x: random{{min = 35.65000, max = 35.70000}},
    y: random{{min = 139.70000, max = 139.80000}},

  }
*/

const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN_OUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

const CARDS_COUNT = 10;

/**
 * Функция получения случайного элемента из массива строк
 * @param {array} array — исходный массив строк
 * @return {string} — случайная строка
 */
const getRandomElementFromArray = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}

/**
 * Функция получения массива случайной длины из массива строк
 * @param {array} array — исходный массив строк
 * @param {number} arrayCount — длина случайного массива
 * @return {array} — полученный массив случайной длины
 */
const makeRandomArray = function(array) {
  // перемешаем исходный массив строк
  array.sort(() => Math.random() - 0.5);

  // сгенерируем случайную длину массива
  const arrayCount = getRandomInteger(1, array.length);

  // обрежем исходный массив до необходимой длины
  let randomArray = array.slice(0, arrayCount);
  return randomArray;
}

/**
 * Функция генерации тестовой карточки объявления
 * @return {object} — карточка объявления
 */
const createCard = function () {
  const xRandomValue = getRandomFloatingPointNumber(35.65000, 35.70000, 5);
  const yRandomValue = getRandomFloatingPointNumber(139.70000, 139.80000, 5);
  return {
    avatar: `img/avatars/user0${getRandomInteger(0, 8)}.png`,
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
 * @param {number} CARDS_COUNT — количество карточек в массиве
 * @return {array} — тестовый массив карточек объявлений
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

// const cardsData = makeCards(CARDS_COUNT);
// console.log(cardsData);
makeCards(CARDS_COUNT);


