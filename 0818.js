var racecar = function (target) {

    let q = [[0, 1]]
    let set = new Set(['0 1', '0 -1'])
    let res = 0
    while (q.length) {
        let len = q.length
        for (let i = 0; i < len; i++) {
            let [pos, speed] = q.shift()
            let newPos = pos + speed
            let newSpeed = speed * 2
            if (newPos == target) return res + 1
            if (newPos > 0 && newPos < 2 * target) {
                q.push([newPos, newSpeed])
                set.add(newPos + " " + newSpeed)
            }
            let speedR = speed > 0 ? -1 : 1
            if (!set.has(pos + " " + speedR)) {
                q.push([pos, speedR])
                set.add(pos + " " + speedR)
            }
        }
        res++
    }
    return res
};




console.log(racecar(3));

