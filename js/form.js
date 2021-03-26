import { form, clearFormAndMapFilterAfterResetOrSubmit } from './form-submit.js';

const MinPricePerNight = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

const TitleLength = {
  MIN: 30,
  MAX: 100,
};

const RoomGuestsIndexes = {
  1: [2],
  2: [1, 2],
  3: [0, 1, 2],
  100: [3],
};

const resetButton = form.querySelector('.ad-form__reset');
const formSelectType = form.querySelector('#type');
const formInputPrice = form.querySelector('#price');
const selectTimeIn = form.querySelector('#timein');
const selectTimeOut = form.querySelector('#timeout');
const formInputTitle = form.querySelector('#title');
const formSelectRoomNumber = form.querySelector('#room_number');
const formSelectCapacityOptions = Array.from(form.querySelectorAll('#capacity option'));


/**
 * Настройка работы кнопки 'Очистить форму'
 */
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  clearFormAndMapFilterAfterResetOrSubmit();
});

/**
 * Настройка запрета ручного редактирования поля ввода адреса
 */
form.querySelector('#address').setAttribute('readonly', 'readonly');


/**
 *  Настройка зависимости цены за ночь от выбранного типа жилья
 */
formSelectType.addEventListener('change', (evt) => {
  formInputPrice.placeholder = MinPricePerNight[evt.target.value.toUpperCase()];
  formInputPrice.setAttribute('min', MinPricePerNight[evt.target.value.toUpperCase()]);
});

/**
 *  Настройка синхронизации времени заезда и выезда
 */
selectTimeIn.addEventListener('change', (evt) => {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', (evt) => {
  selectTimeIn.value = evt.target.value;
})

/**
 *  Настройка валидации поля ввода заголовка объявления
 */
formInputTitle.addEventListener('input', () => {
  const valueLength = formInputTitle.value.length;

  if (valueLength < TitleLength.MIN) {
    formInputTitle.setCustomValidity(`Осталось ввести ещё ${TitleLength.MIN - valueLength} символов`);
  }

  else if (valueLength > TitleLength.MAX) {
    formInputTitle.setCustomValidity(`Максимальная длина заголовка ${TitleLength.MAX} символов`);
  }

  else {
    formInputTitle.setCustomValidity('');
  }

  formInputTitle.reportValidity();
});

/**
 *  Настройка валидации цены за ночь
 */
formInputPrice.addEventListener('invalid', () => {
  if (formInputPrice.validity.rangeUnderflow) {
    formInputPrice.setCustomValidity(`Минимальная цена за ночь для такого типа жилья составляет ${formInputPrice.getAttribute('min')} рублей`);
  }

  else if (formInputPrice.validity.rangeOverflow) {
    formInputPrice.setCustomValidity(`Максимальная цена за ночь не должна превышать ${formInputPrice.getAttribute('max')} рублей`);
  }

  else if (formInputPrice.validity.valueMissing) {
    formInputPrice.setCustomValidity('Обязательное поле');
  }

  formInputPrice.addEventListener('input', () => {
    formInputPrice.setCustomValidity('');
  })
});

/**
 *  Настройка зависимости возможного количества гостей от выбранного количества комнат
 */
formSelectRoomNumber.addEventListener('change', (evt) => {
  formSelectCapacityOptions.forEach((option) => {
    option.setAttribute('disabled', 'disabled');
  })

  RoomGuestsIndexes[evt.target.value].forEach((index) => {
    formSelectCapacityOptions[index].removeAttribute('disabled');
    formSelectCapacityOptions[index].removeAttribute('selected')

    if (index === 3) {
      formSelectCapacityOptions[index].setAttribute('selected', 'selected');
    }
    else {
      formSelectCapacityOptions[2].setAttribute('selected', 'selected');
    }
  });
});

/**
 *  Настройка выделения рамкой незаполненных обязательных полей ввода
 */
form.addEventListener('input', () => {
  const invalidInputs = Array.from(form.querySelectorAll('input:invalid'));
  const validInputs = Array.from(form.querySelectorAll('input:valid'));

  invalidInputs.forEach((input) => {
    input.style.border = '2px solid red'
  });

  validInputs.forEach((input) => {
    input.style.border = 'none';
  });
});

