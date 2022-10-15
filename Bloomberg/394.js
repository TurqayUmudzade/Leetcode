var decodeString = function (str) {
    let nStack = []
    let strStack = []
    let n = 0
    let currStr = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        console.log(str[i - 1], nStack, strStack, n, "currStr: " + currStr)
        if (char === '[') {
            nStack.push(n)
            strStack.push(currStr)
            n = 0
            currStr = ''
        } else if (char === ']') {
            const decodeN = nStack.pop()
            let decodeStr = strStack.pop()
            decodeStr += currStr.repeat(decodeN)
            currStr = decodeStr
        } else if (str[i] >= '0' && str[i] <= '9') {
            n = n * 10 + Number(char)
        } else {
            currStr += char
        }
    }

    return currStr
}

let s = "3[a2[c]]"
console.log(decodeString(s));