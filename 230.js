var kthSmallest = function (root, k) {

    if (!root) return null
    let arr = []
    let stack = []

    while (root || stack.length > 0) {
        while (root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        arr.push(root.val)
        root = root.right
    }

    return arr[k - 1]
};


var kthSmallest = function (root, k) {
    let arr = []

    let dfs = (root) => {
        if (!root) return
        dfs(root.left)
        arr.push(root.val)
        dfs(root.right)
    }

    dfs(root)
    return arr[k - 1]
};

let arr = [1, 2, 3, 4, 5]

console.log(arr.slice(0, 2));