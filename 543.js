var diameterOfBinaryTree = function (root) {

    let max = 0
    let dfs = (root) => {
        if (!root) return
        let left = dfs(root.left)
        let right = dfs(root.right)
        max = Math.max(max, left + right)
    }


    dfs(root)
    return max
};