var shortestPath = function (grid, k) {
    const m = grid.length
    const n = grid[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let set = new Set(["0,0," + k])
    let step = 0
    let q = [[0, 0, k]];

    while (q.length) {
        let len = q.length
        while (len--) {
            let [i, j, remainingK] = q.shift()
            if (i === m - 1 && j === n - 1) return step

            for (const [dx, dy] of dirs) {
                let newI = dx + i, newJ = dy + j

                if (newI < 0 || newJ < 0 || newI >= m || newJ >= n ||
                    (grid[newI][newJ] === 1 && remainingK === 0)) continue;

                let newK = grid[newI][newJ] === 1 ? remainingK - 1 : remainingK;
                let key = newI + "," + newJ + "," + newK
                if (!set.has(key)) {
                    q.push([newI, newJ, newK])
                    set.add(key)
                }
            }
        }
        step++;
    }

    return -1;
};

let grid = [[0, 1, 1], [1, 1, 1], [1, 0, 0]], k = 1

console.log(shortestPath(grid, k));