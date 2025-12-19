var spiralOrder = function (matrix) {
    let ans = []
    let x = 0
    let y = 0
    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let dir = 0
    let m = matrix.length
    let n = matrix[0].length
    while (ans.length !== m * n) {

        ans.push(matrix[x][y])
        matrix[x][y] = "*"

        let newX = x + dirs[dir][0]
        let newY = y + dirs[dir][1]

        if (newX < 0 || newY < 0 || newX >= m || newY >= n || matrix[newX][newY] === "*") {
            dir = (dir + 1) % 4
        }
        x += dirs[dir][0]
        y += dirs[dir][1]
    }
    return ans
};


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

spiralOrder(matrix)
