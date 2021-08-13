var invertTree = function (root) {
    if (!root) return null
    invert(root)
    return root
};

function invert(root) {
    if (!root) return
    let temp = root.left
    root.left = root.right
    root.right = temp
    invert(root.left)
    invert(root.left)
}