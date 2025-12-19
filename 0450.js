var deleteNode = function (root, key) {

    function dfs(node) {
        if (!node) return null;
        if (node.val === key) {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            let curr = node.right;
            while (curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if (key > node.val) node.right = dfs(node.right);
        else node.left = dfs(node.left);
        return node;
    }
    return dfs(root)
};