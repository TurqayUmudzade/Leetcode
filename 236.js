var lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if (!left) return right  // p and q are in the right subtree
    if (!right) return left  // p and q are in the left subtree
    return root              // p is in one side and q is in the other
};


var lowestCommonAncestor = function (root, p, q) {
    let lca
    const dfs = (root) => {
        if (!root) return
        if (findDFS(root, p.val) && findDFS(root, q.val)) lca = root
        dfs(root.left)
        dfs(root.right)
    }

    const findDFS = (root, val) => {
        if (!root) return false
        if (root.val === val)
            return true
        return findDFS(root.left, val) || findDFS(root.right, val)
    }

    dfs(root)
    return lca
};