var buildTree = function (inorder, postorder) {
    let hash = {};
    for (let i = 0; i < inorder.length; i++) hash[inorder[i]] = i;

    let recur = function (start, end) {
        if (start > end) return null;
        let val = postorder.pop();
        let root = new TreeNode(val);
        root.right = recur(hash[val] + 1, end);
        root.left = recur(start, hash[val] - 1);
        return root;
    }

    return recur(0, inorder.length - 1);
};