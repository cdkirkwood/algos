var maxIncreaseKeepingSkyline = function(grid) {
  let totalIncrease = 0
  const rowMaxs = []
  const colMaxs = []
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (!rowMaxs[y]) rowMaxs[y] = grid[y][x]
      else rowMaxs[y] = Math.max(rowMaxs[y], grid[y][x])
      if (!colMaxs[x]) colMaxs[x] = grid[y][x]
      else colMaxs[x] = Math.max(colMaxs[x], grid[y][x])
    }
  }

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      totalIncrease += Math.min(rowMaxs[y], colMaxs[x]) - grid[y][x]
    }
  }
  return totalIncrease
};


// var maxIncreaseKeepingSkyline = function(grid) {
//   let totalIncrease = 0
//   for (let y = 0; y < grid.length; y++) {
//     const row = grid[y]
//     const rowMax = Math.max(...row)
//     for (let x = 0; x < row.length; x++) {
//       const col = []
//       for (let i = 0; i < grid.length; i++) {
//         col.push(grid[i][x])
//       }
//       const colMax = Math.max(...col)
//       const maxHeight = Math.min(colMax, rowMax)
//       totalIncrease += maxHeight - grid[y][x]
//     }
//   }
//   return totalIncrease
// };