var countAndSay = function (n) {
    let i = n - 1
    let dfs = (str) => i-- <= 0 ? str : dfs(convert(str))
    return dfs("1")
};


let convert = (str) => {
    let ans = ""
    let count = 0
    let prev = str[0]
    for (const c of str) {
        if (c === prev) {
            count++
        } else {
            ans += count + prev
            count = 1
            prev = c
        }
    }

    return ans + count + prev
}