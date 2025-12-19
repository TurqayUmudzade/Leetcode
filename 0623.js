

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var addOneRow = function (root, val, depth) {

    if (depth === 1) {
        let newRoot = new TreeNode(val, root)
        return newRoot
    }

    let q = [root]
    while (q.length) {
        let len = q.length
        depth--
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if (depth == 1) {
                cur.left = new TreeNode(val, cur.left, null)
                cur.right = new TreeNode(val, null, cur.right)
            }
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        if (depth < 1) return root
    }
    return root
};