function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(3)
let node5 = new ListNode(4)
let node6 = new ListNode(4)
let node7 = new ListNode(5)
let node8 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8

console.log(JSON.stringify(node1))

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let ptr = new ListNode(null, head)
  let curr = head
  let prev = ptr
  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      curr = curr.next
    } else {
      prev.next = curr
      prev = prev.next
      curr = curr.next
    }
  }

  return ptr.next
}

console.log(JSON.stringify(deleteDuplicates(node1)))
