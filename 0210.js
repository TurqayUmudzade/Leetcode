var findOrder = function(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);

    for (const [a, b] of prerequisites) {
        graph[b].push(a);
    }

    const out = []
    const done = new Set()
    const seen = new Set()
    const dfs = (node) => {
        if(done.has(node)) return true
        if(seen.has(node)) return false
        
        seen.add(node)
        
        for(const neighbor of graph[node]){
            if(!dfs(neighbor)) return false
        }

        seen.delete(node)
        done.add(node)
        out.push(node)
        return true
    }
    
    for(let i = 0; i < numCourses; i++){
        if(!dfs(i)) return []
    }

    return out.reverse()
    
};
