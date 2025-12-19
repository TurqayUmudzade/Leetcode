var isHappy = function (n) {

    let set = new Set()
    while (helper(n) !== 1) {
        if (set.has(n)) return false
        set.add(n)
        n = helper(n)
    }
    return true

};

function helper(n) {
    let ans = 0
    while (n > 0) {
        ans += (n % 10) ** 2
        n = n / 10 | 0
    }
    return ans
}

console.log(isHappy(19));
console.log(isHappy(2));