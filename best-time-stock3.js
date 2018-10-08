function maxProfit(prices) {
  if (!prices.length) return 0
  const topProfits = new Array(prices.length)
  const previousProfits = new Array(prices.length)
  topProfits[0] = 0
  for (let i = 1; i <= 2; i++) {
    let maxDiff = -prices[0]
    for (let j = 1; j < prices.length; j++) {
      topProfits[j] = Math.max(topProfits[j - 1], prices[j] + maxDiff)
      maxDiff = Math.max(maxDiff, topProfits[j - 1] - prices[j])
    }
  }
  console.log(topProfits)
  return topProfits[topProfits.length - 1]
}

console.log(maxProfit([3,3,5,0,0,3,1,4])) //6