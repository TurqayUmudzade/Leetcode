const isValidBST = (root) => {

    let tree = []
    const inOrderTraversal = (root) => {
        if (!root) return
        inOrderTraversal(root.left)
        tree.push(root.val)
        inOrderTraversal(root.right)
    }

    inOrderTraversal(root)

    for (let i = 1; i < tree.length; i++) {
        if (tree[i - 1] >= tree[i]) return false
    }
    return true
}

var isValidBST = function (root, min = null, max = null) {
    if (!root) return true;
    if (min && root.val <= min.val) return false;
    if (max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};