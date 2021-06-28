var maxArea = function (height) {
    let max = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i; j < height.length; j++) {
            max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
        }
    }
    return max
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])

