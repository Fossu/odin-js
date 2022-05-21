const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function (array) {
  let product = 1;
  for (i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  let factorial = 1;
  if (x > 1) {
    for (i = x; i >= 2; i--) {
      factorial = factorial * i;
    }
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
