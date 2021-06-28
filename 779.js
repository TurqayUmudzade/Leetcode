var kthGrammar = function (n, k) {

    let arr = ["0"]
    for (let i = 0; i < n; i++) {
        let temp = ""
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === "0") temp += "01"
            else if (arr[i][j] === "1") temp += "10"
        }
        arr.push(temp)
    }
    return arr[n - 1][k - 1]
};

var kthGrammar = function (N, K) {
    if (K <= 1) return 0;
    let mid = Math.ceil(K / 2);
    return kthGrammar(N, mid) === K % 2 ? 1 : 0;
};

console.log(kthGrammar(2, 2));