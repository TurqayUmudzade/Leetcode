var tree2str = function (root) {

    let str = "" + root + "("

    let dfs = (root, i) => {
        if (!root) return
        dfs(root.left)
        dfs(root.right)
        str += root + "("
    }


    dfs(root, 0)

    return str
};