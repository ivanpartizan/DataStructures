function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      `${" ".repeat(n - i)}${"#".repeat(i * 2 - 1)}${" ".repeat(n - i)}`
    );
  }
}

pyramid(5);

// Course Solution
function pyramid1(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

pyramid1(5);

// Course Solution
function pyramid2(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid2(n, row, level + add);
}

pyramid2(5);
