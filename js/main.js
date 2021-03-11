import './form.js';
import './check-form-validity.js';
import './form-submit.js';
import { renderPins } from './pins.js';
import { getData } from './get-and-send-data.js';
// import { showAlert } from './util.js';

// import {CARDS_COUNT, makeCards} from './make-cards.js';
// const mockObjects = makeCards(CARDS_COUNT);
// renderPins(map, mockObjects);

getData(renderPins,
  // showAlert('Произошла ошибка при загрузке данных. Перезагрузите страницу или зайдите на сайт позже')
);

/*

Осталось доделать:

1. Обработка ошибки получения данных ???

2. Доделать возвращение формы в исходное состояние при успешной отправке

3. Доделать показ сообщений об отправке данных, реализовать закрытие этих сообщений

4. Реализовать функцию очистки формы при клике на кпопку Очистить и при отправке

*/
