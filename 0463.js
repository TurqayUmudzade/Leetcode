/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let n = grid.length;
    let m = grid[0].length;
    let p = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                p += 4
                if (i > 0 && grid[i - 1][j] == 1) p--
                if (j > 0 && grid[i][j - 1] == 1)p--
                if (i < n - 1 && grid[i + 1][j] == 1) p--
                if (j < m - 1 && grid[i][j + 1] == 1) p--
            }
        }

    }
    return p
};
