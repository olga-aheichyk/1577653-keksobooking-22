// как записывать эту константу, как перечисление, но тогда ключи нужно капсом и тогда в обработчике нужно будет переводить регистр
// или саму константу капсом, а ключи маленькими буквами???
const MinPricePerNight = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const formSelectType = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');

formSelectType.addEventListener('change', function (evt) {
  formInputPrice.placeholder = MinPricePerNight[evt.target.value];
  formInputPrice.setAttribute('min', MinPricePerNight[evt.target.value]);
})

const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

selectTimeIn.addEventListener('change', function (evt) {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', function (evt) {
  selectTimeIn.value = evt.target.value;
})
