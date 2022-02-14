var maxPower = function (s) {
    let max = 0
    let stack = [[s[0], 0]]
    for (const c of s)
        if (stack[stack.length - 1][0] == c) { max = Math.max(max, ++stack[stack.length - 1][1]) }
        else stack.push([c, 1])
    return max
};