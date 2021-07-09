var findLeaves = function (root) {
    const res = {};

    const dfs = (node) => {
        if (!node) return 0;
        const depth = Math.max(dfs(node.left), dfs(node.right));
        if (res[depth]) {
            res[depth].push(node.val);
        } else {
            res[depth] = [node.val];
        }
        return depth + 1;
    }
    dfs(root);
    return Object.values(res);
};