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