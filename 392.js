var isSubsequence = function (s, t) {
    let p = 0
    if (s.length === t.length && s !== t) return false

    for (let i = 0; i < s.length; i++) {
        console.log(i, p);
        if (s[i] !== t[p]) {
            while (s[i] !== t[p]) {
                p++
                if (p >= t.length) return false
            }
        }
        p++

    }
    return true
};


let s = "bb", t = "ahbgdc"
console.log(isSubsequence(s, t));