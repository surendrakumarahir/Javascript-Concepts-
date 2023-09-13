var containsNearbyDuplicate = function (nums, k) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    //  console.log(obj);
    if (obj[nums[i]] >= 0 && i - obj[nums[i]] <= k) {
      // console.log("exit", obj[nums[i]], i);
      // console.log(k)
      //  if(() {
      // console.log("return ture");
      return true
      //  } else {
      //      obj[nums[i]] = i;
      //  }
    } else {
      obj[nums[i]] = i
    }
  }
  return false
}
