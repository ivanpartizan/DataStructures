// My Solutions
function reverseWords(string) {
  let words = string.split(" ");
  let array = [];
  for (let word of words) {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    array.push(reversedWord);
  }
  return array.join(" ");
}

function reverseWords(string) {
  let words = string.split(" ");
  let array = [];
  for (let word of words) {
    word = word.split("").reverse().join("");
    array.push(word);
  }
  return array.join(" ");
}

reverseWords("this is a string of words");

function reverseWords(string) {
  let wordsArr = string.split(" ");
  let reversedWordsArr = [];

  wordsArr.forEach((word) => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    reversedWordsArr.push(reversedWord);
  });

  return reversedWordsArr.join(" ");
}
