var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return ''

    let palindrome = palindrome.split('')
    palindrome[0] = 'z'
    return palindrome.join('')
};