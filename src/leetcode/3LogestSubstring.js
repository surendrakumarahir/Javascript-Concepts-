/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let leftPointer = 0
  let rightPointer = 1
  let subString = s[0]
  let max = 1
  while (rightPointer < s.length) {
    if (subString.indexOf(s[rightPointer]) === -1) {
      subString += s[rightPointer]
      rightPointer++
      max = Math.max(max, subString.length)
    } else {
      leftPointer++
      subString = s[leftPointer]
      rightPointer = leftPointer + 1
    }
  }
  return max
}
