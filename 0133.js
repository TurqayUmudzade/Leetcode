var cloneGraph = function (graph) {
    let map = new Map()

    const dfs = (node) => {
        if (!node) return node;
        if (!map.has(node.val)) {
            map.set(node.val, new Node(node.val));
            map.get(node.val).neighbors = node.neighbors.map((node) => {
                return dfs(node)
            });
        }
        return map.get(node.val);
    }
    return dfs(graph);
}

var cloneGraph = function (node) {

    const map = new Map();
    const q = [node]
    map.set(node, new Node(node.val));

    while (q.length) {
        const cur = q.shift();
        for (const neighbor of cur.neighbors) {
            if (!map.has(neighbor)) {

                map.set(neighbor, new Node(neighbor.val))
                q.push(neighbor);
            }
            map.get(cur).neighbors.push(map.get(neighbor));
        }
    }
    return map.get(node);

};



