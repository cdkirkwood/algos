var smallestRange = function(nums) {
  const pointers = new Array(nums.length).fill(0)
  let smallestRangeArr
  let smallestRangeVal = Infinity
  let keepLooping = true
    while (keepLooping) {
      let localMin = Infinity
      let localMax = -Infinity
      let localMinIdx
      for (let j = 0; j < nums.length; j++) {
        if (nums[j][pointers[j]] <= localMin) {
          localMin = nums[j][pointers[j]]
          localMinIdx = j
        }
        localMax = Math.max(nums[j][pointers[j]], localMax)
      }
      const localRange = localMax - localMin
      if (smallestRangeVal > localRange) {
        smallestRangeVal = localRange
        smallestRangeArr = [localMin, localMax]
      }
      if (pointers[localMinIdx] === nums[localMinIdx].length - 1) keepLooping = false
      else pointers[localMinIdx]++
    }
  return smallestRangeArr
};

console.log(smallestRange([[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]))