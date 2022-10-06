var longestConsecutive = function (arr) {
    let set = new Set(arr);
    let c = 0, max = 0;

    for (let item of arr) {
        if (!set.has(item - 1)) {
            let temp = item;
            while (set.has(temp++)) max = Math.max(max, ++c);
            c = 0;
        }
    }
    return max;
};

let nums = [100, 4, 200, 1, 3, 2]
nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
longestConsecutive(nums)