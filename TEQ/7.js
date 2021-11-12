var reverse = function (x) {
    let sign = 1
    if (x < 0) sign = -1
    x = Math.abs(x)


    let rev = 0
    while (x > 0) {
        rev = rev * 10 + x % 10
        x = Math.floor(x / 10)
    }

    x = rev

    if (x > (2 ** 31) - 1) return 0
    return x * sign
};


console.log(reverse(123))