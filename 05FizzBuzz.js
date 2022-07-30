function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
      continue;
    }
    if (i % 3 == 0) {
      console.log("fizz");
      continue;
    }
    if (i % 5 == 0) {
      console.log("buzz");
      continue;
    }
    console.log(i);
  }
}

fizzBuzz(100);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else console.log(i);
  }
}

fizzBuzz(100);
