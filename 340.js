var lengthOfLongestSubstringKDistinct = function (s, k) {
    let map = new Map()
    let max = 0

    let start = 0
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], 1)
        else map.set(s[i], map.get(s[i]) + 1)

        if (map.size <= k) { max = Math.max(max, i - start + 1) }
        while (map.size > k) {
            let str = map.get(s[start])
            if (str > 1) map.set(s[start], str - 1)
            else map.delete(s[start])
            start++
        }

    }

    return max
};