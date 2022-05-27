var minSwaps = function (arr) {
    let nOnes = 0
    arr.forEach(e => {
        e == 1 && nOnes++
    });

    let l = 0, r = 0, ct = 0, ans = 0
    for (r = 0; r < arr.length; r++) {
        if (arr[r] === 1) {
            ct++
        }
        if (r - l + 1 == nOnes) {
            ans = Math.max(ans, ct)
            if (arr[l++] === 1) {
                ct--
            }
        }
    }
    return nOnes - ans

};




console.log(minSwaps([1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1]));
// console.log(minSwaps([1, 0, 1, 0, 1]));