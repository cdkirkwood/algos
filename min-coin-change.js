function greedyMinNumberOfCoinsForChange(n, denoms) {
  let count = 0
  for (let i = denoms.length - 1; i >= 0; i--) {
    count += Math.floor(n / denoms[i])
    n %= denoms[i]
  }
  return count
}

function minNumberOfCoinsForChange(n, denoms, memo = {}) {
  if (n === 0) return 0
  if (n < 0) return -1
  if (memo.hasOwnProperty(n)) return memo[n]
  let minimum = -1
  for (let i = 0; i < denoms.length; i++) {
    const possibleMin = minNumberOfCoinsForChange(n - denoms[i], denoms, memo)
    if (possibleMin !== -1) {
      if (minimum === -1) minimum = possibleMin + 1
      else minimum = Math.min(minimum, possibleMin + 1)
    }
  }
  memo[n] = minimum
  return minimum
}


console.log(minNumberOfCoinsForChange(3, [2, 1]))