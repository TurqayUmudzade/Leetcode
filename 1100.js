var numKLenSubstrNoRepeats = function (s, k) {

    let map = new Map()
    let l = 0
    let wordC = 0
    for (let r = 0; r < s.length; r++) {
        console.log(l, r, s[l], s[r]);
        if (!map.has(s[r])) {
            map.set(s[r], r)
        } else {
            map.set(s[r], r)
            l = Math.max(map.get(s[r]), l)
        }
        if (r - l + 1 === k) {
            console.log(s[l], s[r]);
            wordC++
            l++
        }
    }

    return wordC

};

console.log(numKLenSubstrNoRepeats('havefunonleetcode', 5));