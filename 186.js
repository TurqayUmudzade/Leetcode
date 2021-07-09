var reverseWords = function (s) {
    s.reverse();
    let l = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i + 1] === ' ' || s[i + 1] === undefined) {
            let r = i;
            while (l < r) {
                let temp = s[l];
                s[l] = s[r];
                s[r] = temp;
                l++, r--;
            }
            l = i + 2;
        }
    }
}

console.log(reverseWords(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]));