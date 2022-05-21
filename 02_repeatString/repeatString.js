const repeatString = function (string, n = 1) {
  if (n < 0) {
    return 'ERROR'
  }
  let longString = "";
  for (let i = 1; i <= n; i++) {
    longString = longString.concat(string);
  }
  return longString;
};

// Do not edit below this line
module.exports = repeatString;
