
const myAtoi = (s) => {
    if (!s) return null
    s = s.trim()

    let isPositive = true
    let i = 0
    if (s[0] === "-") {
        isPositive = false
        i++
    } else if (s[0] === '+') i++

    let ans = 0
    for (; i < s.length; i++) {
        let c = s.charCodeAt(i) - 48
        if (c < 0 || c > 9) break
        ans = ans * 10 + c
        if (ans > 2 ** 31 - 1 || ans < -(2 ** 31)) return isPositive ? 2 ** 31 - 1 : -(2 ** 31)
    }


    return isPositive ? ans : -ans
}