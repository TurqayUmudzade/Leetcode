var inorderSuccessor = function (root, p) {

    let tree = []
    let traverse = (root) => {
        if (!root) return
        traverse(root.left)
        tree.push(root)
        traverse(root.right)
    }

    traverse(root)
    for (let i = 0; i < tree.length; i++) {
        if (tree[i].val === p.val) return tree[i + 1]
    }

    return null
};




let inorderSuccessor = (root, p) => {
    if (!root) return null
    if (root.val <= p.val) return inorderSuccessor(root.right, p);
    else return inorderSuccessor(root.left, p) || root;
}