class ListNode {
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkedList {
  constructor(head = null){
    this.head = head
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }

    return count
  }
}




let test = new ListNode(1)
let test2 = new ListNode(12)

let linkedList = new LinkedList(test)


console.log(linkedList.head)