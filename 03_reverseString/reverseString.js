const reverseString = function (string) {
  const elementArray = string.split("");
  const reverseArray = elementArray.reverse();
  const reverseString = reverseArray.join("");
  return reverseString;
};

console.log(reverseString('Adam is cool.'));
// Do not edit below this line
module.exports = reverseString;
