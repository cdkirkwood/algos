var uniquePathsWithObstacles = function(obstacleGrid) {
  const pathsGrid = new Array(obstacleGrid.length).fill([])
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (obstacleGrid[i][j] === 1) pathsGrid[i][j] = 0
      else if (i === 0 && j === 0) pathsGrid[i][j] = 1
      else if (i === 0 && pathsGrid[i][j - 1] !== 0) pathsGrid[i][j] = 1
      else if (j === 0 && pathsGrid[i - 1][j] !== 0) pathsGrid[i][j] = 1
      else if (i === 0 || j === 0) pathsGrid[i][j] = 0
      else pathsGrid[i][j] = pathsGrid[i - 1][j] + pathsGrid[i][j - 1]
    }
  }
  const lastRow = pathsGrid[pathsGrid.length - 1]
  return lastRow[lastRow.length - 1]
};

console.log(uniquePathsWithObstacles([
  [0,0,0],
  [0,1,0],
  [0,0,0]
]))