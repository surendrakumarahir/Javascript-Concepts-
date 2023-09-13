/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let lastLength = 0
  let foundSpace = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (foundSpace == true) {
        lastLength = 1
        foundSpace = false
      } else {
        lastLength += 1
      }
    } else {
      foundSpace = true
    }
  }
  return lastLength
}

//// second

var lengthOfLastWord = function (s) {
  s = s.trim()
  let lastIndex = s.lastIndexOf(" ")
  if (lastIndex === -1) {
    return s.length
  }
  return s.length - lastIndex - 1
}

/// third
var lengthOfLastWord = function (s) {
  let trimmedString = s.trim()

  return trimmedString.length - trimmedString.lastIndexOf(" ") - 1
}
