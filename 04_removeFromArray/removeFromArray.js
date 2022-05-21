const removeFromArray = function (array, ...toRemove) {
  for (const element of toRemove) {
    // console.log(array.indexOf(element));
    if (array.indexOf(element) >= 0) {
      // Starting at element index remove 1 array element
      array.splice(array.indexOf(element), 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
