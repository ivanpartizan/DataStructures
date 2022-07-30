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
function steps2(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps2(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps2(n, row, stair);
}

steps2(5);
