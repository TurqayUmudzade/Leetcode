var repeatedCharacter = function (s) {
    let map = new Map()

    for (const c of s) {
        if (map.has(c)) {
            return c
        } else {
            map.set(c, 1)
        }
    }
};

let s = "abcdd"
console.log(repeatedCharacter(s));
