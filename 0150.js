var evalRPN = function (tokens) {
    let set = new Set(["+", "-", "*", "/"])

    const isOperation = (symbol) => set.has(symbol)

    const handleOperation = (a, b, symbol) => {
        switch (symbol) {
            case "+":
                return a + b
            case "-":
                return a - b
            case "*":
                return a * b
            case "/":
                return Math.trunc(a / b)
        }
    }

    let stack = []
    let ans = 0
    for (const item of tokens) {
        if (isOperation(item)) {
            let a = Number(stack.pop())
            let b = Number(stack.pop())
            console.log(b, a, item);
            ans = handleOperation(b, a, item)
            stack.push(ans)
        } else {
            stack.push(item)
        }
    }
    return stack.pop()
};

let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

console.log(evalRPN(tokens));