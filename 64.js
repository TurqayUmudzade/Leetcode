var minPathSum = function (grid) {

    let m = grid.length
    let n = grid[0].length
    let dirs = [[0, 1], [1, 0]]
    let memo = new Map()
    memo.set((m - 1) + ',' + (n - 1), grid[m - 1][n - 1])
    const dfs = (i, j, cost) => {
        if (memo.has(i + ',' + j)) return memo.get(i + ',' + j)

        let min = Number.MAX_SAFE_INTEGER;

        for (const [di, dj] of dirs) {
            let newI = di + i
            let newJ = dj + j
            if (newI >= 0 && newJ >= 0 && newI < m && newJ < n) {
                let temp = dfs(newI, newJ, cost + grid[di][dj])
                min = Math.min(min, temp)
            }
        }
        memo.set(i + ',' + j, min + grid[i][j])
        return memo.get(i + ',' + j)
    }

    return dfs(0, 0, grid[0][0])
};




let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

console.log(minPathSum(grid));