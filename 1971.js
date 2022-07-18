// var validPath = function (n, edges, start, end) {
//     class UnionFind {
//         constructor(n) {
//             this.parent = [...Array(n)].map((_, i) => i);
//             this.groups = n;
//         }

//         find(x) {
//             if (this.parent[x] === x) return x;
//             return this.parent[x] = this.find(this.parent[x]);
//         }

//         union(x, y) {
//             const rootX = this.find(x);
//             const rootY = this.find(y);
//             if (rootX !== rootY) {
//                 this.parent[rootY] = rootX;
//                 this.groups--;
//             }
//         }
//     }

//     const dsu = new UnionFind(n)

//     for (const [a, b] of edges) {
//         dsu.union(a, b)
//     }

//     if (dsu.groups === 1) return true
//     if (dsu.find(start) !== dsu.find(end))
//         return false
//     return true
// };



// var validPath = function (n, edges, start, end) {
//     const graph = new Map();

//     const visited = new Set();

//     for (const [v, e] of edges) {
//         if (graph.has(v)) {
//             graph.get(v).push(e);
//         } else {
//             graph.set(v, [e]);
//         }

//         if (graph.has(e)) {
//             graph.get(e).push(v);
//         } else {
//             graph.set(e, [v]);
//         }
//     }

//     function dfs(v) {
//         visited.add(v);
//         const edges = graph.get(v);
//         if (edges && edges.length > 0)
//             for (const e of edges)
//                 if (!visited.has(e)) dfs(e);


//     }

//     dfs(start);

//     return visited.has(end);
// };


var validPath = function (n, edges, source, destination) {
    let graph = Array.from({ length: n }, () => [])
    for (const [e1, e2] of edges) {
        graph[e1].push(e2)
        graph[e2].push(e1)
    }


    let flag = false
    let seen = new Set()
    seen.add(source)
    const dfs = (node) => {
        if (node === destination) return flag = true
        for (const edge of graph[node]) {
            if (!seen.has(edge)) {
                seen.add(edge)
                dfs(edge)
            }
        }
    }

    dfs(source)
    return flag
};

let n = 3, edges = [[0, 1], [1, 2], [2, 0]], source = 0, destination = 2
console.log(validPath(n, edges, source, destination));