function findShortestPath(rowSize, colSize, area) {
  let shortestPath = Infinity
  const result = findPathSize(0, 0, area)
  shortestPath = Math.min(shortestPath, result)
  return shortestPath
}

function findPathSize(yCoord, xCoord, area) {
  const right = getRightVal(yCoord, xCoord, area)
  const left = getLeftVal(yCoord, xCoord, area)
  const top = getTopVal(yCoord, xCoord, area)
  const bottom = getBottomVal(yCoord, xCoord, area)
  if (right) {
    if (right === 9) {
      return 1
    }
    return 1 + findPathSize(yCoord, xCoord + 1, area)
  }
  if (left) {
    if (left === 9) return 1
   return 1 + findPathSize(yCoord, xCoord - 1, area)
  }
  if (top) {
    if (top === 9) return 1
    return 1 + findPathSize(yCoord + 1, xCoord, area)
  }
  if (bottom) {
    if (bottom === 9) return 1
    return 1 + findPathSize(yCoord - 1, xCoord, area)
  }
  return 0
}

function getRightVal(yCoord, xCoord, area) {
  if (area[yCoord] && area[yCoord][xCoord + 1]) {
    const val = area[yCoord][xCoord + 1]
    area[yCoord][xCoord + 1] = 0
    return val
  }
  return 0
}

function getLeftVal(yCoord, xCoord, area) {
  if (area[yCoord] && area[yCoord][xCoord - 1]) {
    const val = area[yCoord][xCoord - 1]
    area[yCoord][xCoord - 1] = 0
    return val
  }
  return 0
}

function getBottomVal(yCoord, xCoord, area) {
  if (area[yCoord + 1] && area[yCoord + 1][xCoord]) {
    const val = area[yCoord + 1][xCoord]
    area[yCoord + 1][xCoord] = 0
    return val
  }
  return 0
}

function getTopVal(yCoord, xCoord, area) {
  if (area[yCoord - 1] && area[yCoord - 1][xCoord]) {
    const val = area[yCoord - 1][xCoord]
    area[yCoord - 1][xCoord] = 0
    return val
  }
  return 0
}

console.log(findShortestPath(3, 3, [
  [1, 1, 1],
  [1, 0, 1],
  [1, 9, 1]
]))