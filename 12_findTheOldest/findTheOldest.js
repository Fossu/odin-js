const findTheOldest = function (array) {
  let ages = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < array.length; i++) {
    if (array[i]['yearOfDeath'] == undefined) {
      ages.push(currentYear - array[i]['yearOfBirth']);
    } else {
      ages.push(array[i]['yearOfDeath'] - array[i]['yearOfBirth']);
    }
  }
  return array[ages.indexOf(Math.max(...ages))];
};

// Do not edit below this line
module.exports = findTheOldest;
