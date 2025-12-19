function findMissingRanges(nums, lower, upper) {
    const res = [];
    nums = [lower - 1, ...nums, upper + 1];

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];

        if (diff === 2) {
            res.push(`${nums[i - 1] + 1}`);
        } else if (diff > 2) {
            res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
        }
    }

    return res;
}

findMissingRanges([0, 1, 3, 50, 75], 0, 99)

//amazon