var threeSum = function(nums) {
  const sums = [[nums[0], nums[0]]]
  const solutionTable = {}
  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i]
    const sumsLength = sums.length
    sums.push([curNum, curNum])
    for (let j = 0; j < sumsLength; j++) {
      const curSumArr = sums[j]
      if (curSumArr.length === 4) continue
      if (curSumArr.length === 3 && curSumArr[0] + curNum === 0) {
        const product = curSumArr[1] * curSumArr[2] * curNum
        if (solutionTable[product] === undefined) {
          const solutionArr = [...curSumArr.slice(1), curNum]
          solutionTable[product] = solutionArr
        }
      } else {
        const newSum = curSumArr[0] + curNum
        const newArr = [newSum, ...curSumArr.slice(1), curNum]
        sums.push(newArr)
      }
    }
  }
  return Object.values(solutionTable)
}

console.log(threeSum([3,0,-2,-1,1,2]))