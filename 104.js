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

const maxDepth = (root) => {
    let maxDepth = 0
    const dfs = (root, depth) => {
        if (!root) {
            maxDepth = Math.max(maxDepth, depth)
            return
        }
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
    }

    dfs(root, 0)
    return maxDepth
}
