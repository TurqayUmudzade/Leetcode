var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1
    let graph = Array.from({ length: n }, () => [])

    for (const [i, j] of connections) {
        graph[i].push(j)
        graph[j].push(i)
    }
    let seen = new Set()
    const dfs = (node) => {
        if (seen.has(node)) return false
        seen.add(node)
        for (const n of graph[node]) {
            dfs(n)
        }
        return true
    }
    let c = 0
    for (let i = 0; i < n; i++) {
        if (dfs(i)) c++
    }
    return c - 1
};

let n = 4, connections = [[0, 1], [0, 2], [1, 2]]


console.log(makeConnected(n, connections));