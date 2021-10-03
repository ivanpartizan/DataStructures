function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// Add node to the head
LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

// Add node to the tail
LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

// Remove the head and return its value
LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  }
  let value = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return value;
};

// Remove the tail and return its value
LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  }
  let value = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return value;
};

// Search method
LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
  }
};

let LL = new LinkedList();
// let node1 = new Node(100, node2, null);

LL.addToHead(100);
LL.addToHead(200);
LL.addToHead(300);
LL.addToTail(10);
LL.removeHead();
LL.removeTail();

console.log(LL);
// console.log(node1);
