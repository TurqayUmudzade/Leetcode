var maxAlternatingSum = function (nums) {
    if (!nums) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])
    if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2], nums[0] + nums[2] - nums[1])

    for (let i = 3; i < nums.length; i++) {


    }
};



let dp = (arr) => {
    arr[i] - arr[i + 1] + dp(arr)
}