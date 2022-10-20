var removeDuplicates = function (s, k) {
    let stack = [[s[0], 1]]

    for (let i = 1; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1][0] === s[i]) stack[stack.length - 1][1]++
        else stack.push([s[i], 1])
        if (stack[stack.length - 1][1] === k) stack.pop()
    }
    return stack.reduce((str, [c, f]) => str += c.repeat(f), '');
};

let s = "deeedbbcccbdaa", k = 3
console.log(removeDuplicates(s, k));


console.log(removeDuplicates("deeedbbcccbdaa", 3));