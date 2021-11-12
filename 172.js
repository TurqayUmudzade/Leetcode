var trailingZeroes = function (n) {
    let res = 0

    function helper(n) {
        if (n < 5) return
        res += n / 5 | 0
        helper(n / 5 | 0)
    }

    helper(n)
    return res
};


var trailingZeroes = function (n, res = 0) {
    if (n < 5) return res;
    res += n / 5 | 0
    return trailingZeroes(n / 5 | 0, res)
};

const trailingZeroes = () => n == 0 ? 0 : (n / 5 | 0) + trailingZeroes(n / 5 | 0);



console.log(trailingZeroes(30))