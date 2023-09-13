function removeElement(arr, value) {
  let p1 = 0
  let i = 0
  let count = 0
  while (i < arr.length) {
    if (arr[i] !== value) {
      arr[p1] = arr[i]
      p1++
    } else {
      count++
    }
    i++
  }
  console.log(arr)
  arr.splice(arr.length - count, count)
  console.log(arr)
}

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
removeElement([3, 2, 2, 3], 3)
