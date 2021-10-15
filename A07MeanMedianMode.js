function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array),
  };
}

function getMean(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  let mean = sum / array.length;
  return mean;
}

function getMean(array) {
  return (
    array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length
  );
}

function getMedian(array) {
  let sortedArray = array.sort((a, b) => a - b);

  if (sortedArray.length % 2 == 1) {
    return sortedArray[Math.floor(sortedArray.length / 2)];
  } else {
    let median1 = sortedArray[sortedArray.length / 2 - 1];
    let median2 = sortedArray[sortedArray.length / 2];
    let median = (median1 + median2) / 2;
    return median;
  }
}

// My Solution
function getMode(array) {
  let obj = {};
  for (let value of array) {
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value]++;
    }
  }

  return Object.keys(obj).filter((key) => {
    return obj[key] == Math.max.apply(null, Object.values(obj));
  });
}

function getMode(array) {
  let modeObj = {};

  array.forEach((num) => {
    if (!modeObj[num]) {
      modeObj[num] = 0;
    }
    modeObj[num]++;
  });

  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] == maxFrequency) {
      modes.push(num);
    }
  }
  if (modes.length == Object.keys(modeObj).length) {
    modes = [];
  }

  return modes;
}

meanMedianMode([1, 2, 3, 4, 5, 6, 4, 1]);
