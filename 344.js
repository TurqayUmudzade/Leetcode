var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};





console.log(reverseString2(["h", "e", "l", "l", "o"]));