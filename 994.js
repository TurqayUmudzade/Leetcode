var orangesRotting = function (grid) {

    let m = grid.length
    let n = grid[0].length
    let q = []
    let fresh = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 2) q.push([i, j])
            else if (grid[i][j] == 1) fresh++
        }
    }

    if (fresh === 0) return 0;


    let minutes = 0
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    while (q.length > 0) {
        minutes++
        let len = q.length

        for (let i = 0; i < len; i++) {
            let [i, j] = q.shift()

            for (const [di, dj] of dirs) {
                let newI = i + di
                let newJ = j + dj
                if (newJ >= 0 && newI >= 0 && newI < m && newJ < n && grid[newI][newJ] === 1) {
                    grid[newI][newJ] = 2
                    q.push([newI, newJ])
                    fresh--
                }
            }
        }

    }


    return fresh == 0 ? minutes - 1 : -1
};

let grid = [[2, 2], [1, 1], [0, 0], [2, 0]]

console.log(orangesRotting(grid));
