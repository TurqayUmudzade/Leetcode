const coinChange = (coins, amount) => {
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(
                    dp[i],
                    dp[i - coin] + 1,
                );
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};

var coinChange = function (coins, amount) {
    const memo = new Map();

    function dfs(amountLeft) {
        if (memo.has(amountLeft)) return memo.get(amountLeft)

        if (amountLeft === 0) return 0;

        let min = Infinity;

        for (let coin of coins) {
            if (amountLeft - coin >= 0) min = Math.min(min, dfs(amountLeft - coin));
        }
        memo.set(amountLeft, min + 1);
        return min + 1;
    }
    const minSteps = dfs(amount);
    return minSteps === Infinity ? -1 : minSteps;
};

