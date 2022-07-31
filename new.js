// You could iterate the min length of both array and build alternate elements and at the end push the rest.

var array1 = ["a", "b", "c", "d"],
  array2 = [1, 2],
  result = [],
  i,
  l = Math.min(array1.length, array2.length);

for (i = 0; i < l; i++) {
  result.push(array1[i], array2[i]);
}
result.push(...array1.slice(l), ...array2.slice(l));

console.log(result);

// Implementation
// We will copy each element from the both the arrays alternatively in the the third array till there is element in any one of them.
// Then we will check if there is still element in any of the arrays then add them to the third array.
let alternateMerge = (arr1, arr2, n1 = arr1.length, n2 = arr2.length) => {
  let i = 0,
    j = 0;
  let temp = [];

  //Add each element from both the array
  while (i < n1 && j < n2) {
    temp.push(arr1[i], arr2[j]);
    i++;
    j++;
  }

  //If there is still element in first array
  //then add them
  while (i < n1) {
    temp.push(arr1[i]);
    i++;
  }

  //If there is still element in second array
  //then add them
  while (j < n2) {
    temp.push(arr2[j]);
    j++;
  }

  return temp;
};
console.log(alternateMerge([1, 2, 3, 4, 5, 6, 7, 8], [11, 22, 33, 44]));

// Output:
[1, 11, 2, 22, 3, 33, 4, 44, 5, 6, 7, 8];
