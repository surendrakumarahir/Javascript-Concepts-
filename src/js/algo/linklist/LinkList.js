class Node {
  constructor(val) {
    this.next = null
    this.val = val
  }
}

class LinkedList {
  constructor(head) {
    this.head = head
  }
  // size method
  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }

    return count
  }

  clear() {
    this.head = null
  }

  getLastNode() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  getFirstNode() {
    return this.head
  }
}

module.exports = { LinkedList, Node }

// putting all together

let node1 = new Node(3)
let node2 = new Node(5)

node1.next = node2

//  {
//    val: 3,
//    next: {
//     val: ,5
//     next: null
//    }
// }

const linkList = new LinkedList(node1)

console.log(linkList.head.next.val)
console.log("size", linkList.size())
console.log("last node", linkList.getLastNode())
console.log("get first node", linkList.getFirstNode())
