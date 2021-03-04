const Title_Length = {
  MIN: 30,
  MAX: 100,
}
const formInputTitle = document.querySelector('#title');

formInputTitle.addEventListener('input', function() {
  const valueLength = formInputTitle.value.length;

  if (valueLength < Title_Length.MIN) {
    formInputTitle.setCustomValidity(`Осталось ввести ещё ${Title_Length.MIN - valueLength} символов`);
  }

  else if (valueLength > Title_Length.MAX) {
    formInputTitle.setCustomValidity(`Максимальная длина заголовка ${Title_Length.MAX} символов`);
  }

  else {
    formInputTitle.setCustomValidity('');
  }

  formInputTitle.reportValidity();
});

const formInputPrice = document.querySelector('#price');

formInputPrice.addEventListener('invalid', function() {
  if (formInputPrice.validity.rangeUnderflow) {
    formInputPrice.setCustomValidity(`Минимальная цена за ночь для такого типа жилья составляет ${formInputPrice.getAttribute('min')} рублей`);
  }

  else if (formInputPrice.validity.rangeOverflow) {
    formInputPrice.setCustomValidity(`Максимальная цена за ночь не должна превышать ${formInputPrice.getAttribute('max')} рублей`);
  }

  else if (formInputPrice.validity.valueMissing) {
    formInputPrice.setCustomValidity('Обязательное поле');
  }

  else {
    formInputPrice.setCustomValidity('');
  }
});


const formSelectRoomNumber = document.querySelector('#room_number');
const formSelectCapacity = document.querySelector('#capacity');
const formSelectOptions = formSelectCapacity.children;


formSelectRoomNumber.addEventListener('change', function(evt) {
  for (let i = 0; i < formSelectOptions.length; i++) {
    formSelectOptions[i].setAttribute('disabled', 'disabled');
  }

  switch(evt.target.value) {
    case '100' :
      formSelectOptions[3].removeAttribute('disabled');
      break;

    case '3' :
      formSelectOptions[0].removeAttribute('disabled');
    case '2' :
      formSelectOptions[1].removeAttribute('disabled');
    case '1' :
      formSelectOptions[2].removeAttribute('disabled');
      break;
  }
})









