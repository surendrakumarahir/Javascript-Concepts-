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

const a = new Node(20)
const b = new Node(15)
const c = new Node(25)
const d = new Node(10)
const e = new Node(16)
const f = new Node(28)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(a)

const findMin = (root) => {
  if (root === null) {
    return Infinity
  }

  const left = findMin(root.left)
  const right = findMin(root.right)

  return Math.min(root.value, left, right)
}

console.log(findMin(a))
