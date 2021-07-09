var findLength = function (A, B) {
    const dp = [...Array(A.length + 1)].map(() => Array(B.length + 1).fill(0));
    let maxLen = 0;

    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= B.length; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    return maxLen;
};


console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]));

