
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



var insertIntoBST = function (root, val) {

    let p = root
    while (root) {
        if (root.val < val) {
            if (!root.right) {
                root.right = new TreeNode(val)
                return p
            } else root = root.right
        } else {
            if (!root.left) {
                root.left = new TreeNode(val)
                return p
            } else root = root.left
        }
    }

    return new TreeNode(val)
};


const insertIntoBST = (root, val) => {
    if (!root) return new TreeNode(val)
    if (root.val < val) root.right = insertIntoBST(root.right, val)
    if (root.val > val) root.left = insertIntoBST(root.left, val)
    return root
}