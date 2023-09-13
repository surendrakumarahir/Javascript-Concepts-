function mergeShortedArray(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      k--
      i--
    } else {
      nums1[k] = nums2[j]
      k--
      j--
    }
  }

  return nums1
}

console.log(mergeShortedArray([1, 4, 5, 9, 13], 5, [0, 3, 7, 9, 13, 17], 6))
