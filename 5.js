
var longestPalindrome = function (s) {
    let temp = ""
    let max = temp
    for (let i = 0; i < s.length; i++) {

        temp += s[i]
        if (isPalindrome(temp)) {
            if (temp.length > max.length) max = temp
        }

    }
    return max
};



const isPalindrome = (s) => {
    for (let i = 0; i < s.length; i++)
        if (s[i] !== s[s.length - 1 - i]) return false
    return true
}


console.log(longestPalindrome("cbbd"));