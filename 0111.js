var minDepth = function (root) {
    if (!root) return 0

    let dfs = (root, n) => {
        if (!root) return Number.MAX_SAFE_INTEGER
        if (!root.left && !root.right) return n
        return Math.min(dfs(root.left, n + 1), dfs(root.right, n + 1))
    }

    return dfs(root, 1)
};