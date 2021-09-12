

const maxProfit = prices => {
    let maxCur = 0, max = 0;
    for (let i = 1; i < prices.length; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]);
        max = Math.max(maxCur, max);
    }
    return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));


