var maxProduct = function (nums) {

    if (nums.length === 1) return nums[0];

    let curPositiveProduct = 0, curNegativeProduct = 0, ans = 0;
    for (const n of nums) {
        const temp = curPositiveProduct;
        curPositiveProduct = Math.max(n, n * curPositiveProduct, n * curNegativeProduct);
        curNegativeProduct = Math.min(n, n * temp, n * curNegativeProduct);
        ans = Math.max(ans, curPositiveProduct);
    }

    return ans;
};