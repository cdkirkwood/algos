// var minPathSum = function(grid) {
//   let yCord = 0
//   let xCord = 0
//   let bestSum = Infinity
//   let curSum = 0
//   return findAllPaths(grid, yCord, xCord, bestSum, curSum)
// };

// function findAllPaths(grid, yCord, xCord, bestSum, curSum) {
//   curSum += grid[yCord][xCord]
//   if (yCord === grid.length - 1 && xCord === grid[yCord].length - 1) {
//     return Math.min(bestSum, curSum)
//   }
//   if (grid[yCord][xCord + 1] !== undefined) {
//     bestSum = Math.min(findAllPaths(grid, yCord, xCord + 1, bestSum, curSum), bestSum)
//   }
//   if (grid[yCord + 1]) {
//     bestSum = Math.min(findAllPaths(grid, yCord + 1, xCord, bestSum, curSum), bestSum)
//   }
//   return bestSum
// }

var minPathSum = function(grid) {
  const topY = grid.length
  const topX = grid[0].length
  for (let y = 0; y < topY; y++) {
    for (let x = 0; x < topX; x++) {
      if (x === 0 && y > 0) grid[y][x] += grid[y - 1][x]
      if (y === 0 && x > 0) grid[y][x] += grid[y][x - 1]
      if (x > 0 && y > 0) grid[y][x] += Math.min(grid[y - 1][x], grid[y][x - 1])
    }
  }
  return grid[topY - 1][topX - 1]
};

const grid1 = [
  [1,2,3],
  [1,2,4],
  [5,2,1]
]

const grid2 = [
  [1,2],
  [1,1]
]
console.log(minPathSum(grid2))