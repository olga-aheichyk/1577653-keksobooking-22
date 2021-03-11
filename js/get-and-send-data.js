import { map } from './map.js';

/**
 * Функция отправления GET-запроса на сервер и обработки полученных данных
 * @param {function} onSuccess — функция обработки успешно полученных данных
 * @param {function} onError — функция, выполняющаяся при ошибке получения данных
 * @param {map} object — интерактивная карта, необходимая для обработки полученных данных
 */

const getData = function (onSuccess) {
  fetch ('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adds) => {
      onSuccess(map, adds);
    })
}

// .then((response) => {
//   if (response.ok) {
//     return response.json();
//   }

//   else {
//     onError();
//   }
// })
//   .then((adds) => {
//     onSuccess(map, adds);
//   })
//   .catch(() => {
//     onError();
//   })


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
      headers:
      {
        'Content-Type': 'multipart/form-data',
      },
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

export {getData, sendData}
