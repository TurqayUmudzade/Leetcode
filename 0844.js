var backspaceCompare = function (s, t) {
    return format(s) == format(t)
};

function format(s) {
    let ans = ""
    let n = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '#')
            n++
        else if (n > 0)
            n--
        else
            ans += s[i]
    }
    return ans
}
