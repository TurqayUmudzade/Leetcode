var shortestWay = function (source, target) {
    let set = new Set(source)
    let map = new Map()
    for (const c of source) {
        map.set(c, true)
    }
    let j = 0, res = 1

    for (let i = 0; i < target.length; i++) {
        if (!set.has(c)) return -1
        while (j < source.length && source[j] != target[i]) {
            j++;
        }
        if (j == source.length) {
            j = -1;
            res++;
            i--;
        }
    }
    return res
};