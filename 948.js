var bagOfTokensScore = function (tokens, power) {
    tokens.sort((a, b) => a - b)

    tokens.sort((a, b) => a - b);
    if (tokens.length === 0 || power < tokens[0]) return 0;

    let points = 0
    let l = 0
    let r = tokens.length - 1

    while (l <= r) {
        if (tokens[l] <= power) {
            power = power - tokens[l++]
            points++
        } else if (r - l >= 1) {
            power += tokens[r--]
            points--
        } else {
            break
        }
    }

    return points
};


let tokens = [100, 200, 300, 400], power = 200

console.log(bagOfTokensScore(tokens, power));