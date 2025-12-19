var largestBSTSubtree = function (root) {
    let c = 0
    let dfs = (root) => {
        if (!root) return
        let temp = isValidBST(root)
        if (temp) c = Math.max(c, temp)
        dfs(root.left)
        dfs(root.right)
    }

    dfs(root)
    return c
};


const isValidBST = (root) => {

    let tree = []
    let inOrderTraversal = (root) => {
        if (!root) return
        inOrderTraversal(root.left)
        tree.push(root.val)
        inOrderTraversal(root.right)
    }

    inOrderTraversal(root)

    for (let i = 1; i < tree.length; i++)
        if (tree[i - 1] >= tree[i]) return false

    return tree.length
}