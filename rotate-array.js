var rotate = function(nums, k) {
  const removedElems = nums.splice(nums.length - k - 1, k)
  return [...removedElems, ...nums]
}