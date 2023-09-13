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

const a = new Node(236)
const b = new Node(104)
const c = new Node(701)
const d = new Node(911)
const e = new Node(227)
//const f = new Node("f")

a.left = b
a.right = c
//b.left = d
b.right = e
c.right = d

// depth search , a, b, d, e, c, f

const depthfirstSearchRecursion = (root, out = []) => {
  if (root === null) return []
  depthfirstSearchRecursion(root.left, out)
  out.push(root.val)
  depthfirstSearchRecursion(root.right, out)
  return out
}

var getMinimumDifference = function (root) {
  let arr = depthfirstSearchRecursion(root)
  console.log(arr)
  let out = Infinity
  let i = 0
  while (i < arr.length - 1) {
    let diff = Math.abs(arr[i + 1] - arr[i])
    if (diff < out) out = diff
    i++
  }
  return out
}
console.log("depth first search recursion", getMinimumDifference(a))
