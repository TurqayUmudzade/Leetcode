var uniquePaths = function (m, n) {
    let memo = new Map()
    let helper = (x, y) => {
        if (x > m || y > n) return 0
        if (x == m && y == n) return 1
        if (!memo.has(x + "/" + y)) memo.set(x + "/" + y, helper(x + 1, y) + helper(x, y + 1))
        return memo.get(x + "/" + y)
    }
    return helper(1, 1)
};