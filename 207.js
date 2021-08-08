
var canFinish = function (numCourses, prerequisites) {
    let graph = new Map();
    let visiting = new Set();
    let visited = new Set();


    function dfs(v) {
        visiting.add(v);
        let edges = graph.get(v);   // get all the edges to explore

        if (edges) {
            for (let e of edges) {
                if (visited.has(e)) continue; //skip if it is explored already
                if (visiting.has(e)) return true;  //found e is being explored
                if (dfs(e)) return true; // DFS deeper if this e is cyclic
            }
        }

        visiting.delete(v); // remove from visiting set when all decedant v are visited
        visited.add(v);
        return false;
    }


    for (let [v, e] of prerequisites) {
        if (graph.has(v)) {
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        } else {
            graph.set(v, [e]);
        }
    }


    for (const [v, e] of graph)
        if (dfs(v)) return false //cycle

    return true;
}

