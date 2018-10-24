function uniquePaths(m, n) {
  const paths = new Array(n).fill(new Array(m))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === 0 || j === 0) paths[i][j] = 1
      else paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
    }
  }
  const lastRow = paths[paths.length - 1]
  return lastRow[lastRow.length - 1]
}

console.log(uniquePaths(7, 3))