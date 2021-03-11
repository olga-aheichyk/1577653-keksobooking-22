import { sendData } from './get-and-send-data.js';

/**
 * Функция показа сообщения об ошибке отправке формы
 */
const showErrorMessageAfterFormSubmit = function() {
  const errorTemplate = document.querySelector('#error').content;
  const errorMessageLayout = errorTemplate.querySelector('.error');

  const errorMessage = errorMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(errorMessage);

  // закрытие сообщения об ошибке отправки описывать внутри этой функции или где-то отдельно???

}

/**
 * Функция показа сообщения об успешной отправке формы
 */
const showSuccessMessageAfterFormSubmit = function() {
  const successTemplate = document.querySelector('#success').content;
  const successMessageLayout = successTemplate.querySelector('.success');

  const successMessage = successMessageLayout.cloneNode(true);

  document.querySelector('main').appendChild(successMessage);

}

// может как-то объединить эти две функции???
// только не представляю как



const form = document.querySelector('.ad-form');

/**
 * Функция отправления на сервер введенных пользователем данных после отправки формы
 * @param {function} onSuccess — функция обработки успешно отправленных данных
 * @param {function} showAlert — функция показа сообщения об ошибке отправки на сервер пользовательских данных
 */
const sendFormDataOnSubmit = (onSuccess) => {

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showErrorMessageAfterFormSubmit(),
      new FormData(evt.target),
    )
  });
};

export { sendFormDataOnSubmit };



/**
 * Функция очистки полей ввода после успешной отправки формы или нажатия на кнопку "Очистить форму"
 */
const clearFormAfterResetOrSubmit = function() {
  // очищать отдельно каждый инпут или как-то оптимизировать можно???

  // formInputTitle.value = '';
  // formInputPrice.value = '';
}


// Как оформить выполнение 2-ух функций при успешной отправке формы(очистка полей ввода и показ сообщения об ошибке) ???

sendFormDataOnSubmit(clearFormAfterResetOrSubmit);
sendFormDataOnSubmit(showSuccessMessageAfterFormSubmit);

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', function() {
  clearFormAfterResetOrSubmit();
})
