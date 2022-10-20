var knightDialer = function (len) {

    let set = new Set()

    const phone = [[1, 2, 3], [4, 5, 6], [7, 8, 9,], [-1, 0, -1]]
    const m = 4
    const n = 3
    const dirs = [
        [2, -1],
        [2, 1],
        [-2, -1],
        [-2, 1],
        [1, -2],
        [1, 2],
        [-1, -2],
        [-1, 2],
    ]
    let seen = new Set()
    const dfs = (x, y, num) => {
        num += phone[x][y]
        if (num.length === len) {
            set.add(num)
            return
        }
        for (const [dx, dy] of dirs) {
            let newX = dx + x
            let newY = dy + y
            if (newX >= 0 && newY >= 0 && newX < m && newY < n && phone[newX][newY] !== -1) {
                if (!seen.has(newX + '/' + newY)) {
                    seen.add(newX + '/' + newY)
                    dfs(newX, newY, num)
                }
            }
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (phone[i][j] !== -1) {
                dfs(i, j, '')
                seen.clear()
            }
        }

    }

    return set.size % ((10 ** 9) + 7)
};


console.log(knightDialer(1));