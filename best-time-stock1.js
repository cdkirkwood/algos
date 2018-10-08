function maxProfit(prices) {
  let topProfit = 0
  let lowest = prices[0]
  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i]
    if (curPrice <= lowest) {
      lowest = curPrice
      continue
    } else {
      topProfit = Math.max(topProfit, curPrice - lowest)
    }
  }
  return topProfit
}

console.log(maxProfit([7, 1, 4, 6]))