/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (t.length < s.length) {
    return false
  }
  let i = 0
  let sPointer = 0
  while (i <= t.length) {
    if (t[i] === s[sPointer]) {
      i++
      sPointer++
    } else {
      i++
    }
    if (sPointer >= s.length) {
      return true
    }
  }
  return false
}

console.log(isSubsequence("aec", "abcdef"))
