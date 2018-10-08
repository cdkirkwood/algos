function missingNumber(nums) {
  const givenNums = new Set(nums)
  for (let i = 0; i <= nums.length; i++) {
    if (!givenNums.has(i)) return i
  }
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))