function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (P, I) {
  let M = new Map()
  for (let i = 0; i < I.length; i++) M.set(I[i], i)
  return splitTree(P, M, 0, 0, I.length - 1)
}

var splitTree = function (P, M, pix, ileft, iright) {
  let rval = P[pix],
    root = new TreeNode(rval),
    imid = M.get(rval)
  if (imid > ileft) root.left = splitTree(P, M, pix + 1, ileft, imid - 1)
  if (imid < iright)
    root.right = splitTree(P, M, pix + imid - ileft + 1, imid + 1, iright)
  return root
}

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))

// simple and easy solution

const buildTreeEasy = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) return null

  let root = new TreeNode(preorder[0])
  let mid = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  return root
}
