var threeSumClosest = function (arr, target) {
    let closest = Infinity
    arr.sort((a, b) => a - b)


    for (let i = 0; i < arr.length; i++) {
        let l = i + 1
        let r = arr.length - 1
        while (l < r) {
            let sum = arr[i] + arr[l] + arr[r]
            if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;

            if (sum > target) r--
            else l++
        }
    }
    return closest
};


let nums = [-1, 2, 1, -4]

console.log(threeSumClosest(nums, 1));