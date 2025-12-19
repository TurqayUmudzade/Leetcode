var isSubtree = function (root, subRoot) {

    if (!root && !subRoot) return true
    if (!root || !subRoot) return false

    let tree = treeToArray(root)
    let subtree = treeToArray(subRoot)

    return subtree.every(val => tree.includes(val))

};

let treeToArray = (root) => {
    let tree = []
    const traverse = (root) => {
        if (!root) return false
        traverse(root.left)
        tree.push(root.val)
        traverse(root.right)
    }
    return tree
}