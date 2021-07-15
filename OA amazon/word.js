const findOccurances = (matrix, word) => {
    let h = matrix.length
    let w = matrix[0].length
    let dirs = [[0, -1], [0, 1], [1, 0], [-1, 0],
    [-1, -1], [1, 1], [-1, 1], [1, -1]]

    const dfs = (x, y, k) => {

        if (matrix[x][y] !== word[k]) return false
        if (k === word.length - 1) return true
        matrix[x][y] = '*';
        for (const [dx, dy] of dirs) {
            let newX = dx + x
            let newY = dy + y

            if (newX >= 0 && newY >= 0 && newX < h && newY < w) {
                if (dfs(newX, newY, k + 1)) return true
            }
        }

        matrix[x][y] = word[k];
        return false
    }

    let n = 0
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (dfs(i, j, 0)) n++
        }
    }

    return n
}



let strs =
    ["GEEKSFORGEEKS",
        "GEEKSQUIZGEEK",
        "IDEQAPRACTICE"]
let matrix = []
for (const str of strs) {
    let arr = str.split('')
    matrix.push(arr)
}

console.log(findOccurances(matrix, "EEE"))
