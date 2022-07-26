var rob = function (nums) {
    let memo = new Map()
    let dfs = (i) => {
        if (i >= nums.length) return 0
        if (memo.has(i)) return memo.get(i)
        let max = Math.max(dfs(i + 1), dfs(i + 2) + nums[i])
        memo.set(i, max)
        return max
    }
    return dfs(0)
};


function rob(arr) {
    let dp = new Array(arr.length)
    dp[0] = arr[0]
    dp[1] = Math.max(arr[1], arr[0])
    for (let i = 2; i < arr.length; i++)
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i])
    return dp[arr.length - 1]
}


const rob = (arr) => {
    let robNextPlusOne = 0;
    let robNext = nums[N - 1];

    for (let i = arr.length - 2; i >= 0; --i) {
        let current = Math.max(robNext, robNextPlusOne + nums[i]);
        robNextPlusOne = robNext;
        robNext = current;
    }

    return robNext;
}


