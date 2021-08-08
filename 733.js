var floodFill = function (image, sr, sc, newColor) {

    function Node(x, y) {
        this.x = x
        this.y = y
    }

    let color = image[sr][sc]
    if (color == newColor) return image
    let q = [new Node(sr, sc)]
    let dirs = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0]
    ]

    while (q.length > 0) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let cur = q.shift()

            image[cur.x][cur.y] = newColor
            for (const [dx, dy] of dirs) {
                let newX = cur.x + dx
                let newY = cur.y + dy
                if (newX >= 0 && newY >= 0 && newX < image.length && newY < image[0].length && image[newX][newY] === color) {
                    q.push(new Node(newX, newY))
                }
            }
        }
    }
    return image
};


floodFill([[0, 0, 0], [0, 1, 1]], 1, 1, 1)