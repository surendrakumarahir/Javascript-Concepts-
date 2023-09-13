/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sorted = nums.sort((a, b) => b - a)
  let sum = 0
  console.log(sorted)
  for (let i = 0; i < nums.length; i++) {
    sum = sum + sorted[i]
    if (sum >= target) {
      return i + 1
    }
  }
  return false
}

console.log(minSubArrayLen(213, [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]))

//// second solution

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let start = 0
  let end = 0
  let minValue = Infinity
  let subarraySum = nums[0]
  while (start <= end && end < nums.length) {
    if (subarraySum >= target) {
      minValue = Math.min(minValue, end - start + 1)
      subarraySum -= nums[start]
      start++
    } else {
      end++
      subarraySum += nums[end]
    }
  }
  return minValue === Infinity ? 0 : minValue
}
