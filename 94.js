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

const inOrderStack = (root) => {
    if (!root) return []
    let ans = []
    let stack = []

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        ans.push(root.val)
        root = root.right
    }
    return ans
}
