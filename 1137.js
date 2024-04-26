var tribonacci = function (n) {
    let memo = new Map()
    memo.set(0, 0)
    memo.set(1, 1)
    const dfs = (n) => {
        if (n < 0) return 0
        if (memo.has(n)) return memo.get(n)
        memo.set(n, dfs(n - 1) + dfs(n - 2) + dfs(n - 3))
        return memo.get(n)
    }
    dfs(n)
    return memo.get(n)
};