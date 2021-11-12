/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    let s = s.trim().toLowerCase().replaceAll(" ", "").replaceAll(",", "").replaceAll(":", "")
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false
    }
    return true
};