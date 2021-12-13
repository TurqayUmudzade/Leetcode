function removeDuplicates(s, k) {
    let stack = [[s[0], 1]]

    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] && stack[stack.length - 1][0] === s[i])
            stack[stack.length - 1][1]++
        else stack.push([s[i], 1])

        if (stack[stack.length - 1][1] === k) stack.pop()
    }


    let str = ""
    for (const [s, count] of stack)
        str += s.repeat(count)

    return str
}


console.log(removeDuplicates("deeedbbcccbdaa", 3));