var nthMagicalNumber = function (N, A, B) {
    var temp;
    if (B > A) {
        temp = A;
        A = B;
        B = temp;
    }

    var shareFreq = ((A + B) / GCD(A, B)) - 1;
    var numShares = Math.floor(N / shareFreq);
    var superN = N + numShares;


    var X = Math.ceil(superN * B / (A + B));
    var Y = Math.ceil(superN - (superN * B / (A + B)));

    var mod = (10 ** 9) + 7;

    if (X * A <= Y * B) return (X * A) % mod;
    else return (Y * B) % mod;
};

var GCD = function (x, y) {
    while (y != 0) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}