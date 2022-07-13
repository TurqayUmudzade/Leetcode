var countComponents1 = function (n, edges) {

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

    const dsu = new UnionFind(n)

    for (const arr of egdes) {
        dsu.union(arr[0], arr[1])
    }

    return dsu.groups
};


const countComponents = (n, edges) => {
    let graph = Array.from({ length: n }, () => [])

    for (const [e1, e2] of edges) {
        graph[e1].push(e2)
        graph[e2].push(e1)
    }

    let visited = new Set()
    let c = 0

    const dfs = (node) => {
        if (visited.has(node)) return false;
        visited.add(node)
        for (const neighbor of graph[node]) {
            dfs(neighbor)
        }

        return true
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i)) c++

    }

    return c
};

let n = 5, edges = [[0, 1], [0, 2], [2, 3], [2, 4]]
console.log(countComponents(n, edges));



