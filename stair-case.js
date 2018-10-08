function stepPerms(n, memo = {}) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    const twoBack = memo[n - 2] || stepPerms(n - 2, memo)
    const oneBack = memo[n - 1] || stepPerms(n - 1, memo)
    memo[n - 2] = twoBack
    memo[n - 1] = oneBack
    return twoBack + oneBack
  }
}

console.log(stepPerms(3))