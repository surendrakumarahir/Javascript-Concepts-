/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let p1 = 0
  let p2 = 1
  let count = 0
  console.log("working")
  while (p2 < nums.length) {
    if (nums[p2] === nums[p2 + 1]) {
      p2 += 1
    } else {
      p1 += 1
      nums[p1] = nums[p2]
      p2++
    }
  }

  console.log("working", nums)
  return nums
}

console.log(removeDuplicates([(1, 1, 1, 2, 2, 3)]))
