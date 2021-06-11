var maxProfit = function (prices) {
  let profit = 0;
  let min = Number.MAX_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];
    else profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

let arr = [1, 2];

console.log(maxProfit(arr));
