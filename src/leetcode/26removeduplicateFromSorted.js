function removeDuplicateFromSortedArray(arr) {
  let p1 = 0
  let p2 = 1
  while (p2 < arr.length) {
    if (arr[p1] === arr[p2]) {
      p2++
    } else {
      arr[p1 + 1] = arr[p2]
      p2++
      p1++
    }
  }
  //console.log(arr.slice(0, p1 + 1))
  return arr
}

console.log(removeDuplicateFromSortedArray([0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 4]))
