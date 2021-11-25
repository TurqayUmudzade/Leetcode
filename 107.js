var levelOrderBottom = function (root) {
    let q = [root]
    let levels = []
    while (q.length > 0) {
        let len = q.length
        let level = []
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            level.push(cur)
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        levels.push(level)
    }
    return levels.reverse()
};