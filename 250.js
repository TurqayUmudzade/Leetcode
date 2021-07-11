var countUnivalSubtrees = function (root) {
    if (!root) return 0

    let c = 0

    const dfs = (root) => {
        if (!root) return
        if (root.left && root.right && root.left.val === root.right.val) c++
        else if (root.left && root.left.val === root.val) c++
        else if (root.right && root.right.val === root.val) c++
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return c
};