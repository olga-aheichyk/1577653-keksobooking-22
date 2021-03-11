const MinPricePerNight = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
}

const formSelectType = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');

formSelectType.addEventListener('change', function (evt) {
  formInputPrice.placeholder = MinPricePerNight[evt.target.value.toUpperCase()];
  formInputPrice.setAttribute('min', MinPricePerNight[evt.target.value.toUpperCase()]);
})

const selectTimeIn = document.querySelector('#timein');
const selectTimeOut = document.querySelector('#timeout');

selectTimeIn.addEventListener('change', function (evt) {
  selectTimeOut.value = evt.target.value;
})

selectTimeOut.addEventListener('change', function (evt) {
  selectTimeIn.value = evt.target.value;
})
