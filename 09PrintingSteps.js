function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i) + " ".repeat(n - i));
  }
}

steps(5);

// Course Solution
function steps1(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

steps1(5);

// Course Solution
function printNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n - 1);
}

printNumber(10);
