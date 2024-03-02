function capitalize(string) {
  const capitalizeString = string.toUpperCase().slice(0, 1);
  const restOfString = string.slice(1);
  return capitalizeString + restOfString;
}

function reverseString(string) {
  if (string === "") {
    throw new Error("argument empty");
  }
  let stringReversed = "";
  for (let i = string.length - 1; i >= 0; i -= 1) {
    stringReversed += string.charAt(i);
  }
  return stringReversed;
}
const calculator = {};
calculator.add = function (x, b) {
  return x + b;
};
calculator.subtract = function (x, b) {
  return x - b;
};
calculator.multiply = function (x, b) {
  return x * b;
};
calculator.divide = function (x, b) {
  if (x === 0 || b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return x / b;
};

function caesarCipher(string, shift) {
  let result = "";

  for (let i = 0; i < string.length; i += 1) {
    let char = string[i];
    let code = string.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      let base = code < 97 ? 65 : 97;
      let newCode = ((code - base + shift) % 26) + base;
      result += String.fromCharCode(newCode);
    } else {
      result += char;
    }
  }
  return result;
}

function merge(array, left, middle, right) {}

function analyzeArray(array) {
  let total = 0;
  let length = array.length;
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (min > array[i]) min = array[i];
    if (max < array[i]) max = array[i];
    total += array[i];
  }
  let average = total / array.length;
  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
