function removeDuplicates(s, k) {
    let stack = [[s[0], 1]]
    for (let i = 1; i < s.length; i++) {
        const curChar = s[i]
        if (stack[stack.length - 1] && stack[stack.length - 1][0] === curChar) stack[stack.length - 1][1]++
        else stack.push([curChar, 1])

        if (stack[stack.length - 1][1] === k) stack.pop()

    }

    let out = ''
    for (const [char, count] of stack) {
        out += char.repeat(count)
    }
    return out
}

let s = "deeedbbcccbdaa", k = 3
console.log(removeDuplicates(s, k));