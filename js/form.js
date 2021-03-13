import { clearFormAfterResetOrSubmit } from './util.js';

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

const RoomGuests = {
  1: [2],
  2: [1, 2],
  3: [0, 1, 2],
  100: [3],
};

/**
 * Настройка работы кнопки 'Очистить форму'
 */
const form = document.querySelector('.ad-form');
const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  clearFormAfterResetOrSubmit(form);
})

/**
 *  Настройка зависимости цены за ночь от выбранного типа жилья
 */
const formSelectType = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');

formSelectType.addEventListener('change', function (evt) {
  formInputPrice.placeholder = MinPricePerNight[evt.target.value.toUpperCase()];
  formInputPrice.setAttribute('min', MinPricePerNight[evt.target.value.toUpperCase()]);
})

/**
 *  Настройка синхронизации времени заезда и выезда
 */
const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

selectTimeIn.addEventListener('change', function (evt) {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', function (evt) {
  selectTimeIn.value = evt.target.value;
})

/**
 *  Настройка валидации поля ввода заголовка объявления
 */
const formInputTitle = document.querySelector('#title');

formInputTitle.addEventListener('input', function () {
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
formInputPrice.addEventListener('invalid', function () {
  if (formInputPrice.validity.rangeUnderflow) {
    formInputPrice.setCustomValidity(`Минимальная цена за ночь для такого типа жилья составляет ${formInputPrice.getAttribute('min')} рублей`);
  }

  else if (formInputPrice.validity.rangeOverflow) {
    formInputPrice.setCustomValidity(`Максимальная цена за ночь не должна превышать ${formInputPrice.getAttribute('max')} рублей`);
  }

  else if (formInputPrice.validity.valueMissing) {
    formInputPrice.setCustomValidity('Обязательное поле');
  }

  formInputPrice.addEventListener('input', function () {
    formInputPrice.setCustomValidity('');
  })
});

/**
 *  Настройка зависимости возможного количества гостей от выбранного количества комнат
 */
const formSelectRoomNumber = document.querySelector('#room_number');
const formSelectCapacityOptions = document.querySelectorAll('#capacity option');


formSelectRoomNumber.addEventListener('change', function(evt) {
  for (let i = 0; i < formSelectCapacityOptions.length; i++) {
    formSelectCapacityOptions[i].setAttribute('disabled', 'disabled');
  }

  RoomGuests[evt.target.value].forEach((index) => {
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
