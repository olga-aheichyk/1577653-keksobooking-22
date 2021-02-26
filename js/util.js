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

/**
 * Функция перевода интерактивных элементов объекта в неактивное состояние
 * @param {object} object — объект, элементы которого нужно перевести в неактивное состояние
 * @param {string} className — CSS-класс неактивности объекта
 * @param {HTMLCollection} interactiveElements — коллекция элементов объекта
 */
const makeInteractiveElementsInactive = function (object, className) {
  object.classList.add(className);

  let interactiveElements = object.elements;
  for (let i = 0; i < interactiveElements.length; i++) {
    interactiveElements[i].setAttribute('disabled', 'disabled');
  }
}

/**
  * Функция перевода интерактивных элементов объекта в активное состояние
  * @param {object} object — объект, элементы которого нужно перевести в активное состояние
  * @param {string} className — CSS-класс неактивности объекта
  * @param {HTMLCollection} interactiveElements — коллекция элементов объекта
  */
const makeInteractiveElementsActive = function (object, className) {
  object.classList.remove(className);

  let interactiveElements = object.elements;
  for (let i = 0; i < interactiveElements.length; i++) {
    interactiveElements[i].removeAttribute('disabled', 'disabled');
  }
}



export {getRandomInteger, getRandomFloatingPointNumber,
  getRandomElementFromArray, makeRandomArray,
  makeInteractiveElementsInactive, makeInteractiveElementsActive};
