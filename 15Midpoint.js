function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const l = new LinkedList();
l.insertLast("a");
l.insertLast("b");
l.insertLast("c");
midpoint(l);
