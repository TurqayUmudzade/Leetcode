const maxDepth = (root) => {
    if (!root) return 0
    let q = [root]
    let depth = 0
    while (q.length > 0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        depth++
    }

    return depth
}
var maxDepth = function (root) {
    let depth = 0
    let dfs = (root, depth) => {
        if (!root) return depth
        return Math.max(dfs(root.left, depth + 1), dfs(root.right, depth + 1))
    }
    return dfs(root, depth)
};


