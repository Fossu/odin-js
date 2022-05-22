const caesar = function (message, n) {
  let messageSplit = message.split("");
  if (n > 0) {
    for (let i = 0; i < messageSplit.length; i++) {
      // Char code of 'A' is 65
      if (messageSplit[i].match(/[A-Z]/)) {
        messageSplit[i] = String.fromCharCode(65 +
          ((messageSplit[i].charCodeAt(0) - 65 + n) % 26))
      }
      // Char code of 'a' is 97
      if (messageSplit[i].match(/[a-z]/)) {
        messageSplit[i] = String.fromCharCode(97 +
          ((messageSplit[i].charCodeAt(0) - 97 + n) % 26))
      }
    }
  }
  if (n < 0) {
    for (let i = 0; i < messageSplit.length; i++) {
      // Char code of 'Z' is 90
      if (messageSplit[i].match(/[A-Z]/)) {
        messageSplit[i] = String.fromCharCode(90 +
          ((messageSplit[i].charCodeAt(0) - 90 + n) % 26))
      }
      // Char code of 'z' is 122
      if (messageSplit[i].match(/[a-z]/)) {
        messageSplit[i] = String.fromCharCode(122 +
          ((messageSplit[i].charCodeAt(0) - 122 + n) % 26))
      }
    }
  }
  return messageSplit.join("");
};

// Do not edit below this line
module.exports = caesar;
