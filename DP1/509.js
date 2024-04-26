var fib = function (n = 4) {
    let memo = new Map()
    memo.set(0, 0)
    memo.set(1, 1)
    const dfs = (n) => {
        if (memo.has(n)) return memo.get(n)
        memo.set(n, dfs(n - 1) + dfs(n - 2))
        return memo.get(n)
    }
    dfs(n)
    return memo.get(n)
};