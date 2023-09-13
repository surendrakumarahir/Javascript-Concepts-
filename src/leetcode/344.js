var reverseString = function (s) {
  console.log(s.reverse())
  console.log(s)
}

reverseString(["h", "e", "l", "l", "o"])

/// without revesr function
// var reverseString = function (s) {
//   for (let start = 0, end = s.length - 1; start < end; start++) {
//     temp = s[start]
//     s[start] = s[end]
//     s[end] = temp
//     end--
//   }
//   return s
// }
