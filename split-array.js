//Binary Search on possible solutions
function splitArray(nums, m) {
  let max = nums.reduce((total, elem) => total + elem, 0)
  let min = Math.max(...nums)

  while (min <= max) {
    const mid = Math.floor((max + min) / 2)
    const result = verifyTotal(nums, mid, m)
    if (result) max = mid - 1
    else min = mid + 1
  }
  return min
}

function verifyTotal(nums, target, splits) {
  let count = 1
  let total = 0
  for (let i = 0; i < nums.length; i++) {
    total += nums[i]
    if (total > target) {
      if (count === splits) return false
      total = nums[i]
      count++
    }
  }
  return true
}


//Does not work for large inputs
// var splitArray = function (nums, m) {
//   return helper(nums, m)
// };

// function helper(nums, numSplits, curSum = 0, largestSum = Infinity) {
//   if (numSplits <= 1) {
//     const subSum = nums.reduce((total, elem) => total + elem, 0)
//     curSum = Math.max(subSum, curSum)
//     return Math.min(largestSum, curSum)
//   }
//   for (let i = 0; i < nums.length - 1; i++) {
//     const putInPerm = nums.slice(0, i + 1)
//     const subSum = putInPerm.reduce((total, elem) => total + elem, 0)
//     curSum = Math.max(curSum, subSum)
//     if (curSum >= largestSum) return largestSum
//     const rest = nums.slice(i + 1)
//     const newSplit = numSplits - 1
//     const result = newSplit > 0 ? helper(rest, newSplit, curSum, largestSum) : Infinity
//     largestSum = Math.min(largestSum, result)
//   }
//   return largestSum
// }

console.log(splitArray([7, 2, 5, 10, 8], 2))