/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = []
  for (let i = 0; i < nums.length; i++) {
    prefix[i] = i === 0 ? 1 * nums[i] : prefix[i - 1] * nums[i]
  }

  let postfix = []
  for (let i = nums.length - 1; i >= 0; i--) {
    postfix[i] = i === nums.length - 1 ? 1 * nums[i] : postfix[i + 1] * nums[i]
  }
  console.log(prefix, postfix)
  let idx = 0
  let output = []
  while (idx < nums.length) {
    if (idx === 0) {
      output[idx] = 1 * postfix[idx + 1]
    } else if (idx === nums.length - 1) {
      output[idx] = prefix[idx - 1] * 1
    } else {
      output[idx] = prefix[idx - 1] * postfix[idx + 1]
    }
    idx++
  }
  return output
}

//console.log(productExceptSelf([1, 2, 3, 4]))

// better solution without prefix and post fix array

function productExceptSelfOptimal(nums) {
  let output = []
  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix
    prefix = prefix * nums[i]
  }
  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= postfix
    postfix = postfix * nums[i]
  }
  console.log(output)
}

console.log(productExceptSelfOptimal([1, 2, 3, 4]))
//https://www.youtube.com/watch?v=bNvIQI2wAjk
