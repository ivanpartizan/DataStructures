function sieveOfEratosthenes(n) {}

function mergeSort(arr) {
  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);
  console.log(middleIndex);
  console.log(firstHalf);
  console.log(secondHalf);
}

mergeSort([4, 7, 23, 87, 9, 12]);
// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
// freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
// freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
function freqSeq(str, sep) {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return str
    .split("")
    .map((char) => obj[char])
    .join(sep);
}

freqSeq("hello world", "-");
