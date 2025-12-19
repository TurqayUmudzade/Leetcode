var maxPathSum = function (root) {

    let max = -Infinity

    let traverse = (root) => {
        if (!root) return 0
        let left = traverse(root.left)
        let right = traverse(root.right)
        max = Math.max(max, root.val + left + right)
        return Math.max(0, root.val + left, root.val + right)

    }

    traverse(root)
    return max
};