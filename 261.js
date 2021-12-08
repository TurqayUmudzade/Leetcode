var validTree = function (n, edges) {

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
                return true
            }
            return false
        }
    }

    let dsu = new UnionFind(n)

    for (const arr of edges) {
        if (!dsu.union(arr[0], arr[1])) return false
    }
    return true
};