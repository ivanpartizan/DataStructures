function capitalize(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

capitalize("a short sentence");

// Course Solution
function capitalize1(str) {
  let words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

capitalize1("a short sentence");

// Course Solution
function capitalize2(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

capitalize2("a short sentence");
