const fibonacci = function (n) {
  n = Number(n);
  if (n <= 0) {
    return 'OOPS';
  }
  let fibonacci1 = 1;
  let fibonacci2 = 1;
  let placeholder;
  for (let i = 2; i < n; i++) {
    placeholder = fibonacci2;
    fibonacci2 = fibonacci1 + fibonacci2;
    fibonacci1 = placeholder;
  }
  return fibonacci2;
};

// Do not edit below this line
module.exports = fibonacci;
