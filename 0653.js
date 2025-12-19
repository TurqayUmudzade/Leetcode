var findTarget = function (root, k) {
    let set = new Set()
    flag = false

    let dfs = (root) => {
        if (!root) return
        if (set.has(k - root.val)) flag = true
        else set.add(root.val)
        dfs(root.left)
        dfs(root.right)
    }


    dfs(root)

    return flag
};