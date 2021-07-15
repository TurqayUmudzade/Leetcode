var isRobotBounded = function (ins) {

    let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0],]
    let dir = 0
    let cordinates = [0, 0]
    for (let i = 0; i < ins.length; i++) {

        if (ins[i] === 'R') {
            dir = (dir + 1) % 4
        } else if (ins[i] === 'L') {
            dir = (dir + 3) % 4
        } else {
            cordinates[0] += dirs[dir][0]
            cordinates[1] += dirs[dir][1]
        }
    }

    return ((cordinates[0] == 0 && cordinates[1] == 0) || dir !== 0)
};


isRobotBounded('GL')