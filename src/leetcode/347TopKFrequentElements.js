/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   let myMap = new Map()
//   for (let i = 0; i < nums.length; i++) {
//     if (!myMap.get(nums[i])) {
//       myMap.set(nums[i], 1)
//     } else {
//       myMap.set(nums[i], myMap.get(nums[i]) + 1)
//     }
//   }

//   let arrayKey = [...myMap.entries()].sort((a, b) => b[1] - a[1])

//   let result = []
//   for (let i = 0; i < k; i++) {
//     result.push(arrayKey[i][0])
//   }
//   return result
// }

// console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2))

/// best solution using bucket sort

var topKFrequentOptimal = function (nums, k) {
  const freqMap = new Map()
  const bucket = []
  const result = []

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  }

  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num)
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i])
    if (result.length === k) break
  }
  return result
}

console.log(topKFrequentOptimal([4, 1, -1, 2, -1, 2, 3], 2))
