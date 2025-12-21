var canFinish = function (n, prerequisites) {
    const graph = Array.from({ length: n }, () => [])

    for (const [a, b] of prerequisites) {
        graph[b].push(a)
    }

    const canTake = new Set()
    const seen = new Set()

    const dfs = (node) => {
        if(seen.has(node)) return false
        if(canTake.has(node)) return true

        seen.add(node)

        for (const neighbor of graph[node]){
            if(!dfs(neighbor)) return false
        }
        seen.delete(node)
        canTake.add(node)
        return true
    }

    for (let i = 0; i < n; i++) {
        if (!dfs(i)) return false
    }

    return true
}
