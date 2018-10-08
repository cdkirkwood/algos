function diskStacking(disks) {
  const sortedDisks = disks.sort((first, second) => first[2] - second[2])
  let returnArr = [sortedDisks[0]]
  let maxHeight = sortedDisks[0][2]
  let arrayOfTallest = [[sortedDisks[0]]]
  for (let i = 1; i < sortedDisks.length; i++) {
    let localArr = [sortedDisks[i]]
    let localMax = sortedDisks[i][2]
    for (let j = 0; j < i; j++) {
      const tallestStackAtIndex = arrayOfTallest[j]
      const bottomOfStack = tallestStackAtIndex[tallestStackAtIndex.length - 1]
      if (stackAble(bottomOfStack, sortedDisks[i])) {
        let curMax = tallestStackAtIndex.reduce((acc, curArr) => {
          acc += curArr[2]
          return acc
        }, 0)
        curMax += sortedDisks[i][2]
        if (curMax > localMax) {
          localArr = [...arrayOfTallest[j], sortedDisks[i]]
          localMax = curMax
        }
      }
    }
    arrayOfTallest[i] = localArr
    if (localMax > maxHeight) {
      maxHeight = localMax
      returnArr = localArr
    }
  }
  return returnArr
}

function stackAble(diskInStack, curDisk) {
  return diskInStack[0] < curDisk[0] && diskInStack[1] < curDisk[1] && diskInStack[2] < curDisk[2]
}

console.log(diskStacking([[2, 1, 2], [3, 2, 5], [2, 2, 8], [2, 3, 4], [2, 2, 1], [4, 4, 5]]))