var firstUniqChar = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) map.set(s[i], -1)
        else map.set(s[i], i)
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === i) return i
    }

    return -1
};
