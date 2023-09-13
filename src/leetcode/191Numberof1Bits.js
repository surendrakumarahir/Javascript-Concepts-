/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let num_of_1s = 0

  for (let i = 0; i < 32; i++) {
    num_of_1s += n & 1

    n >>= 1
  }

  return num_of_1s
}

console.log("hammingWeight", hammingWeight(00000000000000000000000000001011))
