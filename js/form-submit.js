import { sendData } from './get-and-send-data.js';
import { closeMessage } from './util.js';
import { resetMap } from './map.js';

const form = document.querySelector('.ad-form');

/**
 * Функция очистки полей ввода и выбранных фильтров (после успешной отправки формы или нажатия на кнопку "Очистить форму")
 */
const clearFormAndMapFilterAfterResetOrSubmit = () => {
  document.querySelector('.ad-form').reset();
  document.querySelector('.map__filters').reset();
  resetMap();
  // initializePinsOnMap();
}

/**
 * Функция показа сообщения об ошибке отправке формы
 */
const showErrorMessageAfterFormSubmit = () => {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessageLayout = errorTemplate.querySelector('.error');
  const errorMessage = errorMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(errorMessage);
  closeMessage(errorMessage);
}

/**
 * Функция показа сообщения об успешной отправке формы и последующей очистке полей ввода
 */
const showSuccessMessageAfterFormSubmit = () => {
  const successTemplate = document.querySelector('#success').content;
  const successMessageLayout = successTemplate.querySelector('.success');
  const successMessage = successMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(successMessage);
  closeMessage(successMessage);
  clearFormAndMapFilterAfterResetOrSubmit();
}

/**
 * Функция отправления на сервер введенных пользователем данных после отправки формы
 */
const activateFormDataPostOnSubmit = () => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      showSuccessMessageAfterFormSubmit,
      showErrorMessageAfterFormSubmit,
      new FormData(evt.target),
    )
  });
};

export {
  form,
  clearFormAndMapFilterAfterResetOrSubmit,
  activateFormDataPostOnSubmit
};
