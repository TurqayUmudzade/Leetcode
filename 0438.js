var findAnagrams = function (s, p = "") {


    let pMap = new Map()
    for (let i = 0; i < p.length; i++) {
        const c = p[i]
        pMap.set(c, (pMap.get(c) | 0) + 1)
    }
    const mapsAreEqual = (m1, m2) => m1.size === m2.size && Array.from(m1.keys()).every((key) => m1.get(key) === m2.get(key));

    let l = 0
    let k = p.length
    const out = []
    let sMap = new Map()
    for (let r = 0; r < s.length; r++) {
        sMap.set(s[r], (sMap.get(s[r]) | 0) + 1)
        if (r - l == k - 1) {
            if (mapsAreEqual(sMap, pMap)) out.push(l);
            let leftVal = sMap.get(s[l])
            if (leftVal > 1) sMap.set(s[l], leftVal - 1)
            else sMap.delete(s[l])
            l++
        }
    }
    return out
};

let s = "cbaebabacd", p = "abc"
console.log(findAnagrams(s, p));