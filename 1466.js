// var minReorder = function (n, connections) {

//     let graph = Array.from({ length: n }, () => [])
//     let set = new Set()
//     for (const [a, b] of connections) {
//         graph[a].push(b)
//         graph[b].push(a)
//         set.add(a + "," + b)
//     }

//     const dfs = (node, parent) => {
//         if (set.has(parent + "," + node)) c++
//         for (const n of graph[node]) {
//             if (n === parent) continue
//             dfs(n, node)
//         }

//     }
//     let c = 0
//     dfs(0, -1)
//     return c
// };

var minReorder = function (n, connections) {

    let graph = Array.from({ length: n }, () => [])
    let set = new Set()
    let seen = new Set([0])
    for (const [a, b] of connections) {
        graph[a].push(b)
        graph[b].push(a)
        set.add(a + "," + b)
    }
    let c = 0
    let q = [0]

    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let node = q.shift()
            for (const n of graph[node]) {
                if (!seen.has(n)) {
                    if (set.has(node + "," + n)) {
                        c++
                    }
                    seen.add(n)
                    q.push(n)
                }
            }
        }
    }
    return c
};

// let n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]
let n = 6, connections = [[1, 0], [1, 2], [3, 2], [3, 4]]
console.log(minReorder(n, connections));