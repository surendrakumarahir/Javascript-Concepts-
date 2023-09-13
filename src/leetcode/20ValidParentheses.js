/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      c === "(" && stack.push(")")
      c === "{" && stack.push("}")
      c === "[" && stack.push("]")
    } else {
      if (c === stack[stack.length - 1]) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

console.log(isValid("()[]{}"))
