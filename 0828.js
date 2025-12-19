var uniqueLetterString = function (s) {

};

function subString(s) {
    let arr = []

    let dfs = (s) => {
        forof
    }

    dfs(s)
    return arr
}

function countUnique(s) {
    let map = new Map()
    for (const c of s) {
        if (map.has(c)) map.set(c, false)
        else map.set(c, true)
    }

    let c = 0
    for (const [key, val] of map.entries()) {
        if (val) c++
    }

    return c
}

console.log(subString('ABC'));