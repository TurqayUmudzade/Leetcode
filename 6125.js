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

    let ans = Math.max(...rows.values())


    let ans2 = Math.max(...cols.values())



    return ans * ans2
};


let grid = [[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]
console.log(equalPairs(grid));