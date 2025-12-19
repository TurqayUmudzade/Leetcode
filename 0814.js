var pruneTree = function (root) {

    let hasOne = (root) => {
        if (!root) return false

        let left = hasOne(root.left)
        let right = hasOne(root.right)

        if (!left) root.left = null
        if (!right) root.right = null

        return root.val === 1 || left || right
    }

    return hasOne(root) ? root : null
};