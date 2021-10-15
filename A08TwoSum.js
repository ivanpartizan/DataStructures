function twoSum(numArray, sum) {
  let pairs = [];
  let hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currentNumber = numArray[i];
    let counterpart = sum - currentNumber;
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currentNumber, counterpart]);
    }
    hashTable.push(currentNumber);
  }
  return pairs;
}

twoSum([1, 6, 4, 5, 3, 3], 7);

// My Solution
function twoSum(array, sum) {
  let pairs = [];
  let table = [];

  for (let number of array) {
    let counterpart = sum - number;
    if (table.includes(counterpart)) {
      pairs.push([number, counterpart]);
    }
    table.push(number);
  }
  return pairs;
}
