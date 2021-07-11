


var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    dfs(root);

    return diameter;

    function dfs(node, level) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};



const diameterOfBinaryTree = (root) => {
    let max = 0


    const dfs = (root) => {
        if (!root) return

        const left = dfs(root.left)
        const right = dfs(root.right)

        max = Math.max(max, left + right)

        return Math.max(left, right) + 1
    }
    dfs(root)
    return max
}