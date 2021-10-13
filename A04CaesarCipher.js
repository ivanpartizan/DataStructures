function caesarCipher(str, num) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90) ||
      (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122)
    ) {
      newstr += String.fromCodePoint(str.charCodeAt(i) + num);
    } else {
      newstr += str[i];
    }
  }

  return newstr;
}

caesarCipher("zoo keeper", 2);
("|qq mggrgt");
