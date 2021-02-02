/**
 * Функция получения случайного целого числа из диапазона включительно
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @return {number|false} — случайное число
 */
const getRandomInteger = function (min, max) {
  if (max >= min && min >= 0) {
    let randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  }

  return 'Error! Можно использовать только числа больше либо равные 0. \n Первое число не может быть больше второго.';
}

getRandomInteger(4, 9);

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

getRandomFloatingPointNumber(1.2, 2.1, 3);
