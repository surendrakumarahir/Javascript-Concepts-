/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = null
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] === target) {
      return mid
    }
  }
  if (left > right) return left
  return mid
}

console.log("result", searchInsert([1, 3, 5, 6], 7))
//https://leetcode.com/problems/search-insert-position/solutions/423166/binary-search-101/?envType=study-plan-v2&envId=top-interview-150
