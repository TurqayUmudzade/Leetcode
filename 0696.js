var countBinarySubstrings = function (s) {
    let out = 0
    let cur = 1
    let prev = 0
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) cur++
        else {
            out += Math.min(cur, prev)
            prev = cur
            cur = 1
        }
    }
    return out + Math.min(cur, prev)
};

console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));