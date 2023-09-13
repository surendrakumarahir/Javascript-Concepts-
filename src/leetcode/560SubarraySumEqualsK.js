/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let start = 0
  let end = 0
  let sum = 0
  let count = 0
  while (end < nums.length) {
    sum = sum + nums[end]
    if (sum < k) {
      end++
    } else if (sum === k) {
      count++
      sum = sum - nums[start]
      start++
      end++
    } else if (sum > k) {
      while (sum > k) {
        sum = sum - nums[start]
        start++
        end++
        if (sum === k && start < nums.length) {
          count++
        }
      }
    }
  }
  return count
}

console.log("working", subarraySum([1], 0))
/// above solution only for positive number

// original solution //

var subarraySumHashMap = function (nums, k) {
  let map = new Map()
  let sum = 0
  let count = 0
  map.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (map.has(sum - k)) count += map.get(sum - k)
    if (map.has(sum)) map.set(sum, map.get(sum) + 1)
    else map.set(sum, 1)
  }
  return count
}
