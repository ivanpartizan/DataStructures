// Numerical Palindrome #1
function palindrome(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  } else {
    let string = String(num);
    let newnum = "";
    for (let char of string) {
      newnum += char;
    }
    newnum = newnum.split("").reverse().join("");
    return num == newnum ? true : false;
  }
}

// IMPROVED SOLUTION
function palindrome(num) {
  if (num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  } else {
    return String(num) == String(num).split("").reverse().join("");
  }
}

// Numerical Palindrome #1.5
function palindrome(num, s) {
  if (!Number.isInteger(num) || !Number.isInteger(s) || num < 0 || s < 0) {
    return "Not valid";
  } else {
    let arrayOfPalindromes = [];
    for (num; arrayOfPalindromes.length < s; num++) {
      if (num > 9 && String(num) == String(num).split("").reverse().join("")) {
        arrayOfPalindromes.push(num);
      }
    }
    return arrayOfPalindromes;
  }
}

palindrome(6, 4);
palindrome(19, 3);

// Numerical Palindrome #2
function palindrome(num) {
  if (!Number.isInteger(num) || num < 0) {
    return "Not valid";
  } else {
    let string = String(num);
    for (let i = 0; i < string.length / 2; i++) {
      let temp = string[i];
      string[i] = string[string.length - 1 - i];
      string[string.length - 1 - i] = temp;
      if (string[i] == string[string.length - 1 - i]) {
        return true;
      } else {
        return false;
      }
    }
  }
}
