var removeLeafNodes = function (root, target) {

    if (!root) return null
    let left = removeLeafNodes(root.left, target)
    let right = removeLeafNodes(root.right, target)

    if (!left && !right && root.val === target) {
        return null
    }

    root.left = left
    root.right = right
    return root
};