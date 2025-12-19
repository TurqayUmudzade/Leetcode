var isPalindrome = function (str) {
    let arr = [...str]
    arr = arr.filter(c => isLetter(c.charCodeAt(0)) === true).join("").toLowerCase()
    return test(arr)
};


const isLetter = (code) => {
    if (((code >= 48) && (code <= 57))  // numbers
        || ((code >= 65) && (code <= 90))  // uppercase
        || ((code >= 97) && (code <= 122)))   // lowercase
        return true
    else
        return false
}

const test = (s) => {
    for (let i = 0; i < s.length; i++)
        if (s[i] !== s[s.length - 1 - i]) return false
    return true
}





console.log(isPalindrome("abdba"));
