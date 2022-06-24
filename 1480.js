var runningSum = function (nums) {
    let arr = [];
    arr[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        arr[i] = nums[i] + arr[i - 1];
    }
    return arr;
};
