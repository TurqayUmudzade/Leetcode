const exist = (board, word) => {
    if (board.length === 0) return false;


    let h = board.length
    let w = board[0].length
    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];


    const dfs = (x, y, k) => {
        console.log(k, board[x][y], word[k]);
        if (board[x][y] !== word[k]) return false

        if (k === word.length - 1) return true

        board[x][y] = '*';

        for (const [dx, dy] of dirs) {
            let newX = x + dx
            let newY = y + dy

            if (newX >= 0 && newY >= 0 && newX < h && newY < w) {
                if (dfs(newX, newY, k + 1)) return true
            }
        }

        board[x][y] = word[k];
        return false


    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (dfs(i, j, 0)) return true
        }
    }
    return false
}



let b = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]

console.log(exist(b, "ABCB"));