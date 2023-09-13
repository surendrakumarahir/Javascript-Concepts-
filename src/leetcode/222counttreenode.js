// normal solution
var countNodes = function (root) {
  if (!root) return 0
  let count = 0
  let stack = [root]
  while (stack.length > 0) {
    let current = stack.pop()
    count++
    if (current.right) stack.push(current.right)
    if (current.left) stack.push(current.left)
  }
  return count
}

// optimize solution///
// client want this solution -> complete binary tree mease fill left to right
var countNodes = function (root) {
  function leftDepth(node) {
    if (!node) return 0
    return leftDepth(node.left) + 1
  }

  function rightDepth(node) {
    if (!node) return 0
    return rightDepth(node.right) + 1
  }

  function traverse(node) {
    const leftLen = leftDepth(node)
    const rightLen = rightDepth(node)

    if (leftLen === rightLen) return Math.pow(2, leftLen) - 1
    return traverse(node.left) + traverse(node.right) + 1
  }
  return traverse(root)
}

const countNodes = function (root) {
  const leftDepth = function (root) {
    if (!root) return 0
    return leftDepth(root.left) + 1
  }

  const rightDepth = function (root) {
    if (!root) return 0
    return rightDepth(root.right) + 1
  }

  function traverse(root) {
    const left = leftDepth(root.left)
    const right = rightDepth(root.right)
    if (left === right) return Math.pow(2, left) - 1
    return traverse(root.left) + traverse(root.right)
  }

  return traverse(root)
}

// time complexcity ==> lon(n) for left child , log(n) for right child
