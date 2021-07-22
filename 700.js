const searchBST = (root, val) => {
    if (!root) return null
    if (root.val === val) return root
    if (root.val < val) return searchBST(root.right, val)
    else return searchBST(root.left, val)
}


const searchBST = (root, val) => {
    if (!root) return null
    while (root) {
        if (root.val === val) return root
        if (root.val < val) root = root.right
        else root = root.left
    }
    return null
}