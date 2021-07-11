var hasPathSum = function (root, targetSum) {
    return dfs(root, targetSum);
};

const dfs = (root, target) => {
    if (!root) return false;
    if (!root.left && !root.right) return target - root.val === 0;
    return dfs(root.left, target - root.val) || dfs(root.right, target - root.val);
}