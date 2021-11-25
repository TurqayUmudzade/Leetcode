var goodNodes = function (root) {

    let c = 0
    let dfs = (root, max) => {
        if (!root) return
        if (root.val >= max) c++
        dfs(root.left, Math.max(max, root.val))
        dfs(root.right, Math.max(max, root.val))
    }

    dfs(root, root.val)
    return c
};