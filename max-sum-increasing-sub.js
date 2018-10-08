function maxSumIncreasingSubsequence(array) {
  let returnArr = [array[0], [array[0]]]
  let sums = [array[0]]
  for (let i = 1; i < array.length; i++) {
    let curGreatest = array[i]
    sums[i] = -Infinity
    let curArr = []
    for (let j = 0; j < sums.length; j++) {
      let curSum = array[i] + sums[j]
        if (array[i] > array[j] && curSum > curGreatest ) {
          curArr.push(array[j])
          curGreatest = curSum
          sums[i] = curSum
      }
    }
    if (curGreatest > returnArr[0]) {
      returnArr[0] = curGreatest
      returnArr[1] = [...curArr, array[i]]
    }
  }
  return returnArr
}

console.log(maxSumIncreasingSubsequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]))


function iterativeLIS(sequence) {
  const lengths = new Array(sequence.length).fill(1);
  
  for (let i = 1; i < sequence.length; i++) {
    for (let j = 0; j < i; j++) {
      const isIncreasing = sequence[j] < sequence[i];
      const sequenceLength = lengths[j] + 1;
      const isLonger = sequenceLength > lengths[i];
      if (isIncreasing && isLonger) {
        lengths[i] = sequenceLength;
      }
    }
  }
  return Math.max(...lengths);
}

console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6]))
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50]))
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28]))