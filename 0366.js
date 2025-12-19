var findLeaves = function (root) {
    let out = []

    let dfs = (root, depth) => {
        if (!root) return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        depth = Math.max(left, right)
        if (out[depth]) out[depth].push(root.val)
        else out[depth] = [root.val]

        return depth + 1
    }

    dfs(root, 0)

    return out
};