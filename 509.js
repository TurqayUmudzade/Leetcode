var fib = function (n) {
    if (n <= 1) return n
    else return fib(n - 1) + fib(n - 2)
};

const fib = (n) => {
    let map = {}
    if (n == 0 || n == 1) return n

    if (map[n]) return map[n]

    return map[n] = fib(n - 1) + fib(n - 2)
}


var fib = function (n) {
    let memo = new Array(n + 1)
    memo[0] = 0
    memo[1] = 1
    for (let i = 2; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
};