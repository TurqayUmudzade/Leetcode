var diameterOfBinaryTree = function (root) {
    return maxDepth(root.left) + maxDepth(root.rigth)
};

var maxDepth = function (root) {
    if (!root) return 0

    let max = 0

    const dfs = (root, depth) => {
        if (!root) {
            max = Math.max(max, depth)
            return
        }
        dfs(root.right, depth + 1)
        dfs(root.left, depth + 1)
    }

    dfs(root, max)
    return max

};