var breakPalindrome = function (palindrome) {
    if (palindrome.length === 1) return '';
    let acount = 0;

    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] === 'a') acount++;
    }

    if (palindrome.length - 1 === acount) return palindrome.slice(0, palindrome.length - 1) + 'b';
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome[i] !== 'a') {
            return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
        }
    }
    return palindrome.slice(0, palindrome.length - 1) + 'b';
};