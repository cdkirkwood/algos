var trap = function (height) {
  let waterLevels = new Array(height.length).fill(0)
  let leftWallIdx = 0
  for (let i = 1; i < height.length; i++) {
    const curHeight = height[i]
    const heightOfLeft = height[leftWallIdx]
    if (i > leftWallIdx + 1) {
      const smallerheight = Math.min(curHeight, heightOfLeft)
      for (let j = leftWallIdx + 1; j < i; j++) {
        if (smallerheight > height[j]) {
          const newPossibleHeight = smallerheight - height[j]
          waterLevels[j] = Math.max(waterLevels[j], newPossibleHeight)
        }
      }
      if (heightOfLeft <= curHeight) leftWallIdx = i
    } else if (curHeight >= heightOfLeft) {
      leftWallIdx = i
    }
  }
  return waterLevels.reduce((sum, elem) => sum + elem, 0)
}

console.log(trap([3,9,2,2,8,8,7,3]))