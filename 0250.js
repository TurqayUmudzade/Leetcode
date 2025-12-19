var countUnivalSubtrees = function (root) {
    let count = 0;

    dfs(root);

    return count;

    function dfs(node) {
        if (node == null) return true;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (!left || !right) return false;

        if (node.left != null && node.left.val != node.val) return false;
        if (node.right != null && node.right.val != node.val) return false;

        count++;
        return true;
    }
};