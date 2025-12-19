var canJump = function (nums) {
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (max < i) return false
        max = Math.max(i + nums[i], max);
    }
    return true;
};