var updateMatrix = function (matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let q = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) q.push([i, j, 0]);
            else matrix[i][j] = Infinity;
        }
    }

    let dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    while (q.length > 0) {
        let [i, j, val] = q.shift();

        if (matrix[i][j] > val) matrix[i][j] = val;


        for (const [di, dj] of dir) {
            let next = [i + di, j + dj, val + 1];
            if (next[0] > -1 && next[0] < m && next[1] > -1 && next[1] < n) {
                if (matrix[next[0]][next[1]] === Infinity) {
                    q.push(next);
                }
            }
        }


    }
    return matrix;
};