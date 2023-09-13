/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // Initialize the unique number...
  let uniqNum = 0
  // TRaverse all elements through the loop...
  for (let idx = 0; idx < nums.length; idx++) {
    // Concept of XOR...
    uniqNum = uniqNum ^ nums[idx]
  }
  return uniqNum // Return the unique number...
}

console.log("single Number", singleNumber([4, 1, 2, 1, 2]))

// 4^1^2^1^2 ==> 4 => 4^(1^1)^(2^2) => 4^(0)^(0) = 4^0 => 4
