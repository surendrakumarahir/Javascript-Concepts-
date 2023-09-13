/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let start = 0
  let end = 0
  let maxArray = []
  let max = 0
  while (end < nums.length) {
    if (end - start + 1 != k) {
      max = Math.max(max, nums[end])
      end++
    } else if (end - start + 1 === k) {
      max = Math.max(max, nums[end])
      maxArray.push(max)
      if (max === nums[start]) {
        max = nums[start + 1]
      }

      start++
      end++
    }
  }
  return maxArray
}

console.log(maxSlidingWindow([1, -1], 1))
