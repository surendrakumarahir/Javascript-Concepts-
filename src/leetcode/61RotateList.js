function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(JSON.stringify(node1))
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head
  let curr = head
  let prev = head
  let count = 0
  // get count
  while (curr) {
    curr = curr.next
    count++
  }

  k = k % count // k = 11 then 11/5 = 1 rotation only

  // more current k pointer ahead
  curr = head
  while (k--) {
    curr = curr.next
  }

  // move both pointer prev and current then current reach to end the prev remain k pointer ahead
  while (curr.next) {
    curr = curr.next
    prev = prev.next
  }

  curr.next = head
  head = prev.next
  prev.next = null

  return head
}

console.log(JSON.stringify(rotateRight(node1, 2)))
