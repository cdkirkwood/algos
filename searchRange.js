function searchRange(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const leftVal = nums[left]
    const rightVal = nums[right]
    const midVal = nums[mid]
    if (midVal === target) {
      let prevIdx = mid - 1
      let nextIdx = mid + 1
      let finalLeftIdx = mid
      let finalRightIdx = mid
      if (nums[prevIdx] === target) {
        while (target === nums[prevIdx]) prevIdx--
        finalLeftIdx = prevIdx + 1
      }
      if (nums[nextIdx] === target) {
        while (target === nums[nextIdx]) nextIdx++
        finalRightIdx = nextIdx - 1
      }
      return [finalLeftIdx, finalRightIdx]
    }
    if (midVal < target) {
      left = mid + 1
    }
    else {
      right = mid - 1
    }
  }

  return [-1, -1]
}

console.log(searchRange([1, 1, 2], 1))