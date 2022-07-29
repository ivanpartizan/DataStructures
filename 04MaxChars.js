function maxChar(str) {
  let charMap = {};

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  let values = Object.values(charMap);
  let maxValue = Math.max(...values);

  for (let char in charMap) {
    if (charMap[char] == maxValue) return char;
  }
}

maxChar("abccccc");

// Course Solution
function maxChar1(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

maxChar1("abccccc");

// Trick
const string = "Hello There!";
const chars = {};

for (let char of string) {
  if (chars[char]) {
    chars[char]++;
  } else {
    chars[char] = 1;
  }
}

// OR
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}

// OR
for (let char of string) {
  chars[char] = chars[char] + 1 || 1;
}

// Cool
const getMax = (object) => {
  return Object.keys(object).filter(
    (key) => object[key] == Math.max(...Object.values(object))
  );
};

const obj = { apples: 1, bananas: 1, pears: 1 };

getMax(obj);

const getMax1 = (obj) => {
  let maxValue = Math.max(...Object.keys(obj).map((value) => obj[value]));

  return Object.keys(obj).filter((value) => obj[value] == maxValue);
};

getMax1(obj);
