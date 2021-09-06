class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    return prevNode;
  }

  reverBetween(left, right) {
    let newHead = new ListNode(0);
    let now = newHead;
    let tmp = null;
    let reverseLast = null;
    let reverseHead = null;
    let reverseNow = null;
    let i = 0;

    newHead.next = this.head;

    while (now) {
      tmp = now.next;

      if (i === left - 1) reverseHead = now;   
      if (i === left) {
        reverseLast = now;
        reverseNow = now;
      }
      if (i > left && i <= right) {
        now.next = reverseNow;
        reverseNow = now;
      }
      if (i === right) {
        reverseLast.next = tmp;
        reverseHead.next = reverseNow;
      }

      now = tmp;
      i++;
    }

    return newHead.next;
  }
}







let test = new ListNode(1);
let test2 = new ListNode(2);
let test3 = new ListNode(3);
let test4 = new ListNode(4);
let test5 = new ListNode(5);

test4.next = test5;
test3.next = test4;
test2.next = test3;
test.next = test2;

let linkedList = new LinkedList(test);

console.log(linkedList.reverBetween(2, 4));
