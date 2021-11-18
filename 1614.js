var maxDepth = function (s) {
    let max = 0
    let stack = 0

    for (const c of s) {
        if (c == '(') {
            stack++
            max = Math.max(max, stack)
        } else if (c == ')') stack--
    }
    return max
};