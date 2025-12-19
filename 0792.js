var numMatchingSubseq = function (s, words) {
    // let map = new Map()

    // for (const c of s) {
    //     map.set(c, (map.get(c) || 0) + 1)
    // }
    // console.log(map);

    s = [...s].sort()

    for (let i = 0; i < words.length; i++) {
        words[i] = [...words[i]].sort()
    }
    console.log(s);
    console.log(words);

    for (const word of words) {

        for (let i = 0; i < word.length; i++) {
            if
            
        }
    }
};

let s = "abcde", words = ["a", "bb", "acd", "ace"]

numMatchingSubseq(s, words)