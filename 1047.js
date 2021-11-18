
var removeDuplicates = function (s, k) {

    let hasChanged = true

    while (hasChanged) {
        hasChanged = false
        let temp = helper(s)
        if (temp != s) hasChanged = true
        s = temp
    }
    return s
};

function helper(s) {
    let stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (s[i] == stack[stack.length - 1]) stack.pop()
        else stack.push(s[i])
    }
    return stack.join('')
}