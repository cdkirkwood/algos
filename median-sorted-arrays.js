var findMedianSortedArrays = function(nums1, nums2) {
    let left = 0
    let right = 0
    let curVal = Math.min(nums1[0], nums2[0])
    let previousVal = curVal
    const fullLength = nums1.length + nums2.length
    const midpoint = Math.ceil(fullLength / 2)
    while (left + right < midpoint + 1) {
      const leftVal = nums1[left]
      const rightVal = nums2[right]
      if (leftVal <= rightVal || rightVal === undefined) {
        previousVal = curVal
        curVal = leftVal
        left++
      } else {
        previousVal = curVal
        curVal = rightVal
        right++
      }
    }
    return fullLength % 2 ? previousVal : (curVal + previousVal) / 2
}

console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
