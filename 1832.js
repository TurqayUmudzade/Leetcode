var checkIfPangram = function (sentence) {
    const alpha = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 97));
    let seen = new Set([...sentence])
    for (const letter of alpha) {
        if (!seen.has(letter)) return false
    }
    return true
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"

console.log(checkIfPangram(sentence));