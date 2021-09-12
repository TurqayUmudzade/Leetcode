var countNegatives = function (grid) {
    let n = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) n++
        }
    }
    return n
};