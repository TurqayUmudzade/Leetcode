const zigzagLevelOrder = (root) => {
    if (!root) return []
    let q = [root]
    let ans = []
    let zig = true
    while (q.length > 0) {
        let len = q.length
        let temp = []
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if (!cur) continue
            temp.push(cur.val)
            if (zig) {
                if (cur.left) q.push(cur.left)
                if (cur.right) q.push(cur.right)
            } else {
                if (cur.right) q.push(cur.right)
                if (cur.left) q.push(cur.left)
            }
        }
        zig = !zig
        q = q.reverse()
        ans.push(temp)
    }
    return ans
}
