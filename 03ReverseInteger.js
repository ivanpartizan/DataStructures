function reverseInt(n) {
  if (n >= 0) {
    return +String(n).split("").reverse().join("");
  } else {
    return parseInt(String(n).split("").reverse().join("")) * -1;
  }
}

reverseInt(-15);

// Course Solution
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

reverseInt(-90);
