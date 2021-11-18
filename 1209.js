

function removeDuplicates(s, k) {
    let stack = [[s[0], 1]]
    for (let i = 1; i < s.length; i++) {
        if (stack[stack.length - 1] && s[i] == stack[stack.length - 1][0]) stack[stack.length - 1] = [stack[stack.length - 1][0], stack[stack.length - 1][1] + 1]
        else stack.push([s[i], 1])


        if (stack[stack.length - 1][1] == k) {
            stack.pop()
        }
    }

    let ans = ''
    for (const [str, c] of stack) {
        for (let i = 0; i < c; i++) {
            ans += str

        }
    }
    return ans
}


console.log(helper("deeedbbcccbdaa", 3));