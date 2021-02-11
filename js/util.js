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
 * @return {array} — полученный массив случайной длины
 */
const makeRandomArray = function(array) {
  let randomArray = [];

  array.forEach((element) => {
    if (Math.random() < 0.5) {
      randomArray.push(element);
    }
  })

  return randomArray;
}


/* Второй способ

const makeRandomArray = function(array) {
  // перемешаем исходный массив строк
  array.sort(() => Math.random() - 0.5);

  // сгенерируем случайную длину массива
  const arrayCount = getRandomInteger(1, array.length);

  // обрежем исходный массив до необходимой длины
  let randomArray = array.slice(0, arrayCount);
  return randomArray;
}
*/

export {getRandomInteger, getRandomFloatingPointNumber,
  getRandomElementFromArray, makeRandomArray};
