const findMaxConsecutiveOnes = (arr) => {
    let l = 0
    let r = 0
    let max = 0
    let n = 0
    while (r < arr.length) {
        if (arr[r] == 0) n++

        while (n == 2) {
            if (arr[l] == 0) n--
            l++
        }

        max = Math.max(max, r - l + 1)
        r++
    }
    return max
}