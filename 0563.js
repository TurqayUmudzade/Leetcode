var findTilt = function (root) {

    let total = 0

    let dfs = (root) => {
        if (!root) return
        total += Math.abs(sum(root.left) - sum(root.right))
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return total
};

function sum(root) {
    let total = 0
    let dfs = (root) => {
        if (!root) return
        total += root.val
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)

    return total
}