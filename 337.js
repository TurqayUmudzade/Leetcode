var rob = function (root) {

    let q = [root]

    let levels = []
    while (q.length > 0) {
        let len = q.length
        let level = []
        for (let i = 0; i < len; i++) {

            let cur = q.shift()

            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)

        }
        levels.push(level)
    }

    let arr = []
    for (const level of levels) {
        let count = level.reduce((a, b) => a + b, 0)
        arr.push(count)
    }

    return rob(nums)
};

var rob = function (nums) {

    let memo = new Map()
    let dfs = (i) => {
        if (i >= nums.length) return 0
        if (memo.has(i)) return memo.get(i)
        memo.set(i, Math.max(dfs(i + 1), dfs(i + 2) + nums[i]))
        return memo.get(i)
    }

    return dfs(0)
};