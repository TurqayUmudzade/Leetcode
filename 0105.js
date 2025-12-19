var buildTree = function (preorder, inorder) {

    let rootIndex = inorder.indexOf(preorder[0])

    let root = new TreeNode(preorder[0])

    let p = root
    for (let i = rootIndex + 1; i < preorder.length; i++) {
        if (preorder[i] > root.val) root.right = new TreeNode(preorder[i])
        else root.left = new TreeNode(preorder[i])
    }

};