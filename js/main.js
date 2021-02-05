'use strict';
/**
 * Функция получения случайного целого числа из диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @return {number|false} — случайное число
 */
const getRandomInteger = function (min, max) {
  if (max >= min && min >= 0) {
    // let randomNumber = Math.random() * (max - min) + min;
    // return Math.floor(randomNumber);

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются MDN
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
    return randomNumber.toFixed(floatingPointsCount);
  }

  return 'Error! Можно использовать только числа больше либо равные 0. \n Первое число не может быть больше второго.';
}

/*
Нужно получить массив из 10 случайно сгенерированных объектов:
[{}, {}, ... {}] - ?
const cards = [];
const cardsCount = 10;

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

/**
 * Функция получения массива случайной длины из массива строк
 * @param {array} array — исходный массив строк
 * @param {number} arrayCount — длина случайного массива
 * @param {number} randomIndex — случайный порядковый номер элемента в исходном массиве
 * @param {array} randomIndexesArray — массив из порядковых номеров элементов в исходном массиве, которые не должны повторяться
 * @return {array} randomArray — массив случайной длины
 */


// const getRandomArray = function(array) {
//   const arrayCount = getRandomInteger(1, array.length);
//   let randomArray = new Array(arrayCount);
//   const randomIndex = getRandomInteger(0, array.length - 1)
//   let randomIndexesArray = [];

//   while (randomIndexesArray.length < arrayCount) {
//     if (randomIndexesArray.indexOf(randomIndex) === -1) {
//       randomIndexesArray.push(randomIndex);
//     }
//   }

//   return randomIndexesArray
//   }

// randomArray[i] = array[randomIndex];
// return randomArray;





const TYPE = ['palace', 'flat', 'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
//const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

// console.log(getRandomArray(FEATURES))

// const randomTypeIndex = getRandomInteger(0, TYPE.length - 1);
// console.log(randomTypeIndex);

// const randomCheckinIndex = getRandomInteger(0, CHECKIN.length - 1);
// console.log(randomCheckinIndex);

// const randomCheckoutIndex = getRandomInteger(0, CHECKOUT.length - 1);
// console.log(randomCheckoutIndex);

const getRandomArrayElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
}


// console.log(getRandomArrayElement(TYPE));
// console.log(getRandomArrayElement(CHECKIN));
// console.log(getRandomArrayElement(CHECKOUT));

const createCard = function () {
  return {
    avatar: 'img/avatars/user0' + getRandomInteger(0, 8) + '.png',
    offer: {
      title: 'Суперпредложение',
      //address: '{{location.x}}, {{location.y}}',
      price: getRandomInteger(1, 1000),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomInteger(1, 10),
      guests: getRandomInteger(1, 20),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      //features: random, some ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      description: 'Уютное жильё',
      //photos: random, some ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
    },
    location: {
      x: getRandomFloatingPointNumber(35.65000, 35.70000, 5),
      y: getRandomFloatingPointNumber(139.70000, 139.80000, 5),
    },
  }
}

//const card = createCard();
// const {avatar, offer, location} = card;

const cardsCount = 10;

let cards = new Array(cardsCount);
for (let i = 0; i < cardsCount; i++) {
  const card = createCard();
  cards[i] = card;
}

// способ из лекции
// const cards = new Array(cardsCount).fill(null).map(() => createCard());

// console.log(cards);


