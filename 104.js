//BFS
var maxDepth = function (root) {
    if (!root) return 0

    let q = [root]
    let depth = 0
    while (q[0]) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        depth++
    }
    return depth

};


//DFS
var maxDepth = function (root) {
    if (!root) return 0

    let max = 0

    const dfs = (root, depth) => {
        if (!root) {
            max = Math.max(max, depth)
            return
        }
        dfs(root.right, depth + 1)
        dfs(root.left, depth + 1)
    }

    dfs(root, max)
    return max

};