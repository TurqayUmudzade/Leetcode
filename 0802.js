var eventualSafeNodes = function (graph) {
    let ans = []
    let seen = new Set()
    const dfs = (node) => {
        if (seen.has(node)) return
        seen.add(node)
        if (graph[node].length === 0) return true
        for (const n of graph[node]) {
            if (!dfs(n)) {
                console.log(n, "false");
                return false
            }
        }
        return true
    }

    // for (let i = 0; i < graph.length; i++) {
    //     if (dfs(i)) ans.push(i)
    //     seen = new Set()
    // }

    console.log(dfs(1));
    return ans
};


// let graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
let graph = [[], [0, 2, 3, 4], [3], [4], []]

console.log(eventualSafeNodes(graph));