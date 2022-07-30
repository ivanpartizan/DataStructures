class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
    return this.data;
  }
  remove() {
    return this.data.pop();
  }
}

const q = new Queue();
q.add(1);
q.remove();
