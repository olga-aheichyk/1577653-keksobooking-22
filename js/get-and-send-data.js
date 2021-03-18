import { map } from './map.js';

/**
 * Функция отправления GET-запроса на сервер и обработки полученных данных
 * @param {function} onSuccess — функция обработки успешно полученных данных
 * @param {function} onError — функция, выполняющаяся при ошибке получения данных
 * @param {map} object — интерактивная карта, необходимая для обработки полученных данных
 */


const getData = function (onSuccess, onError) {
  fetch ('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      else {
        onError('Данные о доступных объявлениях не могут быть загружены. Перезагрузите страницу или зайдите на сайт позже');
      }
    })
    .then(
      (ads) => {
      onSuccess(ads, map);
      }
    )
    .catch(() => {
      onError('Данные о доступных объявлениях не могут быть загружены. Перезагрузите страницу или зайдите на сайт позже');
    })

  // при ошибке загрузки отрабатывают 2 onError - показывается сразу 2 сообщения об ошибке загрузки
  // как сделать, чтобы срабатывало одно???
}

/**
 * Функция отправления POST-запроса на сервер для отправки введенных пользователем данных
 * @param {function} onSuccess — функция обработки успешно отправленных данных
 * @param {function} onError — функция, выполняющаяся при ошибке отправки данных
 * @param {formData} object — введенные в форме пользовательские данные, которые необходимо отправить на сервер
 */
const sendData = function (onSuccess, onError, formData) {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
      else {
        onError();
      }
    })
    .catch(() => {
      onError();
    })
}

export { getData, sendData }
