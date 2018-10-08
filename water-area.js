function waterArea(heights) {
  let tallest
  const waterLevels = new Array(heights.length)
  waterLevels.fill(0)
  for (let i = 0; i < heights.length; i++) {
    let level
    if (heights[i] === 0) continue
    if (!tallest) tallest = i
    for (let j = tallest; j < i; j++) {
      if (j === i - 1 || heights[j] === 0) continue
      if (heights[j] >= heights[i]) level = heights[i]
    }
    level = level ? level : Math.min(heights[tallest], heights[i])
    for (let k = tallest + 1; k < i; k++) {
      if (level > waterLevels[k] && level > heights[k]) waterLevels[k] = level - heights[k]
    }
    if (heights[i] >= heights[tallest]) tallest = i
  }
  return waterLevels.reduce((surfaceArea, height) => {
    return height + surfaceArea
  }, 0)
}

console.log(waterArea([0,8,0,0,5,0,0,10,0,0,1,1,0,3]))

console.log(waterArea([0,100,0,0,10,1,1,10,1,0,1,1,0,0]))