const maxProfit1 = (prices) => {
  let maxCur = 0,
    max = 0
  for (let i = 1; i < prices.length; i++) {
    maxCur = Math.max(0, (maxCur += prices[i] - prices[i - 1]))
    max = Math.max(maxCur, max)
  }
  return max
}

const maxProfit = (prices) => {
  let min = prices[0]
  let profit = 0
  for (const num of prices) {
    profit = Math.max(profit, num - min)
    min = Math.min(num, min)
  }
  return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

