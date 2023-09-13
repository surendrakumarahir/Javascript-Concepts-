/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let prefix = 1
  let postfix = 1
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    if (prefix === 0) {
      prefix = 1
    }
    if (postfix === 0) {
      postfix = 1
    }

    prefix = prefix * nums[i]
    postfix = postfix * nums[nums.length - 1 - i]

    max = Math.max(max, Math.max(prefix, postfix))
  }

  return max
}

console.log(maxProduct([2, 3, -2, 4]))
//https://www.youtube.com/watch?v=hnswaLJvr6g&ab_channel=takeUforward
