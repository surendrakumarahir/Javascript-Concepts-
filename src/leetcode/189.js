// function stringRotate(str, k) {
//   let rotation = k % str.length
//   return str.slice(str.length - rotation) + str.slice(0, str.length - rotation)
// }
// console.log(stringRotate("1234567", 8))

/// rotate string

// rotate Array

//[1,2,3,4,5,6,7]

function arrayRotate(arr, k) {
  let rotation = k % arr.length
  //   console.log(arr.splice(arr.length - rotation, arr.length))
  //   console.log(arr)
  arr.unshift(...arr.splice(arr.length - rotation, arr.length))
  return arr
  //  return str.slice(str.length - rotation) + str.slice(0, str.length - rotation)
}
console.log(arrayRotate([1, 2, 3, 4, 5, 6, 7], 2))
