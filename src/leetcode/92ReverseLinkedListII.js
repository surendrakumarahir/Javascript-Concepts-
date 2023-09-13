/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let start = head
  let current = head
  let position = 1
  while (position < left) {
    start = current
    current = current.next
    position++
  }
  let prev = null
  tail = current
  while (position >= left && position <= right) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
    position++
  }

  start.next = prev
  tail.next = current

  return left > 1 ? head : prev
}

//https://www.youtube.com/watch?v=oDL8vuu2Q0E
