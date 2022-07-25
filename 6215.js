var equalPairs = function (grid) {
    let n = grid.length
    let rows = new Map()
    for (let i = 0; i < n; i++) {
        let s = ""
        for (let j = 0; j < n; j++) {
            s += grid[i][j];
        }
        rows.set(s, (rows.get(s) || 0) + 1)
    }

    let cols = new Map()
    for (let i = 0; i < n; i++) {
        let s = ""
        for (let j = 0; j < n; j++) {
            s += grid[j][i];
        }
        cols.set(s, (cols.get(s) || 0) + 1)
    }

    let ans = 0
    for (const [key, val] of rows.entries()) {
        if (cols.has(key)) {
            ans += cols.get(key)
        }
    }
    let ans2 = 0
    for (const [key, val] of cols.entries()) {
        if (rows.has(key)) {
            ans2 += rows.get(key)
        }
    }


    return Math.max(ans, ans2)
};

let grid = [[13, 13], [13, 13]]

// grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
console.log(equalPairs(grid));