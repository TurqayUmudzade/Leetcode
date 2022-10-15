var isCousins = function (root, x, y) {

    const dfs = (root, node, depth) => {
        if (!root) return
        if (root.val === node) return [depth + 1, root.val]
        if (root.right?.val == node || root.left?.val == node) return [depth + 1, root.val]
        return dfs(root.left, node, depth + 1) || dfs(root.right, node, depth + 1)
    }


    let [depthX, parentX] = dfs(root, x, 0)
    let [depthY, parentY] = dfs(root, y, 0)
    if (depthX === depthY && parentX != parentY) return true
    else return false
};