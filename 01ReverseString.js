function reverse(str) {
  return str.split("").reverse().join("");
}

reverse("apple");

function reverse1(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

reverse1("apple");

function reverse2(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

reverse2("apple");

function reverse3(str) {
  return str.split("").reduce((acc, current) => current + acc, "");
}

reverse3("apple");

function reverse4(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

reverse4("apple");
