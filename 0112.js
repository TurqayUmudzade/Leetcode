const hasPathSum = (root, target) => {
    if (!root) return false
    let ans = false
    const dfs = (root, val) => {
        if (!root) return
        if (!root.left && !root.right) {
            if (val + root.val === target) ans = true
        }
        dfs(root.left, val + root.val)
        dfs(root.right, val + root.val)
    }
    dfs(root, 0)
    return ans
}