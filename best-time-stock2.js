//cleaner solution

function maxProfit(prices) {
  let topProfit = 0
  for (let i = 1; i < prices.length; i++) {
    const curDiff = prices[i] - prices[i - 1]
    if (curDiff > 0) {
      topProfit += curDiff
    }
  }
  return topProfit
}

/*
function maxProfit(prices) {
  let topProfit = 0
  for (let i = 0; i < prices.length; i++) {
    const curPrice = prices[i]
    const nextPrice = prices[i + 1]
    if (curPrice >= nextPrice) continue
    else {
      let curBuyIdx = i + 1
      let nextBuyIdx = curBuyIdx + 1
      while (prices[curBuyIdx] <= prices[nextBuyIdx]) {
        curBuyIdx++
        nextBuyIdx++
      }
      if (prices[curBuyIdx] !== undefined) topProfit += prices[curBuyIdx] - curPrice
      i = curBuyIdx
    }

  }
  return topProfit
}
*/

console.log(maxProfit([7,1,5,3,6,4]))