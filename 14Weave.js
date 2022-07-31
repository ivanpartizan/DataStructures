class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    return this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

const q1 = new Queue();
q1.add(1);
q1.add(3);
q1.add(5);
const q2 = new Queue();
q2.add(2);
q2.add(4);
q2.add(6);

weave(q1, q2);
