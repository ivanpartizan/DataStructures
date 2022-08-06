// fib memoization
// JS Object, keys will be arg to fn, value will be the return value
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

fib(50);
// linear time complexity - O(n) time O(n) space

// exponential time complexity - 2 ^ n
// const fib = (n) => {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// Grid Traveler
const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

gridTraveler(18, 18);
// m * n combinations, O(m * n) time; O(n + m) space

// exponential time complexity - 2 ^ n + m; O(n + m) space complexity
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

// Can Sum?
const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};
// O(m * n) time; O(m) space; m = target sum, n = array length

canSum(8, [2, 3, 5]);
canSum(300, [7, 14]);

// O(n ^ m) time complexity, O(m) space complexity
// const canSum =(targetSum,numbers) => {
//   if(targetSum===0) return true;
//   if(targetSum<0) return false;

//   for(let num of numbers){
//     const remainder =targetSum-num;
//     if(canSum(remainder,numbers) === true){
//       return true;
//     }
//   }

//   return false;
// }

// How Sum?
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [...remainderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};
// O(n * m ^ 2) time; O(m ^ 2) space; m = target sum, n = array length

howSum(8, [2, 3, 5]);

// O(n ^ m * m) time; O(m) space; m = target sum, n = array length
// const howSum=(targetSum,numbers)=>{
//   if(targetSum===0) return [];
//   if(targetSum<0) return null;

//   for(let num of numbers) {
//     const remainder=targetSum-num;
//     const remainderResult=howSum(remainder,numbers)
//     if(remainderResult !== null){
//       return [...remainderResult,num]
//     }
//   }

//   return null;
// }

// Best Sum
const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetSum] = shortestCombination;
  return shortestCombination;
};
// O(n * m ^ 2) time; O(m ^ 2) space; m = target sum, n = array length

bestSum(8, [1, 4, 5]);

// O(n ^ m * m) time; O(m ^ 2) space; m = target sum, n = array length
// const bestSum=(targetSum,numbers)=>{
// if(targetSum ===0) return []
// if(targetSum<0) return null;

// let shortestCombination=null;

// for(let num of numbers){
//   const remainder=targetSum-num;
// const remainderCombination=  bestSum(remainder,numbers)
// if(remainderCombination!== null) {
// const combination = [  ...remainderCombination,num]
// if(shortestCombination===null || combination.length < shortestCombination.length){
//   shortestCombination=combination
// }
// }
// }

// return shortestCombination
// }
