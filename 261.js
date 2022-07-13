// var validTree = function (n, edges) {

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
//                 return true
//             }
//             return false
//         }
//     }

//     let dsu = new UnionFind(n)

//     for (const arr of edges) {
//         if (!dsu.union(arr[0], arr[1])) return false
//     }
//     return true
// };



var validTree = function (n, edges) {

    let graph = Array.from({ length: n }, () => [])

    for (const [edge1, edge2] of edges) {
        graph[edge1].push(edge2)
        graph[edge2].push(edge1)
    }


    let parent = new Map()
    parent.set(0, -1);
    let queue = [0]

    while (queue.length) {
        console.log(queue);
        let node = queue.shift();
        for (let neighbour of graph[node]) {
            if (parent.get(node) == neighbour) {
                continue;
            }
            if (parent.has(neighbour)) {
                return false;
            }
            queue.push(neighbour);
            parent.set(neighbour, node);
        }
    }

    return parent.size == n;

};


let n = 5, edges = [[0, 1], [0, 2], [0, 3], [1, 4]]

console.log(validTree(n, edges));