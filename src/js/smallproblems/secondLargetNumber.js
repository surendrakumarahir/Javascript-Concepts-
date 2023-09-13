let arr = [2, 3, 4, 6, 11, 3, 4, 9, 12]

function secondLarget(arr) {
  let max = -Infinity
  let secondMax = -Infinity

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max
      max = arr[i]
    } else {
      if (arr[i] > secondMax) {
        secondMax = arr[i]
      }
    }
  }

  return [max, secondMax]
}

const [max, secondMax] = secondLarget(arr)

console.log(max, secondMax)
