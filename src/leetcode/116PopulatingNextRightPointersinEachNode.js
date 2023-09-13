/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let ptr = root
  while (root !== null && root.left !== null) {
    let curr = root
    while (curr) {
      curr.left.next = curr.right
      curr.right.next = curr.next ? curr.next.left : null
      curr = curr.next
    }
    root = root.left
  }
  return ptr
}

//https://www.youtube.com/watch?v=3MRPQFUpoA0

// recussio solution
// var connect = function (root) {
//   if (root == null || root.left == null) return root
//   root.left.next = root.right
//   root.right.next = root.next ? root.next.left : null
//   connect(root.left)
//   connect(root.right)
//   return root
// }
