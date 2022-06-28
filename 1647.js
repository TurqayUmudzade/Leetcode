


var minDeletions = function (s) {
    s = [...s].sort()
    let set = new Set()
    let c = 1
    let deletions = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            c++
        } else {
            if (set.has(c)) {
                while (set.has(c)) {
                    c--
                    deletions++
                }
            }
            if (c)
                set.add(c)
            c = 1
        }

    }

    return deletions
};

var minDeletions = function (s) {
    let map = new Map()
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }


    let set = new Set()
    let deletions = 0
    for (let [key, val] of map) {
        while (set.has(val)) {
            deletions++
            val--
        }
        if (val)
            set.add(val)
    }

    return deletions
};

//aaaabbbbcccdd