var rightSideView = function (root) {
    if (!root) return []
    let q = [root]
    let ans = []
    while (q.length > 0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if (i == len - 1) ans.push(cur.val)
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
    }

    return ans
};