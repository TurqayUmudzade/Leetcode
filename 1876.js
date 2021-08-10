var countGoodSubstrings = function (s) {

    let sta, end, count;
    sta = end = count = 0
    const map = new Map()

    while (end < s.length) {

        if (map.has(s[end])) map.set(s[end], map.get(s[end]) + 1)
        else map.set(s[end], 1)

        if (end < 2) end++


        else if (end >= 2) {

            if (map.size === 3) count++

            if (map.get(s[sta]) > 1) map.set(s[sta], map.get(s[sta]) - 1)
            else { map.delete(s[sta]) }

            sta++
            end++
        }
    }
    return count
};