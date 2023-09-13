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
  // Special case...
  if (head == null || head.next == null) return head
  // create a fake node that acts like a fake head of list pointing to the original head and it points to the original head......
  var fake = new ListNode(0)
  fake.next = head
  var curr = fake
  // Loop till curr.next and curr.next.next not null
  while (curr.next != null && curr.next.next != null) {
    // curr.next means the next node of curr pointer and curr.next.next means the next of next of curr pointer...
    // if the value of curr.next and curr.next.next is same...
    // There is a duplicate value present in the list...
    if (curr.next.val == curr.next.next.val) {
      let duplicate = curr.next.val
      // If the next node of curr is not null and its value is eual to the duplicate value...
      while (curr.next != null && curr.next.val == duplicate) {
        // Skip those element and keep updating curr...
        curr.next = curr.next.next
      }
    }
    // Otherwise, move curr forward...
    else {
      curr = curr.next
    }
  }
  return fake.next // Return the linked list...
}

console.log(JSON.stringify(deleteDuplicates(node1)))
