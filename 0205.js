var isIsomorphic = function (s, t) {
    let map = new Map()
    for (let i = 0; i < s.length; i++)
        if (!map.has(s[i])) map.set(s[i], t[i])
        else if (map.get(s[i]) !== t[i]) return false

    return new Set([...map.values()]).size == map.size
};


console.log(isIsomorphic("badc", "baba"));