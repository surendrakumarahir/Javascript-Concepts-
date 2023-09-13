/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let res = 0
  let l = 0
  let r = 0
  while (r < nums.length - 1) {
    let farthest = 0
    for (let i = l; i < r + 1; i++) {
      farthest = Math.max(farthest, i + nums[i])
    }
    l = r + 1
    r = farthest
    res++
  }
  return res
}

console.log(jump([2, 3, 1, 1, 4]))

//https://www.youtube.com/watch?v=dJ7sWiOoK7g
