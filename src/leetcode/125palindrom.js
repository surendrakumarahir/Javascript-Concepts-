var isPalindrome = function (s) {
  const replace = s.replace(/[^0-9a-z]/gi, "").toLowerCase()
  //   console.log(replace, replace.split("").reverse().join(""))
  const reversed = replace.toString().split("").reverse().join("")
  console.log(replace, reversed)
  return replace === reversed
}

console.log(isPalindrome("0P"))

// second solution

var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1
  while (left < right) {
    if (!isAlphaNumeric(s[left])) left++
    else if (!isAlphaNumeric(s[right])) right--
    else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
    else {
      left++
      right--
    }
  }
  return true
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0)
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  )
}
