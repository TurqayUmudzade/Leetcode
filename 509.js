const fib = (n) => {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
}


const fib = (n) => {
    let memo = []
    if (n <= 1) return n
    if (memo[n]) return memo[n]
    return memo[n] = fib(n - 1) + fib(n - 2)
}



const fib = (n) => {
    let memo = []
    memo[0] = 0
    memo[1] = 0
    for (let i = 2; i <= n; i++)
        memo[i] = memo[i - 1] + memo[i - 2]

    return memo[n]
}


