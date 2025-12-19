var searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }
    let lo = 0, hi = nums.length - 1;
    while (lo < hi) {
        const mid = parseInt((lo + hi) / 2);
        nums[mid] >= target ? hi = mid : lo = mid + 1;
    }
    if (nums[lo] !== target) {
        return [-1, -1];
    }
    const a = lo; hi = nums.length - 1;
    while (lo < hi) {
        const mid = parseInt((lo + hi) / 2);
        nums[mid] <= target ? lo = mid + 1 : hi = mid;
    }
    return nums[hi] === target ? [a, hi] : [a, hi - 1];
};