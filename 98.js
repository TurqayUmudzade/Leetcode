var isValidBST = function (root) {

    let arr = []
    const traverse = (root) => {
        if (!root) return
        traverse(root.left)
        arr.push(root.val)
        traverse(root.right)
    }

    const isSorted = (a) => {
        for (let i = 1; i < a.length; i++)
            if (a[i - 1] >= a[i]) return false

        return true
    }

    traverse(root)
    return isSorted(arr)
};