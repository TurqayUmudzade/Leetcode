var sumOfLeftLeaves = function (root) {
    let sum = 0


    let dfs = (root) => {
        if (!root) return
        if (root.left && !root.left.left && !root.left.right) sum = sum + root.left.val
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)
    return sum
};