function riverSizers (matrix) {
  const riversArr = []
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x]) {
        matrix[y][x] = 0
        const result = findRiverSize(y, x, matrix)
        if (result) riversArr.push(result)
      }
    }
  }

  return riversArr
}

function findRiverSize(yCoord, xCoord, matrix) {
  let size = 1
  if (getRightVal(yCoord, xCoord, matrix)) {
    size += findRiverSize(yCoord, xCoord + 1, matrix)
  }
  if (getLeftVal(yCoord, xCoord, matrix)) {
    size += findRiverSize(yCoord, xCoord - 1, matrix)
  }
  if (getTopVal(yCoord, xCoord, matrix)) {
    size += findRiverSize(yCoord + 1, xCoord, matrix)
  }
  if (getBottomVal(yCoord, xCoord, matrix)) {
    size += findRiverSize(yCoord - 1, xCoord, matrix)
  }
  return size
}

function getRightVal(yCoord, xCoord, matrix) {
  if (matrix[yCoord][xCoord + 1]) {
    matrix[yCoord][xCoord + 1] = 0
    return 1
  }
  return 0
}

function getLeftVal(yCoord, xCoord, matrix) {
  if (matrix[yCoord][xCoord - 1]) {
    matrix[yCoord][xCoord - 1] = 0
    return 1
  }
  return 0
}

function getTopVal(yCoord, xCoord, matrix) {
  if (matrix[yCoord + 1] && matrix[yCoord + 1][xCoord]) {
    matrix[yCoord + 1][xCoord] = 0
    return 1
  }
  return 0
}

function getBottomVal(yCoord, xCoord, matrix) {
  if (matrix[yCoord - 1] && matrix[yCoord - 1][xCoord]) {
    matrix[yCoord - 1][xCoord] = 0
    return 1
  }
  return 0
}

console.log(riverSizers([
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
]))