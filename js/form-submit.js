import { sendData } from './get-and-send-data.js';
import { closeMessage, clearFormAfterResetOrSubmit} from './util.js';

const form = document.querySelector('.ad-form');

/**
 * Функция показа сообщения об ошибке отправке формы
 */
const showErrorMessageAfterFormSubmit = function () {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessageLayout = errorTemplate.querySelector('.error');
  const errorMessage = errorMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(errorMessage);
  closeMessage(errorMessage);
}

/**
 * Функция показа сообщения об успешной отправке формы и последующей очистке полей ввода
 */
const showSuccessMessageAfterFormSubmit = function() {
  const successTemplate = document.querySelector('#success').content;
  const successMessageLayout = successTemplate.querySelector('.success');
  const successMessage = successMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(successMessage);
  closeMessage(successMessage);
  clearFormAfterResetOrSubmit(form);
}

/**
 * Функция отправления на сервер введенных пользователем данных после отправки формы
 */
const activateFormSubmitHandler = function () {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      showSuccessMessageAfterFormSubmit,
      showErrorMessageAfterFormSubmit,
      new FormData(evt.target),
    )
  });
};

export { activateFormSubmitHandler };
