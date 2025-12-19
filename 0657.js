var judgeCircle = function (moves) {
    let map = new Map()
    map.set('U', [0, 1])
    map.set('D', [0, -1])
    map.set('L', [-1, 0])
    map.set('R', [1, 0])

    let origin = [0, 0]

    for (const move of moves) {
        const [dx, dy] = map.get(move)
        origin[0] += dx
        origin[1] += dy
    }
    const [x, y] = origin
    return x == 0 && y == 0
};