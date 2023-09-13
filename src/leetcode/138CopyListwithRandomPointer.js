/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  // check head null or not if then return null
  if (!head) return null
  let oldToNew = new Map()
  let curr = head
  // put all the values in heap
  while (curr) {
    oldToNew.set(curr, new Node(curr.val))
    curr = curr.next
  }
  // now put current next and random link
  curr = head
  while (curr) {
    oldToNew.get(curr).next = oldToNew.get(curr.next) || null
    oldToNew.get(curr).random = oldToNew.get(curr.random) || null
    curr = curr.next
  }
  // now return head
  return oldToNew.get(head)
}

/// optimize solution
class Node {
  constructor(val, next = null, random = null) {
    this.val = val
    this.next = next
    this.random = random
  }
}

function copyRandomList(head) {
  if (!head) return null

  // Step 1: Duplicate each node and insert it right after the original node
  let current = head
  while (current) {
    const copyNode = new Node(current.val)
    copyNode.next = current.next
    current.next = copyNode
    current = copyNode.next
  }

  // Step 2: Update the random pointers of the copy nodes
  current = head
  while (current) {
    const copyNode = current.next
    if (current.random) {
      copyNode.random = current.random.next
    }
    current = copyNode.next
  }

  // Step 3: Separate the original and copied lists
  const newHead = head.next
  current = head
  while (current) {
    const copyNode = current.next
    current.next = copyNode.next
    current = current.next
    if (current) {
      copyNode.next = current.next
    }
  }

  return newHead
}

// Example usage:
// Create a sample linked list with random pointers
const node1 = new Node(1)
const node2 = new Node(2)
node1.next = node2
node1.random = node2
node2.random = node2

const copy = copyRandomList(node1)

// Print the copied linked list (including random pointers)
let current = copy
while (current) {
  console.log(
    `Value: ${current.val}, Random: ${
      current.random ? current.random.val : null
    }`
  )
  current = current.next
}
