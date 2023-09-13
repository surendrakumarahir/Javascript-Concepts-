function majorityElement(arr) {
  let majority = Math.floor(arr.length / 2)
  if (arr.length < 2) return arr[0]
  let hashObj = {}

  for (let i = 0; i < arr.length; i++) {
    hashObj[arr[i]] = hashObj[arr[i]] || 0
    hashObj[arr[i]]++
    if (hashObj[arr[i]] > majority) {
      return arr[i]
    }
  }
  console.log(hashObj)
  return "no majority"
}

let arr = [1, 2, 1, 4, 1, 1, 2, 1, 1, 4, 4, 1]
let result = majorityElement(arr)
console.log(result)
