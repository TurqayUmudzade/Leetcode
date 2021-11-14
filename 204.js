var countPrimes = function (n) {
    if (n <= 1) return 0;

    let notPrime = new Array(n);
    notPrime[0] = true;
    notPrime[1] = true;

    for (let i = 2; i < Math.sqrt(n); i++) {
        if (!notPrime[i]) {
            for (let j = 2; j * i < n; j++) {
                notPrime[i * j] = true;
            }
        }
    }

    let count = 0;
    for (let i = 2; i < notPrime.length; i++) {
        if (!notPrime[i]) count++;
    }
    return count;

}

console.log(countPrimes(5000000))

