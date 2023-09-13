/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.toString().replace(/\s+/g, " ").trim().split(" ").reverse().join(" ")
}

console.log(reverseWords("the sky is blue"))

// without regular expression
var reverseWordsNew = function (s) {
  let arr = s.trim().split(" ")
  let reverseStr = ""
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == "") continue
    reverseStr += arr[i]
    if (i !== 0) reverseStr += " "
  }
  return reverseStr
}

console.log(reverseWordsNew("the sky is blue"))
