var maximalNetworkRank = function (n, roads) {
    const count = Array(n).fill(0);

    const mat = Array(n)
        .fill(null)
        .map(() => Array(n).fill(false));

    roads.forEach(([a, b]) => {
        mat[a][b] = true;
        mat[b][a] = true;

        count[a]++;
        count[b]++;
    });

    let res = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let aux = count[i] + count[j] - (mat[i][j] ? 1 : 0);
            res = Math.max(aux, res);
        }
    }

    return res;
};

let n = 4, roads = [[0, 1], [0, 3], [1, 2], [1, 3]]
// let n = 2, roads = [[0, 1]]

console.log(maximalNetworkRank(n, roads));