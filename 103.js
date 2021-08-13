var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let output = [];
    let zig = true;
    while (queue.length > 0) {
        const size = queue.length;
        const level = [];

        for (let i = 0; i < size; i++) {
            const cur = queue.shift();

            if (!cur) return false

            if (zig) level.push(cur.val);
            else level.unshift(cur.val);

            if (cur.left) queue.push(cur.left)
            if (cur.right) queue.push(cur.right)
        }
        output.push(level)
        zig = !zig
    }

    return output
};