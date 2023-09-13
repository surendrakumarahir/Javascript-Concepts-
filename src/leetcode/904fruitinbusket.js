/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0
  let right = 0
  let max = 0
  let mp = new Map()
  while (right < fruits.length) {
    mp.set(fruits[right], (mp.get(fruits[right]) || 0) + 1)
    if (mp.size < 2) {
      max = Math.max(max, right - left + 1)
      right++
    } else if (mp.size === 2) {
      max = Math.max(max, right - left + 1)
      right++
    } else if (mp.size > 2) {
      while (mp.size > 2) {
        mp.set(fruits[left], mp.get(fruits[left]) - 1)
        if (mp.get(fruits[left]) === 0) mp.delete(fruits[left])
        left++
      }
      right++
    }
  }

  return max
}

// console.log(totalFruit([0, 1, 2, 2]))
// console.log(totalFruit([1, 2, 3, 2, 2]))
// console.log(totalFruit([1, 2, 1]))
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))

// https://www.youtube.com/watch?v=seOKHXB_w74&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=12
