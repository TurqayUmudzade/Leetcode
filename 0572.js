var isSubtree = function (root, subRoot) {
    if (!root) return false
    if (isSameTree(root, subRoot)) return true
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

const isSameTree = (a, b) => {
    if (!a && !b) return true
    if (!a || !b) return false
    if (a.val !== b.val) return false
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right)
}

