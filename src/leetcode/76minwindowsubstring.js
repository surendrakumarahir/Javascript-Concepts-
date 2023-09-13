/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return ""

  const neededChars = {}

  for (let char of t) {
    neededChars[char] = (neededChars[char] || 0) + 1
  }

  let left = 0
  let right = 0
  let neededLength = Object.keys(neededChars).length
  let substring = ""

  while (right < s.length) {
    const rightChar = s[right]
    neededChars[rightChar]--
    if (neededChars[rightChar] === 0) neededLength--

    while (neededLength === 0) {
      if (!substring || substring.length > right - left + 1) {
        substring = s.slice(left, right + 1)
      }

      const leftChar = s[left]
      // If the leftChar in charMap is at exactly 0 before being
      // incremented, we now need more leftChars so that its count
      // in charMap goes down to exactly 0
      console.log("leftChar", leftChar)
      console.log("neededChars", neededChars, neededLength)

      if (neededChars[leftChar] === 0) {
        neededLength++
      }
      neededChars[leftChar]++
      left++
    }

    right++
  }

  return substring
}

console.log(minWindow("ADOBECODEBANC", "ABC"))
// need to do next time , take more time to understand
