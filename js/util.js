
const TokyoCenter = {
  X: 35.6894,
  Y: 139.692,
};

const ALERT_SHOW_TIME = 5000;

/**
 * Функция перевода интерактивных элементов объекта в неактивное состояние
 * @param {object} object — объект, элементы которого нужно перевести в неактивное состояние
 * @param {string} className — CSS-класс неактивности объекта
 * @param {HTMLCollection} interactiveElements — коллекция элементов объекта
 */
const makeInteractiveElementsInactive = (object, className) => {
  object.classList.add(className);

  let interactiveElements = Array.from(object.elements);
  interactiveElements.forEach((item) => {
    item.setAttribute('disabled', 'disabled');
  })
}

/**
  * Функция перевода интерактивных элементов объекта в активное состояние
  * @param {object} object — объект, элементы которого нужно перевести в активное состояние
  * @param {string} className — CSS-класс неактивности объекта
  * @param {HTMLCollection} interactiveElements — коллекция элементов объекта
  */
const makeInteractiveElementsActive = function (object, className) {
  object.classList.remove(className);

  let interactiveElements = Array.from(object.elements);
  interactiveElements.forEach((item) => {
    item.removeAttribute('disabled');
  })
}

/**
  * Функция создания сообщения об ошибке получения данных с сервера
  * @param {string} message — текст сообщения об ошибке
  */
const showGetErrorAlert = (message = 'Данные о доступных объявлениях не могут быть загружены. Перезагрузите страницу или зайдите на сайт позже') => {
  const adTitle = document.querySelector('.notice__title')
  const alertContainer = document.createElement('div');
  alertContainer.style.padding = '30px';
  alertContainer.style.fontSize = '40px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  adTitle.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

/**
  * Функция проверки на нажатие клавиши 'Esc'
  */
const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
}

/**
  * Функция закрытия сообщения об отправке формы
  * @param {object} message — DOM-элемент сообщения об отправке формы
  */
const closeMessage = (message) => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      message.remove();
    }
  })

  document.addEventListener('click', () => {
    message.remove();
  })
}

export { TokyoCenter,
  makeInteractiveElementsInactive, makeInteractiveElementsActive,
  showGetErrorAlert,
  closeMessage
};
