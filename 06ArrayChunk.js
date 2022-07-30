function chunk(array, size) {
  let chunked = [];

  for (let element of array) {
    let last = chunked[chunked.length - 1];

    if (!last || last.length == size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

chunk([1, 2, 3, 4], 2);

function chunk1(array, size) {
  let chunked = [];

  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }

  return chunked;
}

chunk1([1, 2, 3, 4], 2);

function chunk2(array, size) {
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

chunk2([1, 2, 3, 4], 2);
