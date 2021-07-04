var findMaxConsecutiveOnes = function (arr) {
    let max = 0, zero = 0, k = 1;
    for (let l = 0, h = 0; h < nums.length; h++) {
        if (nums[h] == 0)
            zero++;
        while (zero > k)
            if (nums[l++] == 0)
                zero--;
        max = Math.max(max, h - l + 1);
    }
    return max;
};


const findMaxConsecutiveOnes = (arr) => {
    let l = 0, r = 0, max = 0, n = 0

    while (r < arr.length) {
        if (arr[r] === 0) n++


        while (n == 2) {
            if (arr[l] == 0) n--
            l++
        }

        max = Math.max(max, r - l + 1)

        r++
    }

    return max
}