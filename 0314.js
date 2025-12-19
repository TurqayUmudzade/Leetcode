var verticalOrder = function (root) {
    if (!root) return [];
    let out = []
    let queue = [[root, 0]];
    let map = new Map();

    while (queue.length) {
        let len = queue.length
        for (let i = 0; i < len; i++) {
            const [node, index] = queue.shift()
            if (!map.has(index)) map.set(index, [node.val])
            else map.set(index, [...map.get(index), node.val])

            if (node.left) queue.push([node.left, index - 1])
            if (node.right) queue.push([node.right, index + 1])
        }
    }
    let keys = [...map.keys()].sort((a, b) => a - b)
    for (const key of keys) out.push(map.get(key))
    return out
};