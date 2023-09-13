class Node {
  constructor(value) {
    this.val = value
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

// depth search , a, b, d, e, c, f

function breadthfirstSearch(root) {
  let queue = [root]
  let result = []
  if (!root) return result
  while (queue.length !== 0) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let n = queue.shift()
      if (i === 0) result.push(n.val)
      if (n.right !== null) queue.push(n.right)
      if (n.left !== null) queue.push(n.left)
    }
  }
  return result
}

console.log("depth first search recursion", breadthfirstSearch(a))
