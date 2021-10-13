// My Solution
function isPalindrome(string) {
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    if (
      (string.codePointAt(i) >= 65 && string.codePointAt(i) <= 90) ||
      (string.codePointAt(i) >= 97 && string.codePointAt(i) <= 122)
    ) {
      newString += string[i];
    }
  }

  let reversedString = newString.split("").reverse().join("");

  let trueOrFalse =
    newString.toLowerCase() == reversedString.toLowerCase() ? true : false;

  return trueOrFalse;
}

function isPalindrome(string) {
  string = string.toLowerCase();
  let charactersArray = string.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArray = [];
  charactersArray.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArray.push(char);
    }
  });

  if (lettersArray.join("") === lettersArray.reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("Madam, I'm Adam");
