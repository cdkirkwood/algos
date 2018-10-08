function numIslands(grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        killNeighbors(grid, i, j)
        count++
      }
    }
  }
  return count
}

function killNeighbors(grid, yCord, xCord) {
  grid[yCord][xCord] = 0
  if (grid[yCord - 1] && grid[yCord - 1][xCord]) killNeighbors(grid, yCord - 1, xCord)
  if (grid[yCord + 1] && grid[yCord + 1][xCord]) killNeighbors(grid, yCord + 1, xCord)
  if (grid[yCord][xCord - 1]) killNeighbors(grid, yCord, xCord - 1)
  if (grid[yCord][xCord + 1]) killNeighbors(grid, yCord, xCord + 1)
}

const grid1 = [
  [1,1,1,1,0],
  [1,1,0,1,0],
  [1,1,0,0,0],
  [0,0,0,0,0]
]

console.log(numIslands(grid1))