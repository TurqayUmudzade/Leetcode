var removePalindromeSub = function (S) {
    if (!S) return 0
    for (let i = 0, j = S.length - 1; i < j; i++, j--)
        if (S.charAt(i) !== S.charAt(j)) return 2
    return 1
};