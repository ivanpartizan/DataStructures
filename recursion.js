// Tips
// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do some work. Call your function again, making sure the arguments have changed in some fashion

function factorial(num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

factorial(10);

function printNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n - 1);
}

printNumber(10);
