var flatten = function (root) {
    let prev = null

    const dfs = node => {
        if (node === null) return

        dfs(node.right);
        dfs(node.left);

        node.left = null;
        node.right = prev;
        prev = node;
    }

    dfs(root);

};