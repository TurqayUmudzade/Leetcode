var findAndReplacePattern = function (words, pattern) {

    let out = []
    let map = new Map()
    let map2 = new Map()
    for (const word of words) {
        if (word.length != pattern.length) continue
        for (let i = 0; i < word.length; i++) {
            let letter = word[i]
            if (!map.has(pattern[i]) && !map2.has(letter)) {
                map.set(pattern[i], letter)
                map2.set(letter, pattern[i])
            }

            if (!map.has(pattern[i]) || !map2.has(letter)) {
                break
            }

            if (map.has(pattern[i]) && map2.has(letter)) {
                if (map.get(pattern[i]) !== letter) break
                if (map2.get(letter) !== pattern[i]) break
            }
            if (i === word.length - 1) {
                out.push(word)
            }
        }
        map.clear()
        map2.clear()
    }
    return out
};


let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"], pattern = "abb"


console.log(findAndReplacePattern(words, pattern));
