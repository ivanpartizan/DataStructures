function caesarCipher(str, num) {
  let ciphered = "";
  num = num > 26 || num < -26 ? num % 26 : num;

  for (let i = 0; i < str.length; i++) {
    if (
      (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90) ||
      (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122)
    ) {
      let char = String.fromCodePoint(str.codePointAt(i) + num);
      if (char.codePointAt(0) > 122) {
        char = String.fromCodePoint(char.codePointAt(0) - 26);
        ciphered += char;
      } else if (char.codePointAt(0) < 65) {
        char = String.fromCodePoint(char.codePointAt(0) + 26);
        ciphered += char;
      } else if (str.codePointAt(i) <= 90 && char.codePointAt(0) > 90) {
        char = String.fromCodePoint(char.codePointAt(0) - 26);
        ciphered += char;
      } else if (str.codePointAt(i) >= 97 && char.codePointAt(0) < 97) {
        char = String.fromCodePoint(char.codePointAt(0) + 26);
        ciphered += char;
      } else {
        ciphered += char;
      }
    } else {
      ciphered += str[i];
    }
  }

  return ciphered;
}

caesarCipher("zoo keeper", 2);
