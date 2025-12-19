// var findCircleNum = function (M) {

//     class UnionFind {
//         constructor(n) {
//             this.graph = [...Array(n)].map((_, i) => i);
//             this.groups = n;
//         }

//         find(id) {
//             if (this.graph[id] === id) return id;
//             return this.graph[id] = this.find(this.graph[id]);

//         }

//         union(x, y) {
//             const rootX = this.find(x);
//             const rootY = this.find(y);
//             if (rootX !== rootY) {
//                 this.graph[rootY] = rootX;
//                 this.groups--;
//             }
//         }
//     }

//     const N = M.length, dsu = new UnionFind(N);

//     for (let r = 0; r < N; r++) {
//         for (let c = 0; c < N; c++) {
//             if (M[r][c]) dsu.union(r, c);
//         }
//     }
//     return dsu.groups;
// };


var findCircleNum = function (matrix) {
    let graph = Array.from({ length: matrix.length }, () => [])
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i != j && matrix[i][j] === 1) {
                graph[i].push(j)
            };
        }
    }

    let seen = new Set()
    let c = 0
    const dfs = (node) => {
        if (seen.has(node)) return false
        seen.add(node)
        for (const n of graph[node]) {
            dfs(n)
        }
        return true
    }

    for (let i = 0; i < matrix.length; i++) {
        if (dfs(i)) c++
    }
    return c
};

let isConnected = [[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]


console.log(findCircleNum(isConnected));