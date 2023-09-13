/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let start = 0
  let end = 0
  let maxArray = []
  let queue = []
  while (end < nums.length) {
    while (queue.length > 0 && queue[queue.length - 1] < nums[end]) {
      queue.pop()
    }
    queue.push(nums[end])

    if (end - start + 1 != k) {
      end++
    } else if (end - start + 1 === k) {
      maxArray.push(queue[0])
      if (queue[0] === nums[start]) {
        queue.shift()
      }
      start++
      end++
    }
  }
  return maxArray
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
