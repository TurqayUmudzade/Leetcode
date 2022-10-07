var numEnclaves = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let flag = true
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const dfs = (i, j, size = 1) => {
        grid[i][j] = 0
        if (i === m - 1 || j === n - 1 || i === 0 || j == 0) {
            flag = false
        }
        for (const [di, dj] of dirs) {
            let newI = i + di
            let newJ = j + dj
            if (newI >= 0 && newJ >= 0 && newI < grid.length && newJ < grid[0].length && grid[newI][newJ] == 1) {
                return dfs(newI, newJ, size + 1)
            }
        }
        return flag ? size : 0
    }

    let c = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                flag = true
                let temp = dfs(i, j)
                if (temp) {
                    console.table(grid);
                    console.log(i, j, temp);
                    c = Math.max(c, temp)
                }
            }
        }
    }
    return c
};

let grid = [
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]]
console.log(numEnclaves(grid));