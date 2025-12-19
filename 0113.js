var pathSum = function (root, targetSum) {

    let ans = []
    let dfs = (root, sum, path) => {
        if (!root) return
        if (!root.left && !root.right && sum == targetSum - root.val) ans.push([...path, root.val])
        dfs(root.left, sum + root.val, [...path, root.val])
        dfs(root.right, sum + root.val, [...path, root.val])
    }

    dfs(root, 0, [])

    return ans
};