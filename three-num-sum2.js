function threeNumSum(array, targetSum) {
  const sortedArr = array.sort((num1, num2) => num1 - num2)
  const sums = []
  for (let i = 0; i < sortedArr.length; i++) {
    let left = i
    let right = sortedArr.length - 1
    let middle = left + 1
    while (middle < right) {
      const curSum = sortedArr[left] + sortedArr[middle] + sortedArr[right]
      if (curSum === targetSum) {
        sums.push([sortedArr[left], sortedArr[middle], sortedArr[right]])
        middle++
      }
      if (curSum < targetSum) middle++
      if (curSum > targetSum) right--
    }
  }
  return sums
}

console.log(threeNumSum([12, 3, 1, 2, -6, 5, -8, 6], 0))