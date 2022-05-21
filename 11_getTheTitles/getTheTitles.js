const getTheTitles = function (array) {
  let books = [];
  for (let i = 0; i < array.length; i++) {
    books.push(array[i]['title']);
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
