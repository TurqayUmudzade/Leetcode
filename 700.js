var searchBST = function (root, val) {

    let ans = null
    const dfs = (root) => {
        if (!root) return
        if (root.val === val) {
            ans = root
            return
        }
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return ans
};