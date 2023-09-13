/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function createTree(l, r) {
    if (l > r) return null
    let mid = Math.ceil((l + r) / 2)
    let root = new TreeNode(nums[mid])
    root.left = createTree(l, mid - 1)
    root.right = createTree(mid + 1, r)
    return root
  }
  return createTree(0, nums.length - 1)
}

// other solution
// var sortedArrayToBST = function(nums) {
//     if (!nums.length) return null;

//     const mid = Math.floor(nums.length / 2);
//     const root = new TreeNode(nums[mid]);

//     // subtrees are BSTs as well
//     root.left = sortedArrayToBST(nums.slice(0, mid));
//     root.right = sortedArrayToBST(nums.slice(mid + 1));

//     return root;
// };
