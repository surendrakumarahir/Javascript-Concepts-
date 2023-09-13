// recursion solution
var hasPathSum = function (root, targetSum) {
  if (!root) return false
  if (!root.left && !root.right) {
    return targetSum === root.val
  } else {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    )
  }
}

// stack solution
class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}
// 5, 4, 8 , 11, 13, 4
const root = new Node(5)
root.left = new Node(4)
root.right = new Node(8)
root.left.left = new Node(11)
root.right.left = new Node(13)
root.right.right = new Node(4)

function hashPathSumStack(root, sum) {
  if (!root) return false
  let pathStack = [root]
  let sumStack = [root.val]
  console.log("working")
  while (pathStack.length > 0) {
    let current = pathStack.pop()
    let currentSum = sumStack.pop()

    if (current.left === null && current.right === null && sum === currentSum)
      return true

    if (current.right != null) {
      pathStack.push(current.right)
      sumStack.push(currentSum + current.right.val)
    }

    if (current.left != null) {
      pathStack.push(current.left)
      sumStack.push(currentSum + current.left.val)
    }
  }

  return false
}
console.log("sum")
console.log("result", hashPathSumStack(root, 26))
