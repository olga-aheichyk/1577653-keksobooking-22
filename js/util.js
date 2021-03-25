const TokyoCenter = {
  X: 35.6894,
  Y: 139.692,
};

const ALERT_SHOW_TIME = 5000;

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
  // interactiveElements.forEach((item) => {item.setAttribute('disabled', 'disabled');})
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
    interactiveElements[i].removeAttribute('disabled');
  }
}

/**
  * Функция создания сообщения об ошибке
  * @param {string} message — текст сообщения об ошибке
  */
const showGetErrorAlert = function() {
  const adTitle = document.querySelector('.notice__title')
  const alertContainer = document.createElement('div');
  alertContainer.style.padding = '30px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Данные о доступных объявлениях не могут быть загружены. Перезагрузите страницу или зайдите на сайт позже';

  adTitle.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

/**
  * Функция проверки на нажатие клавиши 'Esc'
  */
const isEscEvent = function (evt) {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

/**
  * Функция закрытия сообщения об отправке формы
  * @param {object} message — DOM-элемент сообщения об отправке формы
  */
const closeMessage = function (message) {
  document.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      message.remove();
    }
  })

  document.addEventListener('click', function () {
    message.remove();
  })
}

/**
 * Функция очистки полей ввода (после успешной отправки формы или нажатия на кнопку "Очистить форму")
 */
const clearFormAfterResetOrSubmit = function (form) {
  form.reset();
  document.querySelector('#address').value = `${TokyoCenter.X}, ${TokyoCenter.Y}`
}




export { TokyoCenter,
  getRandomInteger, getRandomFloatingPointNumber,
  getRandomElementFromArray, makeRandomArray,
  makeInteractiveElementsInactive, makeInteractiveElementsActive,
  showGetErrorAlert,
  closeMessage, clearFormAfterResetOrSubmit
};
