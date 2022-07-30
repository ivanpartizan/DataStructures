function vowels(str) {
  let vowelsArray = [];
  for (let char of str.toLowerCase()) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowelsArray.push(char);
    }
  }
  return vowelsArray.length;
}

vowels("hello world");

// RegExp
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;

  // let vowelsArray = [];
  // const regExp = /[aeiou]/;

  // for (let char of str.toLowerCase()) {
  //   if (char.match(regExp)) {
  //     vowelsArray.push(char);
  //   }
  // }

  // return vowelsArray.length;
}

vowels("Ivan Milenkovic");

// Course Solution
function vowels1(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
}

vowels1("hi there!");
