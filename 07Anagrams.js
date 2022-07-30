function anagrams(stringA, stringB) {
  stringA = stringA
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim()
    .replace(/[^A-Za-z0-9]/g, "");
  stringB = stringB
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim()
    .replace(/[^A-Za-z0-9]/g, "");
  console.log(stringA);
  console.log(stringB);

  return stringA == stringB;
}

anagrams("rail safety", "fairy tales");

// Course Solution
function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams1(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

anagrams1("rail safety", "fairy tales");

// Course Solution
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams2(stringA, stringB) {
  return cleanString(stringA) == cleanString(stringB);
}

anagrams2("rail safety", "fairy tales");
