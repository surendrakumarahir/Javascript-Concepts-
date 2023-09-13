/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let sums = nums.reduce((acc, item) => acc + item, 0)
  let count = 0
  let remaning = sums
  for (let i = 0; i < nums.length; i++) {
    count = count + nums[i]
    if (count === remaning) {
      return i
    } else {
      remaning = sums - count
    }
  }
  return -1
}

//console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
