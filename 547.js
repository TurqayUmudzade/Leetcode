var findCircleNum = function (n, edges) {
    let visited = [];
    let graph = buildGraph(n, edges);
    console.log(graph);
    let res = 0;

    for (let i = 0; i < n; i++) {
        visited.push(false);
    }

    // traverse graph
    for (let i = 0; i < n; i++) {
        if (visited[i] === false) {
            res++;
            dfs(i, graph, visited);
        }
    }
    return res;
};

const buildGraph = (n, edges) => {
    let graph = Array.from({ length: n }, () => []);

    for (let edge of edges) {
        let [src, dist] = edge;
        graph[src].push(dist);
        graph[dist].push(src);
    }
    return graph
}

const dfs = (index, graph, visited) => {
    visited[index] = true;
    let nodes = graph[index];
    for (let i = 0; i < nodes.length; i++) {
        if (visited[nodes[i]] === false) {
            dfs(nodes[i], graph, visited)
        }
    }
}

let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]

console.log(findCircleNum(isConnected.length, isConnected));


var findCircleNum = function (M) {

    class UnionFind {
        constructor(n) {
            this.parent = [...Array(n)].map((_, i) => i);
            this.groups = n;
        }

        find(x) {
            if (this.parent[x] === x) return x;
            return this.parent[x] = this.find(this.parent[x]);
        }

        union(x, y) {
            const rootX = this.find(x);
            const rootY = this.find(y);
            if (rootX !== rootY) {
                this.parent[rootY] = rootX;
                this.groups--;
            }
        }
    }

    const N = M.length, dsu = new UnionFind(N);

    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            if (M[r][c]) dsu.union(r, c);
        }
    }
    return dsu.groups;
};