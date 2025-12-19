var rangeSumBST = function (root, low, high) {

    let arr = []
    let dfs = (root) => {
        if (!root) return
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }
    dfs(root)

    let sum = low + high
    let inRange = false
    for (const n of arr) {
        if (n == low) inRange = true
        else if (n == high) inRange = false
        else if (inRange) sum += n
        else inRange = false
    }
    return sum
};