
//BFS
let treasureIsland = (matrix) => {
    class Node {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    if (!matrix || matrix.length === 0) return 0

    let n = 0
    let q = [new Node(0, 0)]
    let hasVisited = Array(4).fill().map(() => Array(4).fill(false))
    hasVisited[0][0] = true
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    while (q.length > 0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()
            if (matrix[cur.x][cur.y] === 'X') return n

            for (const dir of dirs) {
                let x = cur.x + dir[0]
                let y = cur.y + dir[1]

                if (x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length) {

                    if (matrix[x][y] !== 'D' && !hasVisited[x][y]) {
                        q.push(new Node(x, y))
                        hasVisited[x][y] = true
                    }
                }
            }

        }
        n++
    }

}


let arr = [['O', 'O', 'O', 'O'],
['D', 'O', 'D', 'O'],
['O', 'O', 'O', 'O'],
['X', 'D', 'D', 'O']]
console.log(treasureIsland(arr));