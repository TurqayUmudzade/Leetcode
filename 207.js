var canFinish = function (numCourses, prerequisites) {
    let g = Array.from({ length: numCourses }, () => [])
    for (const [a, b] of prerequisites) g[a].push(b)

    let visited = new Set()
    let visiting = new Set()

    const hasCycle = (node) => {
        visiting.add(node)
        for (const edge of g[node]) {
            if (visited.has(edge)) continue
            if (visiting.has(edge)) return true
            if (hasCycle(edge)) return true
        }

        visiting.delete(node)
        visited.add(node)
        return false
    }

    for (let i = 0; i < numCourses; i++) {
        if (hasCycle(i)) return false;
    }

    return true;
};