const sumAll = function (x, y) {
  let sum = 0;
  const upper = Math.max(x, y);
  const lower = Math.min(x, y);
  if (lower < 0 || typeof (x) != 'number' || typeof (y) != 'number') {
    return 'ERROR';
  }
  for (let i = 0; i <= (upper - lower); i++) {
    sum = sum + lower + i;
  }
  return sum;
};

console.log(typeof (3));
// Do not edit below this line
module.exports = sumAll;
