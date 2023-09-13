class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

//   a
//  /  \
//  b   c
// / \   \
// d  e    f

const a = new Node("1")
const b = new Node("2")
const c = new Node("3")
const d = new Node("4")
const e = new Node("5")
//const f = new Node("f")

a.left = b
a.right = c
//b.left = d
b.right = e
c.right = d

// console.log(depthfirstSearch(a))

// const depthfirstSearchRecursion = (root) => {
//   if (root === null) return []
//   const leftValue = depthfirstSearchRecursion(root.left)
//   const rightValue = depthfirstSearchRecursion(root.right)
//   return [root, ...leftValue, ...rightValue]
// }

function breadthfirstSearch(root) {
  if (!root) return null
  let queue = [root]
  let result = []
  let level = 0
  while (queue.length > 0) {
    let current = queue.shift()
    result.push(current.value)
    //if (level === result.length) result.push(current?.value)
    if (current.right) {
      queue.push(current.right)
    }
    if (current.left) {
      queue.push(current.left)
    }
  }
  return result
}

console.log("depth first search recursion", breadthfirstSearch(a))
