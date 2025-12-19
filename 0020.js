const isValid = (s) => {

    let stack = []
    for (const c of s) {

        if (c === '(' || c === '{' || c === '[') stack.push(c)
        else if (stack[stack.length - 1] === '(' && c === ")") stack.pop()
        else if (stack[stack.length - 1] === '{' && c === "}") stack.pop()
        else if (stack[stack.length - 1] === '[' && c === "]") stack.pop()
        else return false
    }

    return stack.length === 0
}


console.log(isValid('()'));