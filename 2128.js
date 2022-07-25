var removeOnes = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let rowOne = grid[0]

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][0] === rowOne[0]) {
                if (grid[i][j] !== rowOne[j])
                    return false
            } else {
                if (grid[i][j] === rowOne[j])
                    return false
            }

        }
    }
    return true
};