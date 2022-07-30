function fib(n) {
  let series = [0, 1];
  for (let i = 2; i < n; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  console.log(series);
  return series[n - 1];
}

fib(9);

// Course Solution
function fib1(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  console.log(result);
  return result[n];
}

fib1(9);

// For every increase in n, we have to calculate one additional number - linear runtime
// we have one simple for loop

// Recursion
function fib2(n) {
  if (n < 2) {
    return n;
  }
  return fib2(n - 1) + fib2(n - 2);
}

fib2(5);

// MEMOIZATION
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let fib = memoize(slowFib);
fib(5);
