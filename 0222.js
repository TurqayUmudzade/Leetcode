var countNodes = function (root) {

    let c = 0

    let dfs = (root) => {
        if (!root) return
        c++
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return c
};