var findLeaves = function (root) {

    let out = []
    let temp = []

    let dfs = (root) => {
        if (!root) return
        if (dfs(root.left)) root.left = null
        if (dfs(root.right)) root.right = null
        if (!root.left && !root.right) {
            temp.push(root.val)
            return true
        }

    }


    dfs(root)
    console.log(temp);
    console.log(root)
    //while (root) {
    //     temp = []
    //     dfs(root)
    //     out.push(temp)
    // }
    return out
}
