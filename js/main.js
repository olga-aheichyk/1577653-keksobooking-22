const getRandomInteger = function (firstNumber, secondNumber) {
  if (Math.sign(firstNumber) >= 0 && Math.sign(secondNumber) >= 0) {
    if (firstNumber > secondNumber) {
      let min = secondNumber;
      let max = firstNumber;

      let randomNumber = Math.random() * (max - min) + min;
      return Math.floor(randomNumber);
    }

    let min = firstNumber;
    let max = secondNumber;

    let randomNumber = Math.random() * (max - min) + min;
    return Math.floor(randomNumber);
  }

  return 'Error! Можно использовать только числа больше либо равные 0';
}

getRandomInteger(1, 3);

const getRandomFloatingPointNumber = function(firstNumber, secondNumber, floatingPointsCount) {
  if (Math.sign(firstNumber) >= 0 && Math.sign(secondNumber) >= 0 && Math.sign(floatingPointsCount) >= 0) {
    if (firstNumber > secondNumber) {
      let min = secondNumber;
      let max = firstNumber;

      let randomNumber = Math.random() * (max - min) + min;
      return randomNumber.toFixed(floatingPointsCount);
    }

    let min = firstNumber;
    let max = secondNumber;

    let randomNumber = Math.random() * (max - min) + min;
    return randomNumber.toFixed(floatingPointsCount);
  }

  return 'Error! Можно использовать только числа больше либо равные 0';
}

getRandomFloatingPointNumber(1.1, 1.2, 3)

//console.log(getRandomFloatingPointNumber(1, 6, 2));
