//2 Pointer
var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};


//Recursion
var reverseString2 = function (s) {
    let out = []

    const recursion = () => {
        if (!s[0]) return
        out.push(s.pop())
        recursion()
    }

    recursion()
    return out
};


console.log(reverseString2(["h", "e", "l", "l", "o"]));