var allPathsSourceTarget = function (graph) {
    let ans = []
    let dfs = (i, path) => {
        if (i === graph.length - 1) {
            ans.push([...path, i])
            return
        }

        for (const node of graph[i]) {
            dfs(node, [...path, i])
        }

    }

    dfs(0, [])

    return ans
};