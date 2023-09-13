// class TreeNode {
//   constructor(val) {
//     this.val = val
//     this.left = null
//     this.right = null
//   }
// }

// function maxDepth(root) {
//   if (root === null) {
//     return 0
//   }

//   const leftDepth = maxDepth(root.left)
//   const rightDepth = maxDepth(root.right)

//   return Math.max(leftDepth, rightDepth) + 1
// }

// //    3
// //  /  |
// // 9  20
// //   /  \
// //  17   5

// // Example binary tree
// const tree = new TreeNode(3)
// tree.left = new TreeNode(9)
// tree.right = new TreeNode(20)
// tree.right.left = new TreeNode(15)
// tree.right.right = new TreeNode(7)

// const depth = maxDepth(tree)
// console.log(depth) // Output: 3

class TreeNode {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(17)
tree.right.right = new TreeNode(7)

function maxDepth(root) {
  if (root === null) {
    return 0
  }

  const leftSide = maxDepth(root.left)
  const rightSide = maxDepth(root.right)

  return Math.max(leftSide, rightSide) + 1
}

const depth = maxDepth(tree)
console.log(depth) // Output: 3
