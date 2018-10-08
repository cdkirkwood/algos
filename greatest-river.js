const bigIsland = matrix => {
  let islands = []
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (!matrix[y][x]) continue
      let currIslandSize = 1
      matrix[y][x] = 0
      currIslandSize += findIslandSize(matrix, y, x)
      islands.push(currIslandSize)
    }
  }
  return Math.max(...islands)
}
const findIslandSize = (matrix, y, x) => {
  let unitsLand = 0
  unitsLand += findAdjacentLand(matrix, y, x, unitsLand)
  return unitsLand
}
const findAdjacentLand = (matrix, y, x) => {
  let count = 0
  if (y > 0 && matrix[y - 1][x] === 1) {
    count++
    matrix[y - 1][x] = 0
    count += findAdjacentLand(matrix, y - 1, x, count)
  }
  if (y < matrix.length - 1 && matrix[y + 1][x] === 1) {
    count++
    matrix[y + 1][x] = 0
    count += findAdjacentLand(matrix, y + 1, x, count)
  }
  if (x > 0 && matrix[y][x - 1] === 1) {
    count++
    matrix[y][x - 1] = 0
    count += findAdjacentLand(matrix, y, x - 1, count)
  }
  if (x < matrix[y].length - 1 && matrix[y][x + 1] === 1) {
    count++
    matrix[y][x + 1] = 0
    count += findAdjacentLand(matrix, y, x + 1, count)
  }
  return count
}


