/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 0) return false
  if (nums.length === 1) return true

  let maxIndexReach = 0
  let index = 0
  while (maxIndexReach < nums.length && index < nums.length) {
    let value = nums[index]
    maxIndexReach = Math.max(maxIndexReach, index + value)
    if (maxIndexReach >= nums.length - 1) {
      return true
    }
    index++
    if (index > maxIndexReach) {
      return false
    }
  }
  return false
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))

//https://www.youtube.com/watch?v=muDPTDrpS28

// another solution

var canJump = function (nums) {
  // Base condition...
  if (nums.length <= 1) return true
  // To keep the maximum index that can be reached...
  let maximum = nums[0]
  // Traverse all the elements through loop...
  for (let i = 0; i < nums.length; i++) {
    //if there is no way to jump to next...
    // so we should return false...
    if (maximum <= i && nums[i] == 0) return false
    //update the maximum jump...
    if (i + nums[i] > maximum) {
      maximum = i + nums[i]
    }
    //maximum is enough to reach the end...
    if (maximum >= nums.length - 1) return true
  }
  return false
}
