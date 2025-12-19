var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let output = [];
    let zig = true;
    while (queue.length > 0) {
        const size = queue.length;
        let level = [];

        for (let i = 0; i < size; i++) {
            const cur = queue.shift();


            level.push(cur.val)

            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        if (!zig) level.reverse()
        output.push(level)
        zig = !zig
    }

    return output
};