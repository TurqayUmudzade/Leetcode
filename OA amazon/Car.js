const fun = (matrix) => {
    class Node {
        constructor(x, y) {
            this.x = x
            this.y = y
        }
    }

    if (!matrix || matrix.length === 0) return 0

    let q = [new Node(0, 0)]
    let steps = 0
    let visited = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(false))
    visited[0][0] = true
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while (q[0]) {
        let size = q.length
        for (let i = 0; i < size; i++) {

            let cur = q.shift()
            if (matrix[cur.x][cur.y] === 9) return steps

            for (const dir of dirs) {
                let x = cur.x + dir[0]
                let y = cur.y + dir[1]
                if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length)
                    if (!visited[x][y] && matrix[x][y] !== 0) {
                        q.push(new Node(x, y))
                        visited[x][y] = true
                    }
            }
        }
        steps++
    }
    return -1
}


let arr = [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1]]

console.log(fun(arr));