const inorderTraversal = (root) => {
    let out = []

    const traverse = (node) => {
        if (!node) return
        traverse(node.left)
        out.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return out
};