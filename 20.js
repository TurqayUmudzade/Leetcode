var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ")" && stack[stack.length - 1] === "(")
            stack.pop()
        else if
            (s[i] === "]" && stack[stack.length - 1] === "[")
            stack.pop()
        else if (s[i] === "}" && stack[stack.length - 1] === "{")
            stack.pop()
        else stack.push(s[i])
    }

    if (stack[0]) return false
    return true

};




console.log(isValid("{[]}"));