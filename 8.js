let myAtoi = function (str) {
    if (!str) return 0;
    str = str.trim();

    let isPositive = true

    let i = 0
    let ans = ""
    if (str[0] === "-") {
        isPositive = false
        i = 1
    } else if (str[0] === "+") i = 1

    for (; i < str.length; i++) {

        let temp = str.charCodeAt(i) - 48;
        if (temp > 9 || temp < 0) break;
        ans = ans * 10 + temp
        if (ans > 2 ** 31 - 1 || ans < -(2 ** 31)) return isPositive ? 2 ** 31 - 1 : -(2 ** 31)
    }

    return isPositive ? +ans : -ans
};



console.log(2 ** 31 - 1);
console.log(myAtoi("21474836460"));
console.log(myAtoi("42"));

