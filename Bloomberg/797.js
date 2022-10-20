var allPathsSourceTarget = function (graph) {
    const paths = []
    const dfs = (cur, path) => {
        if (cur === graph.length - 1) {
            paths.push(path)
            return
        }

        for (const node of graph[cur]) {
            dfs(node, [...path, node])
        }

    }

    dfs(0, [0])
    return paths
};

let graph = [[1, 2], [3], [3], []]
allPathsSourceTarget(graph)