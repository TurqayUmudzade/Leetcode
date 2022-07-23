var maxSubArray = function (arr) {
    let dp = new Array(arr.length)
    dp[0] = arr[0]
    let max = dp[0]
    for (let i = 1; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
        max = Math.max(max, dp[i])
    }
    return max
};
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums));
