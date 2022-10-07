var findLonelyPixel = function (grid) {
    let m = grid.length
    let n = grid[0].length
    let rows = Array.from({ length: m }, () => 0)
    let cols = Array.from({ length: n }, () => 0)

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'B') {
                rows[i] += 1
                cols[j] += 1
            }
        }
    }

    let c = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'B' && rows[i] === 1 && cols[j] === 1) {
                c++
            }
        }
    }

    return c
};

