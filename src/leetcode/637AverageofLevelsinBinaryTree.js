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

function averageOfLevels(root) {
  let avarage = []
  let queue = [root]
  if (!root) return null
  while (queue.length) {
    let total = 0
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let n = queue.shift()
      total += parseInt(n.val)
      n.left && queue.push(n.left)
      n.right && queue.push(n.right)
    }
    avarage.push(total / size)
  }
  return avarage
}

console.log("depth first search recursion", averageOfLevels(a))
