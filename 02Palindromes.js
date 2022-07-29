function palindrome(str) {
  return str === str.split("").reverse().join("");
}

palindrome("abba");

function palindrome1(str) {
  return str
    .split("")
    .every((char, index) => char === str[str.length - 1 - index]);
}

palindrome1("abba");

function palindrome2(str) {
  let reversed = str.split("").reverse().join("");

  return str.split("").every((char, index) => char === reversed[index]);
}

palindrome2("abba");
