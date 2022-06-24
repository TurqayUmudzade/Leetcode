var shortestPath = function (grid, k) {

    let root = [[0, 0]]
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let step = 0
    while (root.length > 0) {
        let len = root.length
        step++
        for (let i = 0; i < len; i++) {
            let cur = root.shift()
            let [x, y] = cur
            if (x =)
                grid[x][y] = -1
            for (const [dx, dy] of dirs) {
                let newX = x + dx
                let newY = y + dy
                if (newX >= 0 && newY >= 0 && newX < grid.length && newY < grid[0].length && grid[newX][newY] !== -1) {
                    root.push([x + dx, y + dy])
                }
            }
        }
    }
    return step
};


let grid = [[0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 1, 1], [0, 0, 0]], k = 1

console.log(shortestPath(grid, k));