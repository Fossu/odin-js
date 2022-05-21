const palindromes = function (string) {
  string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
  string = string.toLowerCase();
  string = string.split("");
  if (string.toString() == string.reverse().toString()) return true;
  return false;
};

// Do not edit below this line
module.exports = palindromes;
