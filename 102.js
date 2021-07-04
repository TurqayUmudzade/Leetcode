const levelOrder = (root) => {
    if (!root) return []
    let q = [root]
    let ans = []
    while (q.length > 0) {
        let len = q.length
        let temp = []
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            temp.push(cur.val)
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        ans.push(temp)
    }
    return ans
}


