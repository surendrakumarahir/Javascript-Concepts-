/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let compareString = strs[0]
  let result = ""
  for (let i = 0; i < strs.length; i++) {
    // let newString = strs[i];
    for (let j = 0; j < strs[i].length; j++) {
      if (compareString[j] === strs[i][j]) {
        result += compareString[j]
      } else {
        break
      }
    }
    if (compareString.length > result.length) {
      compareString = result
    }
    result = ""
  }
  return compareString
}

console.log("console", longestCommonPrefix(["ab", "a"]))

// second solution
// better solution

// var longestCommonPrefix = function (strs) {
//   "use strict"
//   if (strs === undefined || strs.length === 0) {
//     return ""
//   }

//   return strs.reduce((prev, next) => {
//     let i = 0
//     while (prev[i] === next[i]) i++
//     return prev.slice(0, i)
//   })
// }
