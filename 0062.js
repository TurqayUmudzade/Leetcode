var uniquePaths = function (m, n) {

    let memo = new Array(n + 1).fill(new Array(m + 1))
    let dfs = (i, j) => {
        if (m < i || j > n) return 0
        if (m === i && j === n) return 1
        if (memo[i][j]) return memo[i][j]
        memo[i][j] = dfs(i + 1, j) + dfs(i, j + 1)

    }
    return dfs(1, 1)
};